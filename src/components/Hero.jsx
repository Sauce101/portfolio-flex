import React from 'react'
// import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
// import Button from '@mui/material/Button'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import Video from '../assets/video/hero.mp4'

const Hero = ({ daytime }) => {
  return (
    <Box
      // backgroundColor={daytime ? 'background.paper' : 'secondary.main'}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        // color: !daytime && 'background.paper',
        bgcolor: daytime ? 'background.paper' : 'secondary.main',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          zIndex: 1,
        }}
      >
        <Box
          component="video"
          playsInline
          autoPlay
          loop
          muted
          src={Video}
          type="video/mp4"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </Box>
      <Box sx={{ pt: 8, pb: 6, zIndex: 2 }}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" gutterBottom>
            Michael Saucedo
          </Typography>
          <Typography
            variant="h5"
            align="center"
            paragraph
            // color="text.secondary"
            // sx={{ color: daytime ? 'text.secondary' : 'background.paper' }}
          >
            I build websites, web apps, and user interfaces.
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <LinkedInIcon sx={{ fontSize: 40 }} />
            <GitHubIcon sx={{ fontSize: 40 }} />
            {/* <Button variant="contained">LinkedIn</Button> */}
            {/* <Button variant="outlined">GitHub</Button> */}
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

export default Hero
