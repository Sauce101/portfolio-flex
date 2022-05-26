import React, { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './theme'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Footer from './components/Footer'

import BgLite from './assets/images/bg/litestripe.jpg'
import BgDark from './assets/images/bg/darkred.jpg'

function App() {
  const [daytime, setDaytime] = useState(() => {
    return false
  })

  const duskdawn = () => {
    setDaytime(!daytime)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar duskdawn={duskdawn} daytime={daytime} />
      <Hero daytime={daytime} />
      <Box
        backgroundColor="secondary.main"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundImage: daytime ? `url(${BgLite})` : `url(${BgDark})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          color: !daytime && 'white',
        }}
      >
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          // spacing={2}
          gap={4}
          sx={{
            justifyContent: 'center',
            // alignContent: 'center',
            // alignContent: { xs: 'center', sm: 'stretch' },
            // mb: 'auto',
            p: 4,
            flexWrap: 'wrap',
            my: 8,
          }}
        >
          <Projects daytime={daytime} />
        </Stack>
      </Box>
      <Footer />
    </ThemeProvider>
  )
}

export default App
