import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from 'apis/nlu'
import useAxios from 'hooks/useAxios'
import storage from 'redux-persist/lib/storage'
import { RootState } from 'redux/store'
import MySwal from 'utils/custom/MySwal'
import { BaseState } from './baseState'

export const ACTION_TYPE = {
  AUTH_LOGIN: 'AUTH_LOGIN',
  AUTH_LOGOUT: 'AUTH_LOGOUT',
}

export interface AuthState extends BaseState {
  isLogin: boolean
  user: any
  userInfo: any
}

const initialState: AuthState = {
  loading: false,
  error: null,
  isLogin: false,
  user: null,
  userInfo: null,
}

const login = createAsyncThunk(ACTION_TYPE.AUTH_LOGIN, async (payload: any, thunkAPI) => {
  try {
    const response = await useAxios({
      axiosInstance: axiosInstance,
      method: 'POST',
      url: '/api/auth/login',
      data: payload,
    })

    console.log('response', response.data)
    return thunkAPI.fulfillWithValue(response)
  } catch (error: any) {
    console.log('error', error)
    return thunkAPI.rejectWithValue(error?.response?.data?.message || error?.message)
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
      .addCase(login.pending, (state, action) => {
        state.loading = true
        return state
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.user = action.payload
        state.isLogin = true
        storage.setItem('persist:root', JSON.stringify({ auth: state }))
        MySwal.fire({
          icon: 'success',
          title: 'Đăng nhập thành công',
          showConfirmButton: false,
          timer: 1500,
        }).then((_: any) => { })
        return state
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false
        state.user = null
        state.error = action.payload
        state.isLogin = false
        return state
      })
      // logout
      .addCase(logout.fulfilled, (state, action) => {
        state = initialState
        storage.removeItem('persist:root')
        return state
      })
  },
})

export default AuthSlice.reducer
export { login, logout }
export const getCurrentToken = (state: RootState) => state.auth.user?.access_token || null
