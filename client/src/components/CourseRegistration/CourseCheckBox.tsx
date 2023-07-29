import { CircularProgress, Tooltip } from '@mui/material'
import Typography from '@mui/material/Typography'
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
  const [loading, setLoading] = useState<boolean>(false)

  const register = async (id_to_hoc: string, is_checked: boolean) => {
    const response = await dispatch(
      registerCourse({
        filter: {
          id_to_hoc,
          is_checked,
        },
      }),
    )

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
    setLoading(true)
    register(course.id_to_hoc, e.target.checked).then(() => {
      setLoading(false)
    })
  }

  return (
    course && (
      <Tooltip title={course.gc_enable} placement="top">
        {loading ? (
          <div className="flex justify-center items-center">
            <CircularProgress size={20} />
          </div>
        ) : (
          <Typography>
            <Checkbox checked={checked} disabled={!course.enable} onChange={onChange} />
          </Typography>
        )}
      </Tooltip>
    )
  )
}

export default CourseCheckBox
