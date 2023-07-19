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
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <Card variant="outlined" className={'shadow-md'}>
      <CardHeader
        title="Chức năng"
        className={'card-header bg-primary'}
        titleTypographyProps={{
          className: 'text-white text-[14px] uppercase font-bold',
        }}
      />
      <CardContent className={'p-0'}>
        <MenuList>
          <Link to={'education-program'}>
            <MenuItem>
              <ListItemIcon>
                <AccountTree fontSize="small" />
              </ListItemIcon>
              <ListItemText>Xem chương trình đào tạo</ListItemText>
            </MenuItem>
          </Link>
          <Link to={'course-registration'}>
            <MenuItem>
              <ListItemIcon>
                <AddToQueue fontSize="small" />
              </ListItemIcon>
              <ListItemText>Đăng ký môn học</ListItemText>
            </MenuItem>
          </Link>
          <Link to={'course-cancellation'}>
            <MenuItem>
              <ListItemIcon>
                <RemoveFromQueue fontSize="small" />
              </ListItemIcon>
              <ListItemText>Rút môn học đã đăng ký</ListItemText>
            </MenuItem>
          </Link>
          <Link to={'schedule'}>
            <MenuItem>
              <ListItemIcon>
                <CalendarMonth fontSize="small" />
              </ListItemIcon>
              <ListItemText>Xem thời khoá biểu</ListItemText>
            </MenuItem>
          </Link>
          <Link to={'exam-schedule'}>
            <MenuItem>
              <ListItemIcon>
                <EventNote fontSize="small" />
              </ListItemIcon>
              <ListItemText>Xem lịch thi</ListItemText>
            </MenuItem>
          </Link>
          <Link to={'transcript'}>
            <MenuItem>
              <ListItemIcon>
                <ListAlt fontSize="small" />
              </ListItemIcon>
              <ListItemText>Xem điểm</ListItemText>
            </MenuItem>
          </Link>
          <Link to={'tuition'}>
            <MenuItem>
              <ListItemIcon>
                <Paid fontSize="small" />
              </ListItemIcon>
              <ListItemText>Xem học phí</ListItemText>
            </MenuItem>
          </Link>

          <Divider />

          <Link to={'survey'}>
            <MenuItem>
              <ListItemIcon>
                <Assignment fontSize="small" />
              </ListItemIcon>
              <ListItemText>Khảo sát đánh giá</ListItemText>
            </MenuItem>
          </Link>
          <Link to={'graduation-lookup'}>
            <MenuItem>
              <ListItemIcon>
                <Search fontSize="small" />
              </ListItemIcon>
              <ListItemText>Tra cứu thông tin tốt nghiệp</ListItemText>
            </MenuItem>
          </Link>
        </MenuList>
      </CardContent>
    </Card>
  )
}

export default Menu
