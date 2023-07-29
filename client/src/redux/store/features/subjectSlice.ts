import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from 'apis/nlu'
import useAxios from 'hooks/useAxios'

export const ACTION_TYPE = {
  GET_SUBJECT_FILTER: 'GET_SUBJECT_FILTER',
  GET_COURSE_LIST: 'GET_COURSE_LIST',
  REGISTER_COURSE: 'REGISTER_COURSE',
  GET_REGISTERED_COURSE: 'GET_REGISTERED_COURSE',
  REMOVE_REGISTERED_COURSE: 'REMOVE_REGISTERED_COURSE',
}

export interface SubjectState {
  filter: any
  courseResponse: CourseResponse | null
  subjects: CourseSubject[] | null
  courses: Course[] | null
  courseRegistrationResponse: CourseRegistrationResponse | null
  isUpdate: boolean
  registeredCourseResponse: RegisteredCourseResponse | null
}

const initialState: SubjectState = {
  filter: null,
  courseResponse: null,
  subjects: null,
  courses: null,
  courseRegistrationResponse: null,
  registeredCourseResponse: null,
  isUpdate: false,
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
    return thunkAPI.rejectWithValue(error.response?.data || error)
  }
})
/*--------------------*/

/*---------- Đăng ký môn học ----------*/
const getRegisteredCourse = createAsyncThunk(ACTION_TYPE.GET_REGISTERED_COURSE, async (data: any, thunkAPI) => {
  try {
    const response = await useAxios({
      axiosInstance: axiosInstance,
      method: 'POST',
      url: '/dkmh/w-locdskqdkmhsinhvien',
      data: data,
    })

    return thunkAPI.fulfillWithValue(response.data)
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || error.message)
  }
})
/*--------------------*/

/*---------- Đăng ký môn học ----------*/
const removeRegisteredCourse = createAsyncThunk(ACTION_TYPE.REMOVE_REGISTERED_COURSE, async (data: any, thunkAPI) => {
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
/*--------------------*/

export const SubjectSlice = createSlice({
  name: 'subject',
  initialState,
  reducers: {
    reset: () => initialState,
  },
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

        return state
      })
      // register course
      .addCase(registerCourse.fulfilled, (state, action) => {
        state.courseRegistrationResponse = action.payload.data
        state.isUpdate = true
        return state
      })
      // get registered course
      .addCase(getRegisteredCourse.fulfilled, (state, action) => {
        state.registeredCourseResponse = action.payload.data
        if (state.isUpdate) {
          state.isUpdate = false
        }
        return state
      })
      // remove registered course
      .addCase(removeRegisteredCourse.fulfilled, (state, action) => {
        state.courseRegistrationResponse = action.payload.data
        state.isUpdate = true
        return state
      })
  },
})

export { getCourses, registerCourse, getRegisteredCourse, removeRegisteredCourse }
