import { Tooltip } from '@mui/material'
import React, { FC, useState } from 'react'
import { useAppDispatch } from 'redux/store'
import { registerCourse } from 'redux/store/features/subjectSlice'
import MySwal from 'utils/custom/MySwal'
import Checkbox from '@mui/material/Checkbox'

interface CourseCheckBoxProps {
  course: Course
}

const CourseCheckBox: FC<CourseCheckBoxProps> = props => {
  const dispatch = useAppDispatch()
  const { course } = props
  const [checked, setChecked] = useState<boolean>(course.is_dk)

  const register = async (id_to_hoc: string, is_checked: boolean) => {
    const response = await dispatch(registerCourse({ id_to_hoc, is_checked }))

    const registrationResult: CourseRegistrationResponse = response.payload.data

    if (!registrationResult.is_thanh_cong) {
      MySwal.fire({
        icon: 'error',
        text: registrationResult.thong_bao_loi,
        timer: 2000,
      }).then(() => {
        setChecked(!is_checked)
      })
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked)
    register(course.id_to_hoc, e.target.checked).then(() => {})
  }

  return (
    course && (
      <Tooltip title={course.gc_enable} placement="top">
        <span>
          <Checkbox checked={checked} disabled={!course.enable} onChange={onChange} />
        </span>
      </Tooltip>
    )
  )
}

export default CourseCheckBox
