import React, { FC, useEffect } from 'react'
import { IconButton, Snackbar } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

interface CustomSnackbarProps {
  open: boolean
  autoHideDuration: number
  message: string
}

const CustomSnackbar: FC<CustomSnackbarProps> = props => {
  const [open, setOpen] = React.useState(false)

  const onClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  const action = (
    <React.Fragment>
      <IconButton size="small" aria-label="close" color="inherit">
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  )

  useEffect(() => {
    setOpen(props.open)
  }, [props.open])

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={open}
      autoHideDuration={props.autoHideDuration}
      onClose={onClose}
      message={props.message}
      action={action}
    />
  )
}

export default CustomSnackbar
