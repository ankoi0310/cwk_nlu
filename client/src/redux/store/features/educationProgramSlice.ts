import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from 'apis/nlu'
import useAxios from 'hooks/useAxios'

export const ACTION_TYPE = {
  GET_EDUCATION_PROGRAM: 'GET_EDUCATION_PROGRAM',
}

export interface EducationProgramState {
  educationProgramResponse: EducationProgramResponse | null
}

const initialState: EducationProgramState = {
  educationProgramResponse: null,
}

const getEducationProgram = createAsyncThunk(ACTION_TYPE.GET_EDUCATION_PROGRAM, async (data: any, thunkAPI) => {
  try {
    const response = await useAxios({
      axiosInstance: axiosInstance,
      method: 'POST',
      url: '/sch/w-locdsctdtsinhvien',
      data: data,
    })

    return thunkAPI.fulfillWithValue(response.data)
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || error.message)
  }
})

export const EducationProgramSlice = createSlice({
  name: 'educationProgram',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getEducationProgram.fulfilled, (state, action) => {
      state.educationProgramResponse = action.payload.data

      if (state.educationProgramResponse) {
        state.educationProgramResponse.ds_CTDT_hocky.forEach((semester: EducationProgram) => {
          semester.ds_CTDT_mon_hoc.sort((a: EducationProgramSubject, b: EducationProgramSubject) => {
            return a.ma_mon.localeCompare(b.ma_mon)
          })
        })
      }
    })
  },
})

export { getEducationProgram }
