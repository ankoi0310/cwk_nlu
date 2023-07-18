import express from 'express'
import axiosInstance from '../../core/apis/nlu'
import useAsyncFunction from '../../helpers/useAsyncFunction'
import useAxios from '../../core/hooks/useAxios'

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
          'Authorization': request.headers.authorization,
        },
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
          'Authorization': request.headers.authorization,
        },
      })

      return response.json(res.data)
    } catch (error: any) {
      return response.json(error?.response?.data || error)
    }
  }),
)
/*------------------------------*/

/*----------- Xem học phí ------------*/
router.post(
  '/rms/w-locdstonghophocphisv',
  useAsyncFunction(async (request, response) => {
    try {
      const res = await useAxios({
        axiosInstance: axiosInstance,
        method: 'POST',
        url: '/rms/w-locdstonghophocphisv',
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
/*------------------------------*/

/*----------- Xem lịch thi ------------*/
router.post(
  '/srm/w-locdsdiemsinhvien',
  useAsyncFunction(async (request, response) => {
    try {
      const res = await useAxios({
        axiosInstance: axiosInstance,
        method: 'POST',
        url: '/srm/w-locdsdiemsinhvien',
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
/*------------------------------*/

export default router
