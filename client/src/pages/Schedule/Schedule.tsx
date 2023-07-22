import { TableBody, TableCell } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import Row from 'components/Row/Row'
import ObjectSelect from 'components/Schedule/ObjectSelect'
import SemesterSelect from 'components/Schedule/SemesterSelect'
import React, { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/store'
import { getObjectFilterList, getSchedule, getSemesterFilterList } from 'redux/store/features/scheduleSlice'

interface ScheduleProps {}

const Schedule: FC<ScheduleProps> = () => {
  const { semesterFilterList, objectFilterList, schedule } = useAppSelector(state => state.schedule)
  const dispatch = useAppDispatch()
  const [semester, setSemester] = useState('')
  const [object, setObject] = useState('')

  useEffect(() => {
    const loadSemesterFilterList = async () => {
      await dispatch(
        getSemesterFilterList({
          filter: {
            is_tieng_anh: null,
          },
          additional: {
            paging: {
              limit: 100,
              page: 1,
            },
            ordering: [
              {
                name: 'hoc_ky',
                order_type: 1,
              },
            ],
          },
        }),
      )
    }

    loadSemesterFilterList()

    const loadObjectFilterList = async () => {
      await dispatch(getObjectFilterList({}))
    }

    loadObjectFilterList()

    const loadSchedule = async () => {
      await dispatch(
        getSchedule({
          hoc_ky: semester,
          id_du_lieu: null,
          loai_doi_tuong: parseInt(object),
        }),
      )
    }

    loadSchedule()

    if (semesterFilterList.data && semesterFilterList.data.length !== 0) {
      setSemester(semesterFilterList.data[0].hoc_ky.toString())
    }

    if (objectFilterList.data && objectFilterList.data.length !== 0) {
      setObject(objectFilterList.data[0].loai_doi_tuong.toString())
    }
  }, [semester, object])

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
            <FormControl size="small" fullWidth>
              {semesterFilterList.data && (
                <SemesterSelect
                  value={semester}
                  items={semesterFilterList.data}
                  setValue={value => setSemester(value)}
                />
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={5}>
            <FormControl size="small" fullWidth>
              {objectFilterList.data && (
                <ObjectSelect value={object} items={objectFilterList.data} setValue={value => setObject(value)} />
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={2} className={'flex justify-center items-center'}>
            <Button variant="contained" className={'w-full'}>
              In
            </Button>
          </Grid>
        </Grid>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell align={'center'}>Tên môn học</TableCell>
              <TableCell align={'center'}>Thứ</TableCell>
              <TableCell align={'center'}>Tiết bắt đầu</TableCell>
              <TableCell align={'center'}>Số tiết</TableCell>
              <TableCell align={'center'}>Phòng</TableCell>
              <TableCell align={'center'}>Giảng viên</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {schedule.data && schedule.data.map((item: ScheduleItem, index) => <Row scheduleItem={item} key={index} />)}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}
export default Schedule
