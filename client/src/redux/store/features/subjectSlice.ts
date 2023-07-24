import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from 'apis/nlu'
import useAxios from 'hooks/useAxios'
import { Course, Subject } from 'type/model/course'

export const ACTION_TYPE = {
  GET_SUBJECT_FILTER: 'GET_SUBJECT_FILTER',
  GET_COURSE_LIST: 'GET_COURSE_LIST',
  REGISTER_COURSE: 'REGISTER_COURSE',
}

export interface SubjectState {
  filter: any
  subjects: Subject[] | null
  courses: Course[] | null
  registerSuccess: boolean
}

const initialState: SubjectState = {
  filter: null,
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

    return thunkAPI.fulfillWithValue(response.data)
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
      .addCase(getCourses.fulfilled, (state, action) => {
        state.subjects = action.payload.data.ds_mon_hoc
        state.courses = action.payload.data.ds_nhom_to
      })
      // registration result
      .addCase(registerCourse.fulfilled, (state, action) => {
        state.registerSuccess = action.payload.data.is_thanh_cong
      })
  },
})

export { getCourses, registerCourse }
