import { Carousel } from '@material-tailwind/react'
import React, { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/store'
import { getNews } from 'redux/store/features/webSlice'
import moment from 'moment'

interface AppCarouselProps {}

const AppCarousel: FC<AppCarouselProps> = () => {
  const { news } = useAppSelector(state => state.web)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    const loadNews = async () => {
      await dispatch(
        getNews({
          additional: {
            paging: {
              limit: 3,
              page: 1,
            },
            ordering: [
              {
                name: 'do_uu_tien',
                order_type: 1,
              },
              {
                name: 'ngay_dang_tin',
                order_type: 1,
              },
            ],
          },
          filter: {
            ky_hieu: 'tt',
            is_hien_thi: true,
            is_hinh_dai_dien: true,
            so_luong_hinh_dai_dien: 3,
          },
          signal: signal,
        }),
      )
    }

    loadNews()

    return () => {
      controller.abort()
    }
  }, [])

  return (
    <Carousel autoplay loop navigation={() => <></>} className={'rounded-md h-[45vh]'}>
      {news.data.map((item: any, index) => (
        <div key={index} className={'h-[45vh] w-full'}>
          <div className={'absolute top-0 w-full bg-black/50 flex justify-end items-center px-2 py-1'}>
            <div className={'text-white text-[14px] italic'}>
              {moment(item.ngay_dang_tin).format('DD/MM/YYYY HH:mm')}
            </div>
          </div>
          <div className={'absolute bottom-0 w-full bg-black/50 flex justify-center items-center p-2'}>
            <div className={'text-white text-center text-[14px] font-bold'}>{item.tieu_de}</div>
          </div>
          <img src={item.hinh_dai_dien} alt={`News ${index}`} className={'h-full w-full object-cover'} />
        </div>
      ))}
    </Carousel>
  )
}

export default AppCarousel
