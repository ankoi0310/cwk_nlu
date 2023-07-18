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
  banner: { loading: boolean; error: any; data: any }
  news: { loading: boolean; error: any; data: [] }
  notification: { loading: boolean; error: any; data: [] }
  guide: { loading: boolean; error: any; data: [] }
  tuition: { loading: boolean; error: any; data: [] }
  detail: { loading: boolean; error: any; data: any }
}

const initialState: WebState = {
  banner: { loading: false, error: null, data: null },
  news: { loading: false, error: null, data: [] },
  notification: { loading: false, error: null, data: [] },
  guide: { loading: false, error: null, data: [] },
  tuition: { loading: false, error: null, data: [] },
  detail: { loading: false, error: null, data: null },
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
      .addCase(getBanner.pending, (state, action) => {
        state.banner.loading = true
        return state
      })
      .addCase(getBanner.fulfilled, (state, action) => {
        state.banner.loading = false
        state.banner.data = action.payload.data.ds_banner[0]
        return state
      })
      .addCase(getBanner.rejected, (state, action) => {
        state.banner.loading = false
        state.banner.error = action.payload
        return state
      })
      // news
      .addCase(getNews.pending, (state, action) => {
        state.news.loading = true
        return state
      })
      .addCase(getNews.fulfilled, (state, action) => {
        state.news.loading = false
        state.news.data = action.payload?.data?.ds_bai_viet
        return state
      })
      .addCase(getNews.rejected, (state, action) => {
        state.news.loading = false
        state.news.error = action.payload
        return state
      })
      // notification
      .addCase(getNotification.pending, (state, action) => {
        state.notification.loading = true
        return state
      })
      .addCase(getNotification.fulfilled, (state, action) => {
        state.notification.loading = false
        state.notification.data = action.payload?.data?.ds_bai_viet
        return state
      })
      .addCase(getNotification.rejected, (state, action) => {
        state.notification.loading = false
        state.notification.error = action.payload
        return state
      })
      // guide
      .addCase(getGuide.pending, (state, action) => {
        state.guide.loading = true
        return state
      })
      .addCase(getGuide.fulfilled, (state, action) => {
        state.guide.loading = false
        state.guide.data = action.payload?.data?.ds_bai_viet
        return state
      })
      .addCase(getGuide.rejected, (state, action) => {
        state.guide.loading = false
        state.guide.error = action.payload
        return state
      })
      // tuition
      .addCase(getTuition.pending, (state, action) => {
        state.tuition.loading = true
        return state
      })
      .addCase(getTuition.fulfilled, (state, action) => {
        state.tuition.loading = false
        state.tuition.data = action.payload?.data?.ds_bai_viet
        return state
      })
      .addCase(getTuition.rejected, (state, action) => {
        state.tuition.loading = false
        state.tuition.error = action.payload
        return state
      })
      // detail
      .addCase(getDetail.pending, (state, action) => {
        state.detail.loading = true
        return state
      })
      .addCase(getDetail.fulfilled, (state, action) => {
        state.detail.loading = false
        state.detail.data = action.payload?.data?.ds_bai_viet[0]
        return state
      })
      .addCase(getDetail.rejected, (state, action) => {
        state.detail.loading = false
        state.detail.error = action.payload
        return state
      })
  },
})

export { getBanner, getNews, getNotification, getGuide, getTuition, getDetail }
