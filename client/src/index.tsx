import { ThemeProvider } from '@mui/material'
import { ThemeProvider as ThemeProvider2 } from '@material-tailwind/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import App from './App'
import reportWebVitals from './reportWebVitals'
import store, { persistor } from 'redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import theme from './utils/custom/MyTheme'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <ThemeProvider2>
            <App/>
          </ThemeProvider2>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
