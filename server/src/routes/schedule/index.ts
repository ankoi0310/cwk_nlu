import express from 'express'
import axiosInstance from '../../core/apis/nlu'
import useAxios from '../../core/hooks/useAxios'
import useAsyncFunction from '../../helpers/useAsyncFunction'

const router = express.Router()

/*----------- Lấy danh sách lọc học kỳ ----------*/
router.post(
  '/sch/w-locdshockytkbuser',
  useAsyncFunction(async (request, response) => {
    request.setTimeout(60 * 1000 * 5)
    try {
      const res = await useAxios({
        axiosInstance: axiosInstance,
        method: 'POST',
        url: '/sch/w-locdshockytkbuser',
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

/*----------- Lấy danh sách lọc theo học kỳ ----------*/
router.post(
  '/sch/w-locdsdoituongthoikhoabieuhocky',
  useAsyncFunction(async (request, response) => {
    request.setTimeout(60 * 1000 * 5)
    try {
      const res = await useAxios({
        axiosInstance: axiosInstance,
        method: 'POST',
        url: '/sch/w-locdsdoituongthoikhoabieuhocky',
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

/*----------- Xem thời khoá biểu ------------*/
router.post(
  '/sch/w-locdstkbhockytheodoituong',
  useAsyncFunction(async (request, response) => {
    request.setTimeout(60 * 1000 * 5)
    try {
      const res = await useAxios({
        axiosInstance: axiosInstance,
        method: 'POST',
        url: '/sch/w-locdstkbhockytheodoituong',
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

export default router
