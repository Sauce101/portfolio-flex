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
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [daytime, setDaytime] = useState(() => {
    return false
  })

  const duskdawn = () => {
    setDaytime(!daytime)
  }

  const mode = daytime ? theme : darkTheme

  const executeScroll = () => {
    document.getElementById('myProjects').scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <ThemeProvider theme={mode}>
      <CssBaseline />
      <Navbar
        duskdawn={duskdawn}
        daytime={daytime}
        executeScroll={executeScroll}
      />
      <Hero daytime={daytime} executeScroll={executeScroll} />
      <Box
        backgroundColor="secondary.main"
        id="myProjects"
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
      <ScrollToTop />
      <Footer />
    </ThemeProvider>
  )
}

export default App
