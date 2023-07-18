import express from 'express'
import axiosInstance from '../../core/apis/nlu'
import useAsyncFunction from '../../helpers/useAsyncFunction'
import useAxios from '../../core/hooks/useAxios'
import { log } from 'console'

const router = express.Router()

/*----------- Xem danh sách môn học ------------*/
router.post(
  '/dkmh/w-locdsnhomto',
  useAsyncFunction(async (request, response) => {
    try {
      const res = await useAxios({
        axiosInstance: axiosInstance,
        method: 'POST',
        url: '/dkmh/w-locdsnhomto',
        headers: {
          'Authorization': request.headers.authorization,
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

/*----------- Đăng ký môn học ------------*/
router.post(
  '/dkmh/w-xulydkmhsinhvien',
  useAsyncFunction(async (request, response) => {
    try {
      const res = await useAxios({
        axiosInstance: axiosInstance,
        method: 'POST',
        url: '/dkmh/w-xulydkmhsinhvien',
        headers: {
          'Authorization': request.headers.authorization,
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

export default router
