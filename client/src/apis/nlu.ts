import axios from 'axios'
import storage from 'redux-persist/lib/storage'

const BASE_URL = 'https://nlu-server.huynhvanhuuan.id.vn/api'

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosInstance.interceptors.request.use(async function (config) {
  const persistStorage = await storage.getItem('persist:root')
  const { auth } = JSON.parse(persistStorage || '{}')
  const { user, isLogin } = JSON.parse(auth || '{}')

  if (!isLogin) return config

  config.headers.Authorization = `Bearer ${user?.access_token}`
  return config
})

export default axiosInstance
