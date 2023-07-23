import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import React, { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/store'
import { getObjectFilterList } from 'redux/store/features/scheduleSlice'

export interface ObjectSelectProps {
  value: string
  handleChange: (value: string) => void
}

const ObjectSelect: FC<ObjectSelectProps> = props => {
  const { objectFilters } = useAppSelector(state => state.schedule)
  const dispatch = useAppDispatch()

  const handleChange = (value: string) => {
    props.handleChange(value)
  }

  useEffect(() => {
    const loadObjectFilterList = async () => {
      await dispatch(getObjectFilterList({}))
    }

    loadObjectFilterList()
  }, [])

  return (
    objectFilters && (
      <Select
        value={props.value !== '' ? props.value : objectFilters[0].loai_doi_tuong.toString()}
        onChange={event => handleChange(event.target.value as string)}>
        {objectFilters.map((objectFilter, index) => {
          return (
            <MenuItem key={index} value={objectFilter.loai_doi_tuong}>
              {objectFilter.ten_doi_tuong}
            </MenuItem>
          )
        })}
      </Select>
    )
  )
}
export default ObjectSelect

