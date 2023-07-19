import Grid2 from '@mui/material/Unstable_Grid2'
import Banner from 'components/Banner/Banner'
import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import SideBar from 'components/SideBar/SideBar'
import React, { FC, useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

interface DefautLayoutProps {}

const DefaultLayout: FC<DefautLayoutProps> = () => {
  const [isHome, setIsHome] = useState<boolean>(false)
  const location = useLocation()

  useEffect(() => {
    const path = location.pathname
    setIsHome(path === '/' || path === '/home')
  }, [location.pathname])

  return (
    <>
      <Header />
      {isHome && <Banner />}
      <Grid2 container spacing={2} className={'m-4 mb-8'}>
        <Grid2 component={'div'} xs={12} sm={6} md={9} className={'flex flex-col gap-y-4'}>
          <Outlet />
        </Grid2>
        <Grid2 component={'div'} xs={12} sm={6} md={3}>
          <SideBar />
        </Grid2>
      </Grid2>
      <Footer />
    </>
  )
}

export default DefaultLayout
