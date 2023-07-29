import { Clear } from '@mui/icons-material'
import { CircularProgress } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import React, { FC, useState } from 'react'
import { useAppDispatch } from 'redux/store'
import { removeRegisteredCourse } from 'redux/store/features/subjectSlice'

interface CourseRemoveButtonProps {
  registeredCourse: RegisteredCourse
}

const CourseRemoveButton: FC<CourseRemoveButtonProps> = props => {
  const { registeredCourse } = props
  const [loading, setLoading] = useState<boolean>(false)
  const dispatch = useAppDispatch()

  const handleRemoveRegisteredCourse = async (id_to_hoc: string) => {
    setLoading(true)
    await dispatch(
      removeRegisteredCourse({
        filter: {
          id_to_hoc,
          is_checked: false,
        },
      }),
    )
    setLoading(false)
  }

  return (
    <Box className={'flex justify-center items-center'}>
      {loading ? (
        <CircularProgress size={20} />
      ) : (
        <Button
          color={'error'}
          size={'small'}
          onClick={() => handleRemoveRegisteredCourse(registeredCourse.to_hoc.id_to_hoc)}>
          <Clear />
        </Button>
      )}
    </Box>
  )
}

export default CourseRemoveButton
