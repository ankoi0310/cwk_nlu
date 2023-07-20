import { yupResolver } from '@hookform/resolvers/yup'
import { AccountCircle, Lock } from '@mui/icons-material'
import { Grid, List, ListItem, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Divider from '@mui/material/Divider'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'
import ListItemText from '@mui/material/ListItemText'
import TextField from '@mui/material/TextField'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { VscLoading } from 'react-icons/vsc'
import { useAppDispatch, useAppSelector } from 'redux/store'
import { ACTION_TYPE, login, logout } from 'redux/store/features/authSlice'
import { getUserInfo } from 'redux/store/features/userSlice'
import { usernameRegex } from 'utils/validation/formValidation'
import * as yup from 'yup'

type Inputs = {
  username: string
  password: string
  grant_type: string
}

const LoginForm = () => {
  const { loading, isLogin } = useAppSelector(state => state.auth)
  const { userInfo } = useAppSelector(state => state.user)
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
    handleSubmit: handleLogin,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  })

  const { handleSubmit: handleLogout } = useForm()

  const onLogin = async (payload: Inputs) => {
    const response = await dispatch(login(payload))

    if (response.type === ACTION_TYPE.AUTH_LOGIN + '/rejected') {
      setError(response.payload)
    } else {
      setError(null)
    }
  }

  const onLogout = async () => {
    await dispatch(logout({}))
  }

  useEffect(() => {
    const loadUserInfo = async () => {
      if (isLogin) {
        await dispatch(getUserInfo({}))
      }
    }

    loadUserInfo()
  }, [])

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
        {isLogin ? (
          <form onSubmit={handleLogout(() => onLogout())}>
            <Box className={'flex flex-col'}>
              <List>
                <ListItem>
                  <ListItemText
                    primary={
                      <Grid container>
                        <Grid item md={4}>
                          <Typography className={'font-bold'}>Tài khoản</Typography>
                        </Grid>
                        <Grid item md={8}>
                          <Typography>{userInfo?.ma_sv}</Typography>
                        </Grid>
                      </Grid>
                    }
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText
                    primary={
                      <Grid container>
                        <Grid item md={4}>
                          <Typography className={'font-bold'}>Họ tên</Typography>
                        </Grid>
                        <Grid item md={8}>
                          <Typography>{userInfo?.ten_day_du}</Typography>
                        </Grid>
                      </Grid>
                    }
                  />
                </ListItem>
              </List>
              <Button variant="contained" type="submit" className={'text-white'}>
                Đăng xuất
                {loading && <VscLoading className={'bg-transparent animate-spin ml-2'} />}
              </Button>
            </Box>
          </form>
        ) : (
          <form onSubmit={handleLogin(payload => onLogin(payload))}>
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
                {loading && <VscLoading className={'bg-transparent animate-spin ml-2'} />}
              </Button>
            </Box>
          </form>
        )}
      </CardContent>
    </Card>
  )
}

export default LoginForm
