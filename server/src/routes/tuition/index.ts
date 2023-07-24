import express from 'express'
import axiosInstance from '../../core/apis/nlu'
import useAxios from '../../core/hooks/useAxios'
import useAsyncFunction from '../../helpers/useAsyncFunction'

const router = express.Router()

/*----------- Lấy danh sách lọc học phí ----------*/
router.post(
  '/report/w-locdshockyhocphisinhvien',
  useAsyncFunction(async (request, response) => {
    try {
      const res = await useAxios({
        axiosInstance: axiosInstance,
        method: 'POST',
        url: '/report/w-locdshockyhocphisinhvien',
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

/*----------- Xem học phí tổng quát ----------*/
router.post(
  '/rms/w-locdstonghophocphisv',
  useAsyncFunction(async (request, response) => {
    try {
      const res = await useAxios({
        axiosInstance: axiosInstance,
        method: 'POST',
        url: '/rms/w-locdstonghophocphisv',
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

/*----------- Xem học phí theo học kỳ ----------*/
router.post(
  '/rms/w-locdschitiethocphisvtheohocky',
  useAsyncFunction(async (request, response) => {
    try {
      const res = await useAxios({
        axiosInstance: axiosInstance,
        method: 'POST',
        url: '/rms/w-locdschitiethocphisvtheohocky',
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
