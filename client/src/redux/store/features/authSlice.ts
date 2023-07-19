import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from 'apis/nlu'
import useAxios from 'hooks/useAxios'
import storage from 'redux-persist/lib/storage'
import { RootState } from 'redux/store'
import MySwal from 'utils/custom/MySwal'

export const ACTION_TYPE = {
  AUTH_LOGIN: 'AUTH_LOGIN',
  AUTH_LOGOUT: 'AUTH_LOGOUT',
}

export interface AuthState {
  loading: boolean
  isLogin: boolean
  user: any
  userInfo: any
}

const initialState: AuthState = {
  loading: false,
  isLogin: false,
  user: null,
  userInfo: null,
}

const login = createAsyncThunk(ACTION_TYPE.AUTH_LOGIN, async (payload: any, thunkAPI) => {
  try {
    const response = await useAxios({
      axiosInstance: axiosInstance,
      method: 'POST',
      url: '/auth/login',
      data: payload,
    })

    return thunkAPI.fulfillWithValue(response)
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error?.response?.data?.message || 'Đăng nhập thất bại')
  }
})

const logout = createAsyncThunk(ACTION_TYPE.AUTH_LOGOUT, async (payload: any, thunkAPI) => {
  const response = await axiosInstance.post('/logout', payload)
  return response.data
})

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // login
      .addCase(login.pending, state => {
        state.loading = true
        return state
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
        state.isLogin = true
        MySwal.fire({
          icon: 'success',
          title: 'Đăng nhập thành công',
          showConfirmButton: false,
          timer: 1500,
        }).then((_: any) => {})
        return state
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false
        state.user = null
        state.isLogin = false
        storage.setItem(
          'persist:root',
          JSON.stringify({
            auth: {
              ...state,
              error: action.payload,
            },
          }),
        )
        return state
      })
      // logout
      .addCase(logout.fulfilled, state => {
        state = initialState
        storage.removeItem('persist:root')
        return state
      })
  },
})

export { login, logout }
export const getCurrentToken = (state: RootState) => state.auth.user?.access_token || null
