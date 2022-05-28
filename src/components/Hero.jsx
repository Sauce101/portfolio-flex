import React from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import Video from '../assets/video/hero.mp4'

const Hero = ({ daytime }) => {
  return (
    <Box
      backgroundColor={daytime ? 'background.paper' : 'secondary.main'}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        bgcolor: daytime ? 'background.paper' : 'secondary.main',
        position: 'relative',
      }}
    >
      {!daytime && (
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
      )}
      {!daytime && (
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.4)',
            zIndex: 2,
          }}
        />
      )}
      {/* <Box sx={{ pt: 8, pb: 6, zIndex: 3 }}> */}
      <Box sx={{ zIndex: 3 }}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            gutterBottom
            sx={{ pt: 6 }}
          >
            Michael Saucedo
          </Typography>
          <Typography
            variant="h5"
            align="center"
            paragraph
            // color="text.secondary"
            sx={{ color: daytime ? 'text.secondary' : 'primary.contrastText' }}
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
            <IconButton
              aria-label="linked in"
              size="large"
              component={Link}
              href="https://www.linkedin.com/in/michael-saucedo-101/"
              underline="none"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
            >
              <LinkedInIcon sx={{ fontSize: 30 }} />
            </IconButton>
            <IconButton
              aria-label="git hub"
              size="large"
              component={Link}
              href="https://github.com/Sauce101"
              underline="none"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
            >
              <GitHubIcon sx={{ fontSize: 30 }} />
            </IconButton>
            {/* <LinkedInIcon sx={{ fontSize: 40 }} />
            <GitHubIcon sx={{ fontSize: 40 }} /> */}
            {/* <Button variant="contained">LinkedIn</Button> */}
            {/* <Button variant="outlined">GitHub</Button> */}
            {/* <SplitButton /> */}
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

export default Hero
