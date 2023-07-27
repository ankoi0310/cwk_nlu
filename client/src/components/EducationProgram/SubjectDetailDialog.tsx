import { DialogBody } from '@material-tailwind/react'
import { Dialog, DialogTitle, Table, TableBody, TableCell, TableRow } from '@mui/material'
import TableHead from '@mui/material/TableHead'
import React, { FC } from 'react'

interface SubjectDetailDialogProps {
  open: boolean
  onClose: () => void
  educationProgramSubject: EducationProgramSubject
}

export const SubjectDetailDialog: FC<SubjectDetailDialogProps> = props => {
  const { open, onClose, educationProgramSubject: eps } = props

  return (
    eps && (
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>{eps.ten_mon}</DialogTitle>
        <DialogBody>
          <Table size={'small'} className={'border'}>
            <TableHead>
              <TableRow className={'bg-[var(--color-primary)] [&>*]:text-center [&>*]:text-white [&>*]:font-bold'}>
                <TableCell>STT</TableCell>
                <TableCell>Tên thành phần</TableCell>
                <TableCell>Số tiết</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {eps.ds_tiet_thanh_phan.map((subjectDetail, index) => (
                <TableRow key={index}>
                  <TableCell align={'center'}>{index + 1}</TableCell>
                  <TableCell>{subjectDetail.ten_thanh_phan}</TableCell>
                  <TableCell align={'center'}>{subjectDetail.so_tiet}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </DialogBody>
      </Dialog>
    )
  )
}
