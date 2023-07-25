import axios from 'axios'
import { useJwt } from 'react-jwt'
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

  if (isLogin) {
    const token = user?.access_token

    if (token) {
      // check jwt token expired
      const { isExpired } = useJwt(token)

      console.log('isExpired', isExpired)

      if (isExpired) {
        storage.setItem(
          'persist:root',
          JSON.stringify({
            auth: {
              ...auth,
              isLogin: false,
              user: null,
            },
          }),
        )
        return config
      }

      config.headers.Authorization = `Bearer ${token}`
      return config
    }
  }

  return config
})

export default axiosInstance
