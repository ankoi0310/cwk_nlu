import express from 'express'
import axiosInstance from '../../core/apis/nlu'
import useAsyncFunction from '../../helpers/useAsyncFunction'
import useAxios from '../../core/hooks/useAxios'

const router = express.Router()

/*----------- Lấy biểu ngữ ------------*/
router.post(
  '/w-locdsbanner',
  useAsyncFunction(async (request, response) => {
    try {
      const res = await useAxios({
        axiosInstance: axiosInstance,
        method: 'POST',
        url: '/web/w-locdsbanner',
        data: request.body,
      })

      return response.json(res.data)
    } catch (error: any) {
      return response.json(error?.response?.data || error)
    }
  }),
)
/*------------------------------*/

/*----------- Lấy thông báo ------------*/
router.post(
  '/w-locdsbaiviet',
  useAsyncFunction(async (request, response) => {
    try {
      const res = await useAxios({
        axiosInstance: axiosInstance,
        method: 'POST',
        url: '/web/w-locdsbaiviet',
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
