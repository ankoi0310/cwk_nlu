import { AxiosInstance } from 'axios'

const useAxios = async (requestConfig: {
  axiosInstance: AxiosInstance
  url: string
  method: string
  headers?: any
  params?: any
  data?: any
}) => {
  const { axiosInstance, url, method, headers = {}, params = {}, data = {} } = requestConfig

  return await axiosInstance({
    method,
    url,
    headers,
    params,
    data,
  })
}

export default useAxios
