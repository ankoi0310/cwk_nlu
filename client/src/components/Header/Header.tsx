import React, { FC } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import darkThemeLogo from 'assets/images/dark_theme_logo.png'
import { Link } from 'react-router-dom'

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* Logo */}
          <Link to={'/'}>
            <img src={darkThemeLogo} alt="logo" width={70} />
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
