import React, { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { theme, darkTheme } from './theme'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Footer from './components/Footer'

import BgLite from './assets/images/bg/rwback.jpg'
import BgDark from './assets/images/bg/darkred.jpg'
import ScrollButton from './components/ScrollButton'

function App() {
  const [daytime, setDaytime] = useState(() => {
    return true
  })

  const duskdawn = () => {
    setDaytime(!daytime)
  }

  const mode = daytime ? theme : darkTheme

  return (
    <ThemeProvider theme={mode}>
      <CssBaseline />
      <Navbar duskdawn={duskdawn} daytime={daytime} />
      <Hero daytime={daytime} />
      <Box
        backgroundColor="secondary.main"
        id="Pro"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundImage: daytime ? `url(${BgLite})` : `url(${BgDark})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          gap={4}
          sx={{
            justifyContent: 'center',
            alignContent: 'center',
            p: 4,
            flexWrap: 'wrap',
            my: 8,
          }}
        >
          <Projects daytime={daytime} />
        </Stack>
      </Box>
      <ScrollButton sx={{ justifyContent: 'flex-end' }} />
      <Footer />
    </ThemeProvider>
  )
}

export default App
