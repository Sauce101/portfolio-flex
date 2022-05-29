import { createTheme } from '@mui/material/styles'
import { grey, red } from '@mui/material/colors'

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
    fontFamily: ['Roboto', 'sans-serif'].join(','),
  },
})
