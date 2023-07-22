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
  banner: { loading: boolean; data: any }
  news: { loading: boolean; data: [] }
  notification: { loading: boolean; data: [] }
  guide: { loading: boolean; data: [] }
  tuition: { loading: boolean; data: [] }
  detail: { loading: boolean; data: any }
}

const initialState: WebState = {
  banner: { loading: false, data: null },
  news: { loading: false, data: [] },
  notification: { loading: false, data: [] },
  guide: { loading: false, data: [] },
  tuition: { loading: false, data: [] },
  detail: { loading: false, data: null },
}

const getBanner = createAsyncThunk(ACTION_TYPE.BANNER, async (data: any, thunkAPI) => {
  try {
    const response = await useAxios({
      axiosInstance: axiosInstance,
      method: 'POST',
      url: '/web/w-locdsbanner',
      data: data,
    })

    return thunkAPI.fulfillWithValue(response)
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error?.response?.data?.message || error?.message)
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

    return thunkAPI.fulfillWithValue(response)
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error?.response?.data?.message || error?.message)
  }
})

const getNotification = createAsyncThunk(ACTION_TYPE.NOTIFICATION, async (data: any, thunkAPI) => {
  try {
    const response = await useAxiosForWebPost(data)

    return thunkAPI.fulfillWithValue(response)
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error?.response?.data?.message || error?.message)
  }
})

const getGuide = createAsyncThunk(ACTION_TYPE.GUIDE, async (data: any, thunkAPI) => {
  try {
    const response = await useAxiosForWebPost(data)

    return thunkAPI.fulfillWithValue(response)
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error?.response?.data?.message || error?.message)
  }
})

const getTuition = createAsyncThunk(ACTION_TYPE.TUITION, async (data: any, thunkAPI) => {
  try {
    const response = await useAxiosForWebPost(data)

    return thunkAPI.fulfillWithValue(response)
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error?.response?.data?.message || error?.message)
  }
})

const getDetail = createAsyncThunk(ACTION_TYPE.DETAIL, async (data: any, thunkAPI) => {
  try {
    const response = await useAxiosForWebPost(data)

    return thunkAPI.fulfillWithValue(response)
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error?.response?.data?.message || error?.message)
  }
})

export const WebSlice = createSlice({
  name: 'web',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // banner
      .addCase(getBanner.pending, state => {
        state.banner.loading = true
        return state
      })
      .addCase(getBanner.fulfilled, (state, action) => {
        state.banner.loading = false
        state.banner.data = action.payload.data.data.ds_banner[0]
        return state
      })
      .addCase(getBanner.rejected, state => {
        state.banner.loading = false
        return state
      })
      // news
      .addCase(getNews.pending, state => {
        state.news.loading = true
        return state
      })
      .addCase(getNews.fulfilled, (state, action) => {
        state.news.loading = false
        state.news.data = action.payload.data.data.ds_bai_viet
        return state
      })
      .addCase(getNews.rejected, state => {
        state.news.loading = false
        return state
      })
      // notification
      .addCase(getNotification.pending, state => {
        state.notification.loading = true
        return state
      })
      .addCase(getNotification.fulfilled, (state, action) => {
        state.notification.loading = false
        state.notification.data = action.payload.data.data.ds_bai_viet
        return state
      })
      .addCase(getNotification.rejected, state => {
        state.notification.loading = false
        return state
      })
      // guide
      .addCase(getGuide.pending, state => {
        state.guide.loading = true
        return state
      })
      .addCase(getGuide.fulfilled, (state, action) => {
        state.guide.loading = false
        state.guide.data = action.payload.data.data.ds_bai_viet
        return state
      })
      .addCase(getGuide.rejected, state => {
        state.guide.loading = false
        return state
      })
      // tuition
      .addCase(getTuition.pending, state => {
        state.tuition.loading = true
        return state
      })
      .addCase(getTuition.fulfilled, (state, action) => {
        state.tuition.loading = false
        state.tuition.data = action.payload.data.data.ds_bai_viet
        return state
      })
      .addCase(getTuition.rejected, state => {
        state.tuition.loading = false
        return state
      })
      // detail
      .addCase(getDetail.pending, state => {
        state.detail.loading = true
        return state
      })
      .addCase(getDetail.fulfilled, (state, action) => {
        state.detail.loading = false
        state.detail.data = action.payload.data.data.ds_bai_viet[0]
        return state
      })
      .addCase(getDetail.rejected, state => {
        state.detail.loading = false
        return state
      })
  },
})

export { getBanner, getNews, getNotification, getGuide, getTuition, getDetail }
