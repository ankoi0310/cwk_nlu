import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid'
import CourseDataTable from 'components/CourseRegistration/CourseDataTable'
import RegisteredCourseTable from 'components/CourseRegistration/RegisteredCourseTable'
import React, { FC } from 'react'

interface CourseRegistrationProps {}

const CourseRegistration: FC<CourseRegistrationProps> = () => {
  return (
    <Box className={'flex flex-col gap-y-4'}>
      <Box className={'border-2 rounded-md p-4 py-6'}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={5}>
            <FormControl size="small" fullWidth></FormControl>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <CourseDataTable />
      </Box>
      <Box className={'flex border-2 rounded-md p-4 py-6'}>
        <RegisteredCourseTable />
      </Box>
    </Box>
  )
}

export default CourseRegistration
