import express from 'express'
import axiosInstance from '../../core/apis/nlu'
import useAxios from '../../core/hooks/useAxios'
import useAsyncFunction from '../../helpers/useAsyncFunction'

const router = express.Router()

/*----------- Xem thông tin cá nhân ------------*/
router.post(
  '/dkmh/w-locsinhvieninfo',
  useAsyncFunction(async (request, response) => {
    try {
      const res = await useAxios({
        axiosInstance: axiosInstance,
        method: 'POST',
        url: '/dkmh/w-locsinhvieninfo',
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
/*------------------------------*/

/*----------- Xem chương trình đào tạo ------------*/
router.post(
  '/sch/w-locdsctdtsinhvien',
  useAsyncFunction(async (request, response) => {
    try {
      const res = await useAxios({
        axiosInstance: axiosInstance,
        method: 'POST',
        url: '/sch/w-locdsctdtsinhvien',
        headers: {
          Authorization: request.headers.authorization,
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

/*----------- Xem điểm ------------*/
router.post(
  '/srm/w-locdsdiemsinhvien',
  useAsyncFunction(async (request, response) => {
    try {
      const res = await useAxios({
        axiosInstance: axiosInstance,
        method: 'POST',
        url: '/srm/w-locdsdiemsinhvien',
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
/*------------------------------*/

export default router
