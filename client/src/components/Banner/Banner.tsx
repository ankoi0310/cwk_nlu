import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/store'
import { getBanner } from 'redux/store/features/webSlice'

const Banner = () => {
  const { banner } = useAppSelector(state => state.web)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    const loadBanner = async () => {
      await dispatch(
        getBanner({
          filter: {
            is_tieng_anh: false,
            id: null,
            is_hien_thi: true,
          },
          additional: {
            paging: {
              limit: 100,
              page: 1,
            },
            ordering: [
              {
                name: null,
                order_type: null,
              },
            ],
          },
          signal: signal,
        }),
      )
    }

    loadBanner()

    return () => {
      controller.abort()
    }
  }, [])

  return <div className={''}>{banner && <img src={banner.hinh_dai_dien} alt="banner" className={'w-full'} />}</div>
}
export default Banner
