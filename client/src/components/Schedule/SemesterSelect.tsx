import { SelectChangeEvent } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import React, { FC, useRef } from 'react'

interface SemesterSelectProps {
  value: string
  setValue: (value: string) => void
  items: SemesterFilter[]
}

const SemesterSelect: FC<SemesterSelectProps> = props => {
  const ref = useRef()
  const [value, setValue] = React.useState(props.value)

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string)
  }

  return (
    <Select
      ref={ref}
      value={value}
      onChange={event => {
        handleChange(event)
        props.setValue(event.target.value as string)
      }}>
      {props.items.map((item: SemesterFilter, index) => (
        <MenuItem key={index} value={item.hoc_ky}>
          {item.ten_hoc_ky}
        </MenuItem>
      ))}
    </Select>
  )
}

export default SemesterSelect
