import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import { Collapse, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import React, { FC } from 'react'

interface ScheduleRowProps {
  scheduleItem: ScheduleItem
}

const ScheduleRow: FC<ScheduleRowProps> = props => {
  const { scheduleItem } = props
  const [open, setOpen] = React.useState(false)

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell align={'center'}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
            className={'shadow-transparent'}>
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell>{scheduleItem.ten_mon}</TableCell>
        <TableCell align={'center'}>{scheduleItem.thu}</TableCell>
        <TableCell align={'center'}>{scheduleItem.tbd}</TableCell>
        <TableCell align={'center'}>{scheduleItem.so_tiet}</TableCell>
        <TableCell align={'center'}>{scheduleItem.phong}</TableCell>
        <TableCell>{scheduleItem.gv}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Chi tiết môn học
              </Typography>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell align={'center'}>Mã môn học</TableCell>
                    <TableCell align={'center'}>Nhóm tổ</TableCell>
                    <TableCell align={'center'}>Số tín chỉ</TableCell>
                    <TableCell align={'center'}>Lớp</TableCell>
                    <TableCell align={'center'}>Thời gian học</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key={scheduleItem.id_to_hoc}>
                    <TableCell align={'center'}>{scheduleItem.ma_mon}</TableCell>
                    <TableCell align={'center'}>{scheduleItem.nhom_to}</TableCell>
                    <TableCell align={'center'}>{scheduleItem.so_tc}</TableCell>
                    <TableCell align={'center'}>{scheduleItem.lop}</TableCell>
                    <TableCell align={'center'}>{scheduleItem.tkb}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}

export default ScheduleRow
