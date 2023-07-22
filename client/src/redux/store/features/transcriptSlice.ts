import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from 'apis/nlu'
import useAxios from 'hooks/useAxios'
import { TranscriptResponse } from 'type/model/transcript'

export const ACTION_TYPE = {
  GET_TRANSCRIPT: 'GET_TRANSCRIPT',
}

export interface ScoreState {
  loading: boolean
  transcript: TranscriptResponse | null
}

const initialState: ScoreState = {
  loading: false,
  transcript: null,
}

const getTranscript = createAsyncThunk(ACTION_TYPE.GET_TRANSCRIPT, async (payload: any, thunkAPI) => {
  try {
    const response = await useAxios({
      axiosInstance: axiosInstance,
      method: 'POST',
      url: '/srm/w-locdsdiemsinhvien',
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
        state.transcript = action.payload.data.data
        return state
      })
      .addCase(getTranscript.rejected, state => {
        state.loading = false
        return state
      })
  },
})

export { getTranscript }
