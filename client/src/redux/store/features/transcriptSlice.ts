import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from 'apis/nlu'
import useAxios from 'hooks/useAxios'
import { BaseState } from './baseState'

export const ACTION_TYPE = {
  GET_TRANSCRIPT: 'GET_TRANSCRIPT',
}

export interface ScoreState extends BaseState {
  transcript: any
}

const initialState: ScoreState = {
  loading: false,
  error: null,
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
    console.log(response)

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
      .addCase(getTranscript.pending, (state, action) => {
        state.loading = true
        return state
      })
      .addCase(getTranscript.fulfilled, (state, action) => {
        state.loading = false
        state.transcript = action.payload
        return state
      })
      .addCase(getTranscript.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
        return state
      })
  },
})

export default TranscriptSlice.reducer
export { getTranscript }
