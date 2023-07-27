import { List } from '@mui/icons-material'
import { Breadcrumbs, TableBody, TableCell, tableCellClasses, TableRow } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import Typography from '@mui/material/Typography'
import { SubjectDetailDialog } from 'components/EducationProgram/SubjectDetailDialog'
import React, { useEffect, useState } from 'react'
import { BsFileExcel, BsPrinter } from 'react-icons/bs'
import { useAppDispatch, useAppSelector } from 'redux/store'
import { getEducationProgram } from 'redux/store/features/educationProgramSlice'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.root}`]: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
  },
}))

const EducationProgram = () => {
  const { educationProgramResponse } = useAppSelector(state => state.educationProgram)
  const dispatch = useAppDispatch()
  const [type, setType] = useState(1)
  const [open, setOpen] = useState(false)
  const [selectedSubject, setSelectedSubject] = useState<EducationProgramSubject | null>(null)

  const handleOpen = (eps: EducationProgramSubject) => {
    setSelectedSubject(eps)
    setOpen(true)
  }

  const handleClose = () => {
    setSelectedSubject(null)
    setOpen(false)
  }

  useEffect(() => {
    const loadEducationProgram = async () => {
      await dispatch(
        getEducationProgram({
          filter: {
            loai_chuong_trinh_dao_tao: type,
          },
          additional: {
            paging: {
              limit: 500,
              page: 1,
            },
            ordering: [
              {
                name: null,
                order_type: null,
              },
            ],
          },
        }),
      )
    }

    loadEducationProgram()
  }, [type])

  return (
    <>
      <Box className={'flex flex-col gap-y-4'}>
        <Breadcrumbs aria-label="breadcrumb">
          <Typography color="text.primary">NLU</Typography>
          <Typography color="text.primary">Chương trình đào tạo</Typography>
        </Breadcrumbs>
        <Box className={'flex justify-end items-center gap-x-4'}>
          <Button className={'action-button'}>
            <BsPrinter />
            <Typography className={'uppercase'}>IN</Typography>
          </Button>
          <Button className={'action-button'}>
            <BsFileExcel />
            <Typography className={'uppercase'}>XUẤT EXCEL</Typography>
          </Button>
        </Box>
        <Table size={'small'} className={'border'}>
          <TableHead>
            <TableRow className={'bg-[var(--color-primary)] [&>*]:text-center [&>*]:text-white [&>*]:font-bold'}>
              <TableCell>STT</TableCell>
              <TableCell>Mã MH</TableCell>
              <TableCell>Tên môn học</TableCell>
              <TableCell>Số tín chỉ</TableCell>
              <TableCell>Môn bắt buộc</TableCell>
              <TableCell>Đã học</TableCell>
              <TableCell>Tổng tiết</TableCell>
              <TableCell>Tiết thành phần</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {educationProgramResponse &&
              educationProgramResponse.ds_CTDT_hocky.map((educationProgram, index) => (
                <React.Fragment key={index}>
                  <TableRow>
                    <StyledTableCell colSpan={3}>
                      <Typography variant="subtitle2" className={'font-semibold'}>
                        {educationProgram.ten_hoc_ky}
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell colSpan={1} align={'center'}>
                      <Typography variant="subtitle2" className={'font-semibold'}>
                        {educationProgram.ds_CTDT_mon_hoc
                          .map<number>(subject => parseInt(subject.so_tin_chi))
                          .reduce((a, b) => a + b, 0)}
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell colSpan={4}></StyledTableCell>
                  </TableRow>
                  {educationProgram.ds_CTDT_mon_hoc.map((subject, index) => (
                    <TableRow key={index}>
                      <TableCell align={'center'}>{index + 1}</TableCell>
                      <TableCell align={'center'}>{subject.ma_mon}</TableCell>
                      <TableCell>{subject.ten_mon}</TableCell>
                      <TableCell align={'center'}>{subject.so_tin_chi}</TableCell>
                      <TableCell align={'center'}>{subject.mon_bat_buoc}</TableCell>
                      <TableCell align={'center'}>{subject.mon_da_hoc}</TableCell>
                      <TableCell align={'center'}>{subject.tong_tiet}</TableCell>
                      <TableCell className={'flex justify-center items-center'}>
                        <Button onClick={() => handleOpen(subject)}>
                          <List />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </React.Fragment>
              ))}
          </TableBody>
        </Table>
      </Box>
      {selectedSubject && (
        <SubjectDetailDialog open={open} onClose={handleClose} educationProgramSubject={selectedSubject} />
      )}
    </>
  )
}
export default EducationProgram
