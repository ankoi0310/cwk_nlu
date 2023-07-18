import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import styles from './DefaultLayout.module.css'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

interface DefautLayoutProps {}

const DefaultLayout: FC<DefautLayoutProps> = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
)

export default DefaultLayout
