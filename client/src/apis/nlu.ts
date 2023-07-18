import axios from 'axios'
import storage from 'redux-persist/lib/storage'

const BASE_URL = 'https://nlu-server.huynhvanhuuan.id.vn/api'

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  }
})

axiosInstance.interceptors.request.use(
  async config => {
    const persistStorage = await storage.getItem('persist:root')
    const { auth } = JSON.parse(persistStorage || '{}')
    const { user } = JSON.parse(auth || '{}')
    const { access_token } = user || {}

    if (access_token) {
      config.headers.Authorization = `Bearer ${access_token}`
    }
    return config
  },
  async error => await Promise.reject(error),
)

axiosInstance.interceptors.response.use(
  response => {
    return response.data
  },
  async error => await Promise.reject(error),
)

export default axiosInstance
