import React, { FC, useEffect } from 'react'
import { isExpired } from 'react-jwt'
import { useAppDispatch, useAppSelector } from 'redux/store'
import { reset } from 'redux/store/features/authSlice'

interface GuardProps {
  children: React.ReactNode
}

export const Guard: FC<GuardProps> = props => {
  const { isLogin, user } = useAppSelector(state => state.auth)
  const location = window.location
  const dispath = useAppDispatch()

  useEffect(() => {
    if (!isLogin && location.pathname !== '/home') {
      location.href = 'home'
    }

    if (isLogin && isExpired(user!.access_token)) {
      dispath(reset())
    }
  }, [isLogin])

  return <>{props.children}</>
}
