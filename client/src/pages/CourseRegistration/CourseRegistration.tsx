import { Checkbox, List, ListItem, TableBody, TableCell } from '@mui/material'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid'
import ListItemText from '@mui/material/ListItemText'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import React, { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/store'
import { getCourses } from 'redux/store/features/subjectSlice'

interface CourseRegistrationProps {}

const CourseRegistration: FC<CourseRegistrationProps> = () => {
  const { subjects, courses } = useAppSelector(state => state.subject)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const loadCourses = async () => {
      await dispatch(
        getCourses({
          additional: {
            ordering: [
              {
                name: '',
                order_type: '',
              },
            ],
            paging: {
              limit: 200,
              page: 1,
            },
          },
          is_CVHT: false,
        }),
      )
    }

    loadCourses()
  }, [])

  return (
    <Box className={'flex flex-col gap-y-4'}>
      <Box>
        <Typography>
          Học kỳ: <strong>20222</strong>
        </Typography>
      </Box>
      <Box className={'border-2 rounded-md p-4 py-6'}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={5}>
            <FormControl size="small" fullWidth></FormControl>
          </Grid>
        </Grid>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell align={'center'}>Mã môn học</TableCell>
              <TableCell align={'center'}>Tên môn học</TableCell>
              <TableCell align={'center'}>Nhóm</TableCell>
              <TableCell align={'center'}>Tổ</TableCell>
              <TableCell align={'center'}>Số TC</TableCell>
              <TableCell align={'center'}>Lớp</TableCell>
              <TableCell align={'center'}>Số lượng</TableCell>
              <TableCell align={'center'}>Còn lại</TableCell>
              <TableCell align={'center'}>Thời khoá biêu</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Tìm kiếm</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
            {courses &&
              subjects &&
              courses.map((course, index) => (
                <TableRow key={index}>
                  <TableCell padding="checkbox">
                    <Checkbox color="primary" />
                  </TableCell>
                  <TableCell>{course.ma_mon}</TableCell>
                  <TableCell>{subjects.find(subject => subject.ma === course.ma_mon)?.ten}</TableCell>
                  <TableCell>{course.nhom_to}</TableCell>
                  <TableCell>{course.to}</TableCell>
                  <TableCell>{course.so_tc}</TableCell>
                  <TableCell>{course.lop}</TableCell>
                  <TableCell>{course.sl_cp}</TableCell>
                  <TableCell>{course.sl_cl}</TableCell>
                  <TableCell className={'py-2'}>
                    <List dense className={'p-0'}>
                      {course.tkb.split('<hr>').map((item, index) => (
                        <ListItem key={index} className={'p-0'}>
                          <ListItemText primary={<Typography className={'text-[12px]'}>{item}</Typography>} />
                        </ListItem>
                      ))}
                    </List>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default CourseRegistration
