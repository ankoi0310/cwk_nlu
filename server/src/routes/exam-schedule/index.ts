import express from 'express'
import axiosInstance from '../../core/apis/nlu'
import useAxios from '../../core/hooks/useAxios'
import useAsyncFunction from '../../helpers/useAsyncFunction'

const router = express.Router()

/*----------- Lấy danh sách lọc học kỳ ------------*/
router.post(
  '/report/w-locdshockylichthisinhvien',
  useAsyncFunction(async (request, response) => {
    try {
      const res = await useAxios({
        axiosInstance: axiosInstance,
        method: 'POST',
        url: '/report/w-locdshockylichthisinhvien',
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

/*----------- Lấy danh sách đối tượng lọc ------------*/
router.post(
  '/epm/w-locdsdoituongxemlichthi',
  useAsyncFunction(async (request, response) => {
    try {
      const res = await useAxios({
        axiosInstance: axiosInstance,
        method: 'POST',
        url: '/epm/w-locdsdoituongxemlichthi',
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

/*----------- Xem lịch thi cá nhân ------------*/
router.post(
  '/epm/w-locdslichthisvtheohocky',
  useAsyncFunction(async (request, response) => {
    try {
      const res = await useAxios({
        axiosInstance: axiosInstance,
        method: 'POST',
        url: '/epm/w-locdslichthisvtheohocky',
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

/*----------- Xem lịch thi theo đối tượng ------------*/
router.post(
  '/epm/w-locdsdulieutheodoituonglichthi',
  useAsyncFunction(async (request, response) => {
    try {
      const res = await useAxios({
        axiosInstance: axiosInstance,
        method: 'POST',
        url: '/epm/w-locdsdulieutheodoituonglichthi',
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

export default router
