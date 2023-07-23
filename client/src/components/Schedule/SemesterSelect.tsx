import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import React, { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/store'
import { getSemesterFilterList } from 'redux/store/features/scheduleSlice'

export interface SemesterSelectProps {
  value: string
  handleChange: (value: string) => void
}

const SemesterSelect: FC<SemesterSelectProps> = props => {
  const { semesterFilters } = useAppSelector(state => state.schedule)
  const dispatch = useAppDispatch()

  const handleChange = (value: string) => {
    props.handleChange(value)
  }

  useEffect(() => {
    const loadSemesterFilterList = async () => {
      await dispatch(
        getSemesterFilterList({
          filter: {
            is_tieng_anh: null,
          },
          additional: {
            paging: {
              limit: 100,
              page: 1,
            },
            ordering: [
              {
                name: 'hoc_ky',
                order_type: 1,
              },
            ],
          },
        }),
      )
    }

    loadSemesterFilterList()
  }, [])

  return (
    semesterFilters && (
      <Select
        value={props.value !== '' ? props.value : semesterFilters[0].hoc_ky.toString()}
        onChange={event => handleChange(event.target.value as string)}>
        {semesterFilters.map((semesterFilter, index) => {
          return (
            <MenuItem key={index} value={semesterFilter.hoc_ky}>
              {semesterFilter.ten_hoc_ky}
            </MenuItem>
          )
        })}
      </Select>
    )
  )
}

export default SemesterSelect
