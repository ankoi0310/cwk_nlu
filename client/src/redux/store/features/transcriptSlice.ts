import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from 'apis/nlu'
import useAxios from 'hooks/useAxios'

export const ACTION_TYPE = {
  GET_TRANSCRIPT: 'GET_TRANSCRIPT',
}

export interface TranscriptState {
  transcriptResponse: TranscriptResponse | null
}

const initialState: TranscriptState = {
  transcriptResponse: null,
}

const getTranscript = createAsyncThunk(ACTION_TYPE.GET_TRANSCRIPT, async (payload: any, thunkAPI) => {
  try {
    const response = await useAxios({
      axiosInstance: axiosInstance,
      method: 'POST',
      url: '/srm/w-locdsdiemsinhvien',
    })

    return thunkAPI.fulfillWithValue(response.data)
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || error.message)
  }
})

export const TranscriptSlice = createSlice({
  name: 'transcript',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // getTranscript
      .addCase(getTranscript.fulfilled, (state, action) => {
        state.transcriptResponse = action.payload.data
        return state
      })
  },
})

export { getTranscript }
