import express from 'express'
import axiosInstance from '../../core/apis/nlu'
import useAxios from '../../core/hooks/useAxios'
import useAsyncFunction from '../../helpers/useAsyncFunction'

const router = express.Router()

/*----------- Đăng nhập ------------*/
router.post(
  '/login',
  useAsyncFunction(async (request, response) => {
    try {
      const res = await useAxios({
        axiosInstance: axiosInstance,
        method: 'POST',
        url: '/auth/login',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: request.body,
      })

      return response.status(res.status).json(res.data)
    } catch (error: any) {
      return response.status(error.response.status).json(error.response?.data || error)
    }
  }),
)
/*------------------------------*/

/*----------- Đăng xuất ------------*/
router.post(
  '/logout',
  useAsyncFunction(async (request, response) => {
    try {
      const res = await useAxios({
        axiosInstance: axiosInstance,
        method: 'POST',
        url: '/auth/logout',
        headers: {
          Authorization: request.headers.authorization,
        },
      })

      return response.json(res.data)
    } catch (error: any) {
      return response.json(error?.response?.data || error)
    }
  }),
)

export default router
