import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '@fontsource/exo'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { createTheme } from '@mui/material/styles'
import { grey, red } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: red[900],
      contrastText: '#fff',
    },
    secondary: {
      main: grey[900],
      contrastText: '#fff',
    },
    mode: 'light',
  },
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
    fontStyle: 'normal',
  },
})

const darkTheme = createTheme({
  palette: {
    primary: {
      main: red[900],
      contrastText: '#fff',
    },
    secondary: {
      main: grey[900],
      contrastText: '#fff',
    },
    mode: 'dark',
  },
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
    fontStyle: 'normal',
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App theme={theme} darkTheme={darkTheme} />
  </React.StrictMode>
)
