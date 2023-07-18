import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'

interface FullWidthLayoutProps {}

const FullWidthLayout: FC<FullWidthLayoutProps> = () => <Outlet />

export default FullWidthLayout
