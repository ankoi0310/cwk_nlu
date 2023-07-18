import {
  AccountTree,
  AddToQueue,
  Assignment,
  CalendarMonth,
  EventNote,
  ListAlt,
  Paid,
  RemoveFromQueue,
  Search,
} from '@mui/icons-material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Divider from '@mui/material/Divider'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import React from 'react'
import styles from './Menu.module.css'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const Menu = () => {
  return (
    <Card variant="outlined" className={'shadow-md'}>
      <CardHeader
        title="Chức năng"
        className={cx('card-header bg-primary')}
        titleTypographyProps={{
          className: 'text-white text-[14px] uppercase font-bold',
        }}
      />
      <CardContent className={'p-0'}>
        <MenuList>
          <MenuItem>
            <ListItemIcon>
              <AccountTree fontSize="small" />
            </ListItemIcon>
            <ListItemText>Xem chương trình đào tạo</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <AddToQueue fontSize="small" />
            </ListItemIcon>
            <ListItemText>Đăng ký môn học</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <RemoveFromQueue fontSize="small" />
            </ListItemIcon>
            <ListItemText>Rút môn học đã đăng ký</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <CalendarMonth fontSize="small" />
            </ListItemIcon>
            <ListItemText>Xem thời khoá biểu</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <EventNote fontSize="small" />
            </ListItemIcon>
            <ListItemText>Xem lịch thi</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <ListAlt fontSize="small" />
            </ListItemIcon>
            <ListItemText>Xem điểm</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Paid fontSize="small" />
            </ListItemIcon>
            <ListItemText>Xem học phí</ListItemText>
          </MenuItem>

          <Divider />

          <MenuItem>
            <ListItemIcon>
              <Assignment fontSize="small" />
            </ListItemIcon>
            <ListItemText>Khảo sát đánh giá</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Search fontSize="small" />
            </ListItemIcon>
            <ListItemText>Tra cứu thông tin tốt nghiệp</ListItemText>
          </MenuItem>
        </MenuList>
      </CardContent>
    </Card>
  )
}

export default Menu
