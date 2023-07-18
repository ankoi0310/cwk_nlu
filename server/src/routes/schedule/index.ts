import express from 'express'
import axiosInstance from '../../core/apis/nlu'
import useAsyncFunction from '../../helpers/useAsyncFunction'
import useAxios from '../../core/hooks/useAxios'

const router = express.Router()

/*----------- Xem thời khoá biểu ------------*/
router.post(
  '/sch/w-locdstkbhockytheodoituong',
  useAsyncFunction(async (request, response) => {
    try {
      const res = await useAxios({
        axiosInstance: axiosInstance,
        method: 'POST',
        url: '/sch/w-locdstkbhockytheodoituong',
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
