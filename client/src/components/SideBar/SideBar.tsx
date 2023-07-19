import LoginForm from 'components/SideBar/LoginForm/LoginForm'
import Menu from 'components/SideBar/Menu/Menu'
import React from 'react'

const SideBar = () => {
  return (
    <div className={'flex flex-col gap-y-4'}>
      <LoginForm />
      <Menu />
    </div>
  )
}

export default SideBar