import { createTheme } from '@mui/material/styles'
import { grey, red } from '@mui/material/colors'
import '@fontsource/exo'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

export const theme = createTheme({
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
  },
})

export const darkTheme = createTheme({
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
    fontFamily: ['Exo', 'sans-serif'].join(','),
  },
})
