import React, { FC, JSX } from 'react'

interface FormProps {
  children: JSX.Element
}

const Form: FC<FormProps> = props => {
  const { children, ...others } = props
  return (
    <form autoComplete="off" {...others}>
      {children}
    </form>
  )
}

export default Form
