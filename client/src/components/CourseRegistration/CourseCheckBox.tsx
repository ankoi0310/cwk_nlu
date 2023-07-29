import { CircularProgress, Tooltip } from '@mui/material'
import Typography from '@mui/material/Typography'
import React, { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/store'
import { registerCourse } from 'redux/store/features/subjectSlice'
import MySwal from 'utils/custom/MySwal'
import Checkbox from '@mui/material/Checkbox'

interface CourseCheckBoxProps {
  course: Course
}

const CourseCheckBox: FC<CourseCheckBoxProps> = props => {
  const { isLogin } = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()
  const { course } = props
  const [checked, setChecked] = useState<boolean>(false)
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

    console.log(response)
    const registrationResult: CourseRegistrationResponse = response.payload.data

    console.log(registrationResult)
    if (isLogin && !registrationResult.is_thanh_cong) {
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

  useEffect(() => {
    setChecked(course.is_dk)
  }, [course])

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
