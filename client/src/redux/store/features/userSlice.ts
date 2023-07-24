import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from 'apis/nlu'
import useAxios from 'hooks/useAxios'

export const ACTION_TYPE = {
  GET_USER_INFO: 'GET_USER_INFO',
}

export interface AuthState {
  loading: boolean
  userInfo: UserInfo | null
}

const initialState: AuthState = {
  loading: false,
  userInfo: null,
}

const getUserInfo = createAsyncThunk(ACTION_TYPE.GET_USER_INFO, async (payload: any, thunkAPI) => {
  try {
    const response = await useAxios({
      axiosInstance: axiosInstance,
      method: 'POST',
      url: '/dkmh/w-locsinhvieninfo',
    })

    return thunkAPI.fulfillWithValue(response.data)
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error?.response?.data?.message || 'Lấy thông tin thất bại')
  }
})

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // getUserInfo
      .addCase(getUserInfo.pending, state => {
        state.loading = true
        return state
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.loading = false
        state.userInfo = action.payload.data
        return state
      })
      .addCase(getUserInfo.rejected, state => {
        state.loading = false
        return state
      })
  },
})

export { getUserInfo }
