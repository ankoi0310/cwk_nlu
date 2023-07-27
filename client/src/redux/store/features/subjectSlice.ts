import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from 'apis/nlu'
import useAxios from 'hooks/useAxios'
import { Course, CourseResponse, Subject } from 'type/model/course'

export const ACTION_TYPE = {
  GET_SUBJECT_FILTER: 'GET_SUBJECT_FILTER',
  GET_COURSE_LIST: 'GET_COURSE_LIST',
  REGISTER_COURSE: 'REGISTER_COURSE',
}

export interface SubjectState {
  filter: any
  courseResponse: CourseResponse | null
  subjects: Subject[] | null
  courses: Course[] | null
  registerSuccess: boolean
}

const initialState: SubjectState = {
  filter: null,
  courseResponse: null,
  subjects: null,
  courses: null,
  registerSuccess: false,
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

    return thunkAPI.fulfillWithValue(response.data)
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || error.message)
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

    return thunkAPI.fulfillWithValue(response.data)
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || error.message)
  }
})

export const SubjectSlice = createSlice({
  name: 'subject',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // get subject filter
      .addCase(getCourses.fulfilled, (state, action) => {
        state.courseResponse = action.payload.data
        const subjects = action.payload.data.ds_mon_hoc as CourseSubject[]
        const courses = action.payload.data.ds_nhom_to as Course[]

        courses.forEach(course => {
          course.ten_mon = subjects.find(subject => subject.ma === course.ma_mon)?.ten || ''
        })

        state.subjects = subjects
        state.courses = courses
      })
      // registration result
      .addCase(registerCourse.fulfilled, (state, action) => {
        state.registerSuccess = action.payload.data.is_thanh_cong
      })
  },
})

export { getCourses, registerCourse }
