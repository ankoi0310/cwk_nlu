import express from 'express'
import axiosInstance from '../../core/apis/nlu'
import useAxios from '../../core/hooks/useAxios'
import useAsyncFunction from '../../helpers/useAsyncFunction'

const router = express.Router()

/*----------- Lấy danh sách điều kiện lọc ------------*/
router.post(
  '/dkmh/w-locdsdieukienloc',
  useAsyncFunction(async (request, response) => {
    request.setTimeout(60 * 1000 * 5)
    try {
      const res = await useAxios({
        axiosInstance: axiosInstance,
        method: 'POST',
        url: '/dkmh/w-locdsdieukienloc',
        headers: {
          Authorization: request.headers.authorization,
        },
      })

      return response.status(res.status).json(res.data)
    } catch (error: any) {
      return response.status(error.response.status).json(error.response?.data || error)
    }
  }),
)
/*------------------------------*/

/*----------- Lấy danh sách môn học ------------*/
router.post(
  '/dkmh/w-locdsnhomto',
  useAsyncFunction(async (request, response) => {
    request.setTimeout(60 * 1000 * 5)
    try {
      const res = await useAxios({
        axiosInstance: axiosInstance,
        method: 'POST',
        url: '/dkmh/w-locdsnhomto',
        headers: {
          Authorization: request.headers.authorization,
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

/*----------- Đăng ký môn học ------------*/
router.post(
  '/dkmh/w-xulydkmhsinhvien',
  useAsyncFunction(async (request, response) => {
    request.setTimeout(60 * 1000 * 5)
    try {
      const res = await useAxios({
        axiosInstance: axiosInstance,
        method: 'POST',
        url: '/dkmh/w-xulydkmhsinhvien',
        headers: {
          Authorization: request.headers.authorization,
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

/*----------- Lấy danh sách môn học đã đăng ký ------------*/
router.post(
  '/dkmh/w-locdskqdkmhsinhvien',
  useAsyncFunction(async (request, response) => {
    request.setTimeout(60 * 1000 * 5)
    try {
      const res = await useAxios({
        axiosInstance: axiosInstance,
        method: 'POST',
        url: '/dkmh/w-locdskqdkmhsinhvien',
        headers: {
          Authorization: request.headers.authorization,
        },
      })

      return response.status(res.status).json(res.data)
    } catch (error: any) {
      return response.status(error.response.status).json(error.response?.data || error)
    }
  }),
)
/*------------------------------*/

export default router
