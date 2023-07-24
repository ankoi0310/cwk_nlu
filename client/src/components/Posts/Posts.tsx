import { LabelImportant } from '@mui/icons-material'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { List, ListItem } from '@mui/material'
import Box from '@mui/material/Box'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Tab from '@mui/material/Tab'
import classNames from 'classnames/bind'
import React, { SyntheticEvent, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'redux/store'
import { getGuide, getNotification, getTuition } from 'redux/store/features/webSlice'
import styles from './Posts.module.css'

const cx = classNames.bind(styles)

const postTypes = [
  {
    value: 'notification',
    label: 'Thông báo',
  },
  {
    value: 'guide',
    label: 'Hướng dẫn',
  },
  {
    value: 'tuition',
    label: 'Học phí',
  },
]

const Posts = () => {
  const { notification, guide, tuition } = useAppSelector(state => state.web)
  const dispatch = useAppDispatch()

  const [value, setValue] = React.useState('notification')

  const onChange = (event: SyntheticEvent, value: string) => {
    setValue(value)
  }

  const loadPosts = async ({ ky_hieu = '', so_luong_hinh_dai_dien = 0, limit = 5 }, signal: AbortSignal) => {
    const data = {
      filter: {
        ky_hieu: ky_hieu,
        is_hien_thi: true,
        is_hinh_dai_dien: true,
        so_luong_hinh_dai_dien: so_luong_hinh_dai_dien,
      },
      additional: {
        paging: {
          limit: limit,
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
      signal: signal,
    }

    switch (ky_hieu) {
      case 'tb':
        await dispatch(getNotification(data))
        break
      case 'hd':
        await dispatch(getGuide(data))
        break
      case 'hp':
        await dispatch(getTuition(data))
        break
    }
  }

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    const loadNotification = async () => {
      await loadPosts(
        {
          ky_hieu: 'tb',
          so_luong_hinh_dai_dien: 1,
          limit: 10,
        },
        signal,
      )
    }

    const loadGuide = async () => {
      await loadPosts(
        {
          ky_hieu: 'hd',
        },
        signal,
      )
    }

    const loadTuition = async () => {
      await loadPosts(
        {
          ky_hieu: 'hp',
        },
        signal,
      )
    }

    loadNotification()
    loadGuide()
    loadTuition()

    return () => {
      controller.abort()
    }
  }, [])

  return (
    <>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={onChange} aria-label="post tab" textColor="primary" indicatorColor="primary">
            {postTypes.map(postType => (
              <Tab
                label={postType.label}
                value={postType.value}
                key={postType.value}
                sx={{ textTransform: 'capitalize' }}
              />
            ))}
          </TabList>
        </Box>
        {notification && guide && tuition && (
          <>
            <TabPanel value="notification" className={'py-0'}>
              <List dense>
                {notification.map((item: Post, index) => (
                  <ListItem key={index} disablePadding>
                    <Link to={`/post/${item.id}`} className={cx('flex text-link items-center')}>
                      <ListItemIcon className={'min-w-fit mr-2'}>
                        <LabelImportant />
                      </ListItemIcon>
                      <ListItemText primary={item.tieu_de} />
                    </Link>
                  </ListItem>
                ))}
              </List>
            </TabPanel>
            <TabPanel value="guide" className={'py-0'}>
              <List dense>
                {guide.map((item: Post, index) => (
                  <ListItem key={index} disablePadding>
                    <Link to={`/post/${item.id}`} className={cx('flex text-link items-center')}>
                      <ListItemIcon className={'min-w-fit mr-2'}>
                        <LabelImportant />
                      </ListItemIcon>
                      <ListItemText primary={item.tieu_de} />
                    </Link>
                  </ListItem>
                ))}
              </List>
            </TabPanel>
            <TabPanel value="tuition" className={'py-0'}>
              <List dense>
                {tuition.map((item: Post, index) => (
                  <ListItem key={index} disablePadding>
                    <Link to={`/post/${item.id}`} className={cx('flex text-link items-center')}>
                      <ListItemIcon className={'min-w-fit mr-2'}>
                        <LabelImportant />
                      </ListItemIcon>
                      <ListItemText primary={item.tieu_de} />
                    </Link>
                  </ListItem>
                ))}
              </List>
            </TabPanel>
          </>
        )}
      </TabContext>
    </>
  )
}
export default Posts
