import List from '@mui/icons-material/List'
import { CircularProgress } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CourseRemoveButton from 'components/CourseRegistration/CourseRemoveButton'
import moment from 'moment/moment'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import React from 'react'
import { useAppSelector } from 'redux/store'

const RegisteredCourseTable = () => {
  const { registeredCourseResponse } = useAppSelector(state => state.subject)

  const renderHeader = () => {
    return (
      <Box className="flex justify-between items-center">
        <Box>
          <Typography className={'font-bold'}>Danh sách môn học đã đăng ký:</Typography>
        </Box>
      </Box>
    )
  }

  const header = renderHeader()

  const removeBodyTemplate = (registeredCourse: RegisteredCourse) => {
    return <CourseRemoveButton registeredCourse={registeredCourse} />
  }

  const registeredDateBodyTemplate = (registeredCourse: RegisteredCourse) => {
    return <Typography>{moment(registeredCourse.ngay_dang_ky).format('HH:mm DD/MM/YYYY')}</Typography>
  }

  const scheduleBodyTemplate = (registeredCourse: RegisteredCourse) => {
    return <List />
  }

  return registeredCourseResponse ? (
    <DataTable
      value={registeredCourseResponse.ds_kqdkmh}
      dataKey="id_kqdk"
      header={header}
      emptyMessage={<Typography className={'text-center text-gray-500'}>Không có dữ liệu nào được tìm thấy</Typography>}
      className={'w-full'}>
      <Column style={{ width: '2%' }} body={removeBodyTemplate} />
      <Column
        header="Mã MH"
        alignHeader={'center'}
        field="to_hoc.ma_mon"
        style={{ width: '6%' }}
        className={'text-center'}
      />
      <Column header="Tên môn học" field="to_hoc.ten_mon" alignHeader={'center'} />
      <Column
        header="Nhóm tổ"
        field="to_hoc.nhom_to"
        style={{ width: '8%' }}
        alignHeader={'center'}
        className={'text-center'}
      />
      <Column
        header="STC"
        field="to_hoc.so_tc"
        alignHeader={'center'}
        style={{ width: '2%' }}
        className={'text-center'}
      />
      <Column
        header="Học phí tạm tính"
        field="hoc_phi_tam_tinh"
        style={{ width: '10%' }}
        alignHeader={'center'}
        className={'text-center'}
      />
      <Column
        header="Lớp"
        style={{ width: '5%' }}
        field="to_hoc.lop"
        alignHeader={'center'}
        className={'text-center'}
      />
      <Column
        header="Ngày đăng ký"
        alignHeader={'center'}
        style={{ width: '9%' }}
        body={registeredDateBodyTemplate}
        className={'text-center'}
      />
      <Column
        header="TKB"
        style={{ width: '2%' }}
        alignHeader={'center'}
        className={'text-center'}
        body={scheduleBodyTemplate}
      />
    </DataTable>
  ) : (
    <Box className={'flex justify-center items-center w-full h-full'}>
      <CircularProgress />
    </Box>
  )
}

export default RegisteredCourseTable
