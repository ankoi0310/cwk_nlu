import { SelectChangeEvent } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import React, { FC } from 'react'

interface ObjectSelectProps {
  value: string
  items: ObjectFilter[]
  setValue: (value: string) => void
}

const ObjectSelect: FC<ObjectSelectProps> = props => {
  const [value, setValue] = React.useState(props.value)

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string)
  }

  return (
    <Select
      value={value}
      onChange={(event: SelectChangeEvent) => {
        handleChange(event)
        props.setValue(event.target.value as string)
      }}>
      {props.items.map((item: ObjectFilter, index) => (
        <MenuItem key={index} value={item.loai_doi_tuong}>
          {item.ten_doi_tuong}
        </MenuItem>
      ))}
    </Select>
  )
}
export default ObjectSelect

