import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from 'apis/nlu'
import useAxios from 'hooks/useAxios'

export const ACTION_TYPE = {
  GET_TRANSCRIPT: 'GET_TRANSCRIPT',
}

export interface ScoreState {
  loading: boolean
  transcript: any
}

const initialState: ScoreState = {
  loading: false,
  transcript: null,
}

const getTranscript = createAsyncThunk(ACTION_TYPE.GET_TRANSCRIPT, async (payload: any, thunkAPI) => {
  try {
    console.log('signal', payload?.signal)
    const response = await useAxios({
      axiosInstance: axiosInstance,
      method: 'POST',
      url: '/srm/w-locdsdiemsinhvien',
      headers: {
        Authorization: `Bearer ${payload?.token}`,
      },
      params: {
        signal: payload?.signal,
      },
    })

    return thunkAPI.fulfillWithValue(response)
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error?.response?.data?.message || error?.message)
  }
})

export const TranscriptSlice = createSlice({
  name: 'transcript',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // getTranscript
      .addCase(getTranscript.pending, state => {
        state.loading = true
        return state
      })
      .addCase(getTranscript.fulfilled, (state, action) => {
        state.loading = false
        state.transcript = action.payload
        return state
      })
      .addCase(getTranscript.rejected, state => {
        state.loading = false
        return state
      })
  },
})

export { getTranscript }
