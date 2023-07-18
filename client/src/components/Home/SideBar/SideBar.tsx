import React from 'react'
import LoginForm from './LoginForm/LoginForm'
import Menu from './Menu/Menu'
import styles from './SideBar.module.css'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const SideBar = () => {
  return (
    <div className={'flex flex-col gap-y-4'}>
      <LoginForm />
      <Menu />
    </div>
  )
}

export default SideBar