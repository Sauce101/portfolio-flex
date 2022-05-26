import { createTheme } from '@mui/material/styles'
import { grey, red } from '@mui/material/colors'

export const theme = createTheme({
  palette: {
    primary: {
      // main: '#3e2723',
      main: red[900],
      contrastText: '#fff',
    },
    // primary: {
    //   light: '#629749',
    //   main: '#33691e',
    //   dark: '#003d00',
    //   contrastText: '#fff',
    // },
    secondary: {
      main: grey[900],
      contrastText: '#fff',
    },
    // secondary: {
    //   light: '#6a4f4b',
    //   main: '#3e2723',
    //   dark: '#1b0000',
    //   contrastText: '#fff',
    // },
  },
})
