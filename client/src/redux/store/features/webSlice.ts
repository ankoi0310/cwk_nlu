import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from 'apis/nlu'
import useAxios from 'hooks/useAxios'

export const ACTION_TYPE = {
  BANNER: 'BANNER',
  NEWS: 'NEWS',
  NOTIFICATION: 'NOTIFICATION',
  GUIDE: 'GUIDE',
  TUITION: 'TUITION',
  DETAIL: 'DETAIL',
}

export interface WebState {
  banner: Banner | null
  news: Post[] | null
  notification: Post[] | null
  guide: Post[] | null
  tuition: Post[] | null
  detail: Post | null
}

const initialState: WebState = {
  banner: null,
  news: null,
  notification: null,
  guide: null,
  tuition: null,
  detail: null,
}

const getBanner = createAsyncThunk(ACTION_TYPE.BANNER, async (data: any, thunkAPI) => {
  try {
    const response = await useAxios({
      axiosInstance: axiosInstance,
      method: 'POST',
      url: '/web/w-locdsbanner',
      data: data,
    })

    return thunkAPI.fulfillWithValue(response.data)
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || error.message)
  }
})

const useAxiosForWebPost = async (data = {}) => {
  return await useAxios({
    axiosInstance: axiosInstance,
    method: 'POST',
    url: '/web/w-locdsbaiviet',
    data: data,
  })
}

const getNews = createAsyncThunk(ACTION_TYPE.NEWS, async (data: any, thunkAPI) => {
  try {
    const response = await useAxiosForWebPost(data)

    return thunkAPI.fulfillWithValue(response.data)
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || error.message)
  }
})

const getNotification = createAsyncThunk(ACTION_TYPE.NOTIFICATION, async (data: any, thunkAPI) => {
  try {
    const response = await useAxiosForWebPost(data)

    return thunkAPI.fulfillWithValue(response.data)
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || error.message)
  }
})

const getGuide = createAsyncThunk(ACTION_TYPE.GUIDE, async (data: any, thunkAPI) => {
  try {
    const response = await useAxiosForWebPost(data)

    return thunkAPI.fulfillWithValue(response.data)
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || error.message)
  }
})

const getTuition = createAsyncThunk(ACTION_TYPE.TUITION, async (data: any, thunkAPI) => {
  try {
    const response = await useAxiosForWebPost(data)

    return thunkAPI.fulfillWithValue(response.data)
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || error.message)
  }
})

const getDetail = createAsyncThunk(ACTION_TYPE.DETAIL, async (data: any, thunkAPI) => {
  try {
    const response = await useAxiosForWebPost(data)

    return thunkAPI.fulfillWithValue(response.data)
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || error.message)
  }
})

export const WebSlice = createSlice({
  name: 'web',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // banner
      .addCase(getBanner.fulfilled, (state, action) => {
        state.banner = action.payload.data.ds_banner[0]
        return state
      })
      // news
      .addCase(getNews.fulfilled, (state, action) => {
        state.news = action.payload.data.ds_bai_viet
        return state
      })
      // notification
      .addCase(getNotification.fulfilled, (state, action) => {
        state.notification = action.payload.data.ds_bai_viet
        return state
      })
      // guide
      .addCase(getGuide.fulfilled, (state, action) => {
        state.guide = action.payload.data.ds_bai_viet
        return state
      })
      // tuition
      .addCase(getTuition.fulfilled, (state, action) => {
        state.tuition = action.payload.data.ds_bai_viet
        return state
      })
      // detail
      .addCase(getDetail.fulfilled, (state, action) => {
        state.detail = action.payload.data.ds_bai_viet[0]
        return state
      })
  },
})

export { getBanner, getNews, getNotification, getGuide, getTuition, getDetail }
