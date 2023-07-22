import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import { Check, List } from '@mui/icons-material'
import { Breadcrumbs, TableBody, TableCell, tableCellClasses } from '@mui/material'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import React, { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/store'
import { getTranscript } from 'redux/store/features/transcriptSlice'
import styles from './Transcript.module.css'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.root}`]: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
  },
}))

interface TranscriptProps {}

const Transcript: FC<TranscriptProps> = () => {
  const { transcript } = useAppSelector(state => state.transcript)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const loadTranscript = () => {
      dispatch(getTranscript({}))
    }

    loadTranscript()
  }, [])

  return (
    <Box className={'flex flex-col gap-y-4'}>
      <Breadcrumbs aria-label="breadcrumb">
        <Typography color="text.primary">NLU</Typography>
        <Typography color="text.primary">Bảng điểm</Typography>
      </Breadcrumbs>
      <Box className={'flex justify-end items-center gap-x-4'}>
        <Button className={cx('action-button')}>IN</Button>
        <Button className={cx('action-button')}>XUẤT EXCEL</Button>
      </Box>
      <Table size={'small'} className={'border'}>
        <TableHead>
          <TableRow className={'bg-[var(--color-primary)] [&>*]:text-center [&>*]:text-white [&>*]:font-bold'}>
            <TableCell width={'5%'}>STT</TableCell>
            <TableCell width={'10%'}>Mã MH</TableCell>
            <TableCell width={'6%'}>Nhóm</TableCell>
            <TableCell>Tên môn học</TableCell>
            <TableCell width={'8%'}>Số tín chỉ</TableCell>
            <TableCell width={'6%'}>Điểm thi</TableCell>
            <TableCell width={'8%'}>Điểm TK (10)</TableCell>
            <TableCell width={'8%'}>Điểm TK (4)</TableCell>
            <TableCell width={'8%'}>Điểm TK (C)</TableCell>
            <TableCell width={'5%'}>Kết quả</TableCell>
            <TableCell width={'5%'}>Chi tiết</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transcript &&
            transcript.ds_diem_hocky.map(semester => (
              <>
                <TableRow>
                  <StyledTableCell colSpan={12}>
                    <Typography variant="subtitle2" className={'font-semibold'}>
                      {semester.ten_hoc_ky}
                    </Typography>
                  </StyledTableCell>
                </TableRow>
                {semester.ds_diem_mon_hoc.map((subject, index) => (
                  <TableRow>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{subject.ma_mon}</TableCell>
                    <TableCell>{subject.nhom_to}</TableCell>
                    <TableCell>{subject.ten_mon}</TableCell>
                    <TableCell>{subject.so_tin_chi}</TableCell>
                    <TableCell>{subject.diem_thi}</TableCell>
                    <TableCell>{subject.diem_tk}</TableCell>
                    <TableCell>{subject.diem_tk_so}</TableCell>
                    <TableCell>{subject.diem_tk_chu}</TableCell>
                    <TableCell>
                      <Check />
                    </TableCell>
                    <TableCell>
                      <List />
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                  <TableCell colSpan={12}>
                    <Box className={'grid grid-cols-12 gap-x-2'}>
                      <Box className={'col-span-1'}></Box>
                      <Box className={'col-span-3'}>
                        <Typography component={'span'}>Điểm trung bình học kỳ hệ 4:</Typography>
                      </Box>
                      <Box className={'col-span-2'}>
                        <Typography component={'span'} className={'font-semibold'}>
                          {semester.dtb_hk_he4}
                        </Typography>
                      </Box>
                      <Box className={'col-span-3'}>
                        <Typography component={'span'}>Điểm trung bình tích luỹ hệ 4:</Typography>
                      </Box>
                      <Box className={'col-span-2'}>
                        <Typography component={'span'} className={'font-semibold'}>
                          {semester.dtb_tich_luy_he_4}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                </TableRow>
                <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                  <TableCell colSpan={12}>
                    <Box className={'grid grid-cols-12 gap-x-2'}>
                      <Box className={'col-span-1'}></Box>
                      <Box className={'col-span-3'}>
                        <Typography component={'span'}>Điểm trung bình học kỳ hệ 10:</Typography>
                      </Box>
                      <Box className={'col-span-2'}>
                        <Typography component={'span'} className={'font-semibold'}>
                          {semester.dtb_hk_he10}
                        </Typography>
                      </Box>
                      <Box className={'col-span-3'}>
                        <Typography component={'span'}>Điểm trung bình tích luỹ hệ 10:</Typography>
                      </Box>
                      <Box className={'col-span-2'}>
                        <Typography component={'span'} className={'font-semibold'}>
                          {semester.dtb_tich_luy_he_10}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                </TableRow>
                <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                  <TableCell colSpan={12}>
                    <Box className={'grid grid-cols-12 gap-x-2'}>
                      <Box className={'col-span-1'}></Box>
                      <Box className={'col-span-3'}>
                        <Typography component={'span'}>Số tín chỉ đạt học kỳ:</Typography>
                      </Box>
                      <Box className={'col-span-2'}>
                        <Typography component={'span'} className={'font-semibold'}>
                          {semester.so_tin_chi_dat_hk}
                        </Typography>
                      </Box>
                      <Box className={'col-span-3'}>
                        <Typography component={'span'}>Số tín chỉ tích luỹ:</Typography>
                      </Box>
                      <Box className={'col-span-2'}>
                        <Typography component={'span'} className={'font-semibold'}>
                          {semester.so_tin_chi_dat_tich_luy}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                </TableRow>
              </>
            ))}
        </TableBody>
      </Table>
    </Box>
  )
}

export default Transcript
