import express from 'express'
import axiosInstance from '../../core/apis/nlu'
import useAsyncFunction from '../../helpers/useAsyncFunction'
import useAxios from '../../core/hooks/useAxios'

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

      return response.json(res.data)
    } catch (error: any) {
      return response.json(error?.response?.data || error)
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
          'Authorization': request.headers.authorization,
        },
      })

      return response.json(res.data)
    } catch (error: any) {
      return response.json(error?.response?.data || error)
    }
  }),
)

export default router