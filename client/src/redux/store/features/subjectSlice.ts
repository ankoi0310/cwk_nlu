import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from 'apis/nlu'
import useAxios from 'hooks/useAxios'

export const ACTION_TYPE = {
  GET_SUBJECT_FILTER: 'GET_SUBJECT_FILTER',
  GET_COURSE_LIST: 'GET_COURSE_LIST',
  REGISTER_COURSE: 'REGISTER_COURSE',
}

export interface SubjectState {
  filter: any
  subjects: Subject[]
  courses: Course[]
  registrationResult: any
}

const initialState: SubjectState = {
  filter: null,
  subjects: [],
  courses: [],
  registrationResult: {
    loading: false,
    success: false,
  },
}

/*---------- Lấy danh sách nhóm/tổ môn học ----------*/
const getCourses = createAsyncThunk(ACTION_TYPE.GET_COURSE_LIST, async (data: any, thunkAPI) => {
  try {
    const response = await useAxios({
      axiosInstance: axiosInstance,
      method: 'POST',
      url: '/dkmh/w-locdsnhomto',
      data: data,
    })

    return thunkAPI.fulfillWithValue(response)
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error?.response?.data?.message || error?.message)
  }
})
/*--------------------*/

/*---------- Đăng ký môn học ----------*/
const registerCourse = createAsyncThunk(ACTION_TYPE.REGISTER_COURSE, async (data: any, thunkAPI) => {
  try {
    const response = await useAxios({
      axiosInstance: axiosInstance,
      method: 'POST',
      url: '/dkmh/w-xulydkmhsinhvien',
      data: data,
    })

    return thunkAPI.fulfillWithValue(response)
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error?.response?.data?.message || error?.message)
  }
})

export const SubjectSlice = createSlice({
  name: 'subject',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // get subject filter
      .addCase(getCourses.pending, state => {
        state.courses = []
      })
      .addCase(getCourses.fulfilled, (state, action) => {
        state.subjects = (action.payload.data as CourseData).ds_mon_hoc
        state.courses = (action.payload.data as CourseData).ds_nhom_to
      })
      .addCase(getCourses.rejected, state => {
        state.courses = []
      })
      // registration result
      .addCase(registerCourse.pending, state => {
        state.registrationResult.loading = true
      })
      .addCase(registerCourse.fulfilled, (state, action) => {
        state.registrationResult.loading = false
        state.registrationResult.success = true
      })
      .addCase(registerCourse.rejected, state => {
        state.registrationResult.loading = false
        state.registrationResult.success = false
      })
  },
})

export { getCourses, registerCourse }
