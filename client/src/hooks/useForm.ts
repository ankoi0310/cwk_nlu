import { useState } from 'react'

const useForm = (
  initialValues = {},
  validateOnChange = false,
  validate: any,
) => {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  const onChange = (e: any) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
    if (validateOnChange) validate({ [name]: value })
  }

  const onBlur = (e: any) => {
    const { name } = e.target
    setTouched({ ...touched, [name]: true })
    // validate({ [name]: values[name] })
  }

  const resetForm = () => {
    setValues(initialValues)
    setErrors({})
    setTouched({})
  }

  return {
    values,
    setValues,
    errors,
    setErrors,
    touched,
    setTouched,
    onChange,
    onBlur,
    resetForm,
  }
}

export default useForm