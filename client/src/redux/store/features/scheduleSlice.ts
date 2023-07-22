import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from 'apis/nlu'
import useAxios from 'hooks/useAxios'

export const ACTION_TYPE = {
  GET_SEMESTER_FILTER_LIST: 'GET_SEMESTER_FILTER_LIST',
  GET_OBJECT_FILTER_LIST: 'GET_OBJECT_FILTER_LIST',
  GET_SCHEDULE: 'GET_SCHEDULE',
}

export interface ScheduleState {
  semesterFilterList: { loading: boolean; data: SemesterFilter[] }
  objectFilterList: { loading: boolean; data: ObjectFilter[] }
  schedule: { loading: boolean; data: ScheduleItem[] }
}

const initialState: ScheduleState = {
  semesterFilterList: { loading: false, data: [] },
  objectFilterList: { loading: false, data: [] },
  schedule: { loading: false, data: [] },
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

    return thunkAPI.fulfillWithValue(response)
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

    return thunkAPI.fulfillWithValue(response)
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

    return thunkAPI.fulfillWithValue(response)
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
      .addCase(getSemesterFilterList.pending, state => {
        state.semesterFilterList.loading = true
      })
      .addCase(getSemesterFilterList.fulfilled, (state, action) => {
        state.semesterFilterList.loading = false
        state.semesterFilterList.data = action.payload.data?.ds_hoc_ky
      })
      .addCase(getSemesterFilterList.rejected, state => {
        state.semesterFilterList.loading = false
      })
      .addCase(getObjectFilterList.pending, state => {
        state.objectFilterList.loading = true
      })
      .addCase(getObjectFilterList.fulfilled, (state, action) => {
        state.objectFilterList.loading = false
        state.objectFilterList.data = action.payload.data?.ds_doi_tuong_tkb
      })
      .addCase(getObjectFilterList.rejected, state => {
        state.objectFilterList.loading = false
      })
      .addCase(getSchedule.pending, state => {
        state.schedule.loading = true
      })
      .addCase(getSchedule.fulfilled, (state, action) => {
        state.schedule.loading = false
        state.schedule.data = action.payload.data?.ds_nhom_to
      })
      .addCase(getSchedule.rejected, state => {
        state.schedule.loading = false
      })
  },
})

export { getSemesterFilterList, getObjectFilterList, getSchedule }
