import express from 'express'
import axiosInstance from '../../core/apis/nlu'
import useAxios from '../../core/hooks/useAxios'
import useAsyncFunction from '../../helpers/useAsyncFunction'

const router = express.Router()

/*----------- Lấy biểu ngữ ------------*/
router.post(
  '/w-locdsbanner',
  useAsyncFunction(async (request, response) => {
    request.setTimeout(60 * 1000 * 5)
    try {
      const res = await useAxios({
        axiosInstance: axiosInstance,
        method: 'POST',
        url: '/web/w-locdsbanner',
        data: request.body,
      })

      return response.status(res.status).json(res.data)
    } catch (error: any) {
      return response.status(error.response.status).json(error.response?.data || error)
    }
  }),
)
/*------------------------------*/

/*----------- Lấy thông báo ------------*/
router.post(
  '/w-locdsbaiviet',
  useAsyncFunction(async (request, response) => {
    request.setTimeout(60 * 1000 * 5)
    try {
      const res = await useAxios({
        axiosInstance: axiosInstance,
        method: 'POST',
        url: '/web/w-locdsbaiviet',
        data: request.body,
      })

      return response.status(res.status).json(res.data)
    } catch (error: any) {
      return response.status(error.response.status).json(error.response?.data || error)
    }
  }),
)
/*------------------------------*/

export default router
