import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from 'apis/nlu'
import useAxios from 'hooks/useAxios'

export const ACTION_TYPE = {
  GET_SEMESTER_FILTER_LIST: 'GET_SEMESTER_FILTER_LIST',
  GET_OBJECT_FILTER_LIST: 'GET_OBJECT_FILTER_LIST',
  GET_SCHEDULE: 'GET_SCHEDULE',
}

export interface ScheduleState {
  semesterFilters: SemesterFilter[] | null
  objectFilters: ObjectFilter[] | null
  schedule: ScheduleItem[] | null
}

const initialState: ScheduleState = {
  semesterFilters: null,
  objectFilters: null,
  schedule: null,
}

/*---------- Lấy danh sách lọc học kỳ ----------*/
const getSemesterFilterList = createAsyncThunk(ACTION_TYPE.GET_SEMESTER_FILTER_LIST, async (data: any, thunkAPI) => {
  try {
    const response = await useAxios({
      axiosInstance: axiosInstance,
      method: 'POST',
      url: '/sch/w-locdshockytkbuser',
      data: data,
    })

    return thunkAPI.fulfillWithValue(response.data)
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error?.response?.data?.message || error?.message)
  }
})
/*--------------------*/

/*---------- Lấy danh sách lọc theo học kỳ ----------*/
const getObjectFilterList = createAsyncThunk(ACTION_TYPE.GET_OBJECT_FILTER_LIST, async (data: any, thunkAPI) => {
  try {
    const response = await useAxios({
      axiosInstance: axiosInstance,
      method: 'POST',
      url: '/sch/w-locdsdoituongthoikhoabieuhocky',
    })

    return thunkAPI.fulfillWithValue(response.data)
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error?.response?.data?.message || error?.message)
  }
})
/*--------------------*/

/*---------- Xem thời khoá biểu ----------*/
const getSchedule = createAsyncThunk(ACTION_TYPE.GET_SCHEDULE, async (data: any, thunkAPI) => {
  try {
    const response = await useAxios({
      axiosInstance: axiosInstance,
      method: 'POST',
      url: '/sch/w-locdstkbhockytheodoituong',
      data: data,
    })

    if (!response.data.result) {
      return thunkAPI.rejectWithValue(response.data.message)
    }

    return thunkAPI.fulfillWithValue(response.data)
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error?.response?.data?.message || error?.message)
  }
})
/*--------------------*/

export const ScheduleSlice = createSlice({
  name: 'web',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getSemesterFilterList.fulfilled, (state, action) => {
        state.semesterFilters = action.payload.data.ds_hoc_ky
      })
      .addCase(getObjectFilterList.fulfilled, (state, action) => {
        state.objectFilters = action.payload.data.ds_doi_tuong_tkb
      })
      .addCase(getSchedule.fulfilled, (state, action) => {
        state.schedule = action.payload.data.ds_nhom_to
      })
  },
})

export { getSemesterFilterList, getObjectFilterList, getSchedule }
