import { yupResolver } from '@hookform/resolvers/yup'
import { AccountCircle, Lock } from '@mui/icons-material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { VscLoading } from 'react-icons/vsc'
import { useAppDispatch, useAppSelector } from 'redux/store'
import { ACTION_TYPE, login } from 'redux/store/features/authSlice'
import { usernameRegex } from 'utils/validation/formValidation'
import * as yup from 'yup'

type Inputs = {
  username: string
  password: string
  grant_type: string
}

const LoginForm = () => {
  const { loading } = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()
  const [error, setError] = useState<any>(null)

  const schema = yup.object().shape({
    username: yup
      .string()
      .required('Mã sinh viên không được để trống')
      .matches(usernameRegex, 'Mã sinh viên không hợp lệ'),
    password: yup.string().required('Mật khẩu không được để trống'),
    grant_type: yup.string().default('password'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (payload: Inputs) => {
    const response = await dispatch(login(payload))

    if (response.type === ACTION_TYPE.AUTH_LOGIN + '/rejected') {
      setError(response.payload)
    } else {
      setError(null)
    }
  }

  useEffect(() => {}, [])

  return (
    <Card variant="outlined" className={'shadow-md'}>
      <CardHeader
        title="Đăng nhập"
        className={'card-header bg-primary'}
        titleTypographyProps={{
          className: 'text-white text-[14px] uppercase font-bold',
        }}
      />
      <CardContent>
        <form onSubmit={handleSubmit(payload => onSubmit(payload))}>
          <Box className={'flex flex-col'}>
            <FormControl>
              <TextField
                id="username"
                className={'mb-2'}
                size={'small'}
                placeholder="Mã số sinh viên"
                {...register('username')}
                error={!!errors.username}
                helperText={errors.username?.message}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle className={!!errors.username ? 'text-red-500' : ''} />
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>

            <FormControl>
              <TextField
                id="password"
                type={'password'}
                size={'small'}
                className={'mb-2'}
                placeholder="Mật khẩu"
                {...register('password')}
                error={!!errors.password}
                helperText={errors.password?.message}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock className={!!errors.password ? 'text-red-500' : ''} />
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>

            <FormHelperText error={!!error} className={'mb-2'}>
              {error}
            </FormHelperText>

            <Button variant="contained" type="submit" className={'text-white'}>
              Đăng nhập
              {loading && <VscLoading className={'bg-[var(--color-primary)] animate-spin ml-2'} />}
            </Button>
          </Box>
        </form>
      </CardContent>
    </Card>
  )
}

export default LoginForm