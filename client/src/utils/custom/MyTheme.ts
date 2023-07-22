import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#00B96B',
      dark: '#008C4A',
      light: '#00E676',
    },
    secondary: {
      main: '#FFC107',
      dark: '#FFA000',
      light: '#FFD54F',
    },
    text: {
      primary: '#000000',
      secondary: '#5F6368',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    error: {
      main: '#FF0000',
    },
    warning: {
      main: '#FF9800',
    },
    info: {
      main: '#2196F3',
    },
    success: {
      main: '#4CAF50',
    },
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
})

export default theme
