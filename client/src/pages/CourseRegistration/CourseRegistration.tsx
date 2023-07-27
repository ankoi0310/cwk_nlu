import { Search } from '@mui/icons-material'
import { Checkbox, List, ListItem, OutlinedInput } from '@mui/material'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid'
import InputAdornment from '@mui/material/InputAdornment'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import { FilterMatchMode } from 'primereact/api'
import { Column } from 'primereact/column'
import { DataTable, DataTableFilterMeta } from 'primereact/datatable'
import React, { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/store'
import { getCourses } from 'redux/store/features/subjectSlice'

interface CourseRegistrationProps {}

const CourseRegistration: FC<CourseRegistrationProps> = () => {
  const { courseResponse, courses } = useAppSelector(state => state.subject)
  const dispatch = useAppDispatch()
  const [filters, setFilters] = useState<DataTableFilterMeta>({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    ma_mon: { value: null, matchMode: FilterMatchMode.CONTAINS },
    ten_mon: { value: null, matchMode: FilterMatchMode.CONTAINS },
    lop: { value: null, matchMode: FilterMatchMode.CONTAINS },
  })
  const [globalFilterValue, setGlobalFilterValue] = useState<string>('')

  const onGlobalFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    let _filters = { ...filters }

    // @ts-ignore
    _filters['global'].value = value

    setFilters(_filters)
    setGlobalFilterValue(value)
  }

  const renderHeader = () => {
    return (
      <Box className="flex justify-between items-center">
        <Box>
          <Typography variant="h6" className={'font-bold'}>
            {courseResponse && courseResponse.hoc_ky_dang_ky}
          </Typography>
        </Box>
        <OutlinedInput
          size={'small'}
          value={globalFilterValue}
          onChange={onGlobalFilterChange}
          placeholder="Nhập từ khóa tìm kiếm"
          endAdornment={
            <InputAdornment position={'end'}>
              <Search />
            </InputAdornment>
          }
        />
      </Box>
    )
  }

  const header = renderHeader()

  const groupBodyTemplate = (course: Course) => {
    return course.to !== '' ? (
      <Typography>
        {course.nhom_to} - {course.to}
      </Typography>
    ) : (
      <Typography>{course.nhom_to}</Typography>
    )
  }

  const amountBodyTemplate = (course: Course) => {
    return (
      <Typography>
        {course.sl_cp}/{course.sl_cl}
      </Typography>
    )
  }

  const scheduleBodyTemplate = (course: Course) => {
    return (
      <List dense className={'p-0'}>
        {course.tkb.split('<hr>').map((item, index) => (
          <ListItem key={index} className={'p-0'}>
            <ListItemText primary={<Typography className={'text-[12px]'}>{item}</Typography>} />
          </ListItem>
        ))}
      </List>
    )
  }

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
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    courses && (
      <Box className={'flex flex-col gap-y-4'}>
        <Box className={'border-2 rounded-md p-4 py-6'}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={5}>
              <FormControl size="small" fullWidth></FormControl>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <DataTable
            value={courses}
            paginator
            rows={10}
            dataKey="id_to_hoc"
            filters={filters}
            filterDisplay="row"
            loading={!courses}
            globalFilterFields={['ma_mon', 'ten_mon', 'lop']}
            header={header}
            emptyMessage={
              <Typography className={'text-center text-gray-500'}>Không có dữ liệu nào được tìm thấy</Typography>
            }>
            <Column
              selectionMode="multiple"
              field="id_to_hoc"
              style={{ width: '2%' }}
              body={
                <>
                  <Checkbox />
                </>
              }
            />
            <Column
              header="Mã MH"
              alignHeader={'center'}
              field="ma_mon"
              filter
              showClearButton={false}
              showFilterMenu={false}
              style={{ width: '10%' }}
              className={'text-center'}
            />
            <Column
              header="Tên môn học"
              alignHeader={'center'}
              field="ten_mon"
              filter
              showClearButton={false}
              showFilterMenu={false}
              style={{ width: '25%' }}
            />
            <Column header="Nhóm/Tổ" alignHeader={'center'} body={groupBodyTemplate} className={'text-center'} />
            <Column
              header="STC"
              alignHeader={'center'}
              field="so_tc"
              style={{ width: '5%' }}
              className={'text-center'}
            />
            <Column
              header="Lớp"
              alignHeader={'center'}
              field="lop"
              filter
              showClearButton={false}
              showFilterMenu={false}
              style={{ width: '10%' }}
              className={'text-center'}
            />
            <Column
              header="SL/CL"
              alignHeader={'center'}
              style={{ width: '5%' }}
              body={amountBodyTemplate}
              className={'text-center'}
            />
            <Column header="Thời khoá biểu" alignHeader={'center'} body={scheduleBodyTemplate} />
          </DataTable>
        </Box>
      </Box>
    )
  )
}

export default CourseRegistration
