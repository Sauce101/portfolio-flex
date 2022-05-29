import React from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import Video from '../assets/video/hero.mp4'

const Hero = ({ daytime, executeScroll }) => {
  return (
    <Box
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
          component="video"
          playsInline
          autoPlay
          loop
          muted
          src={Video}
          type="video/mp4"
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
            objectFit: 'cover',
          }}
        />
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
      <Box sx={{ zIndex: 3 }}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            gutterBottom
            sx={{ pt: { xs: 6, sm: 4.5, md: 8 } }}
          >
            Michael Saucedo
          </Typography>
          <Typography
            variant="h5"
            align="center"
            paragraph
            sx={{ color: daytime ? 'text.secondary' : 'primary.contrastText' }}
          >
            I build websites, web apps, and user interfaces.
          </Typography>
          <Stack
            sx={{ pt: 3 }}
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
          </Stack>
          <Stack direction="row" spacing={2} justifyContent="center">
            <IconButton
              aria-label="projects"
              size="large"
              variant="contained"
              onClick={executeScroll}
            >
              <ArrowDownwardIcon sx={{ fontSize: 30 }} />
            </IconButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

export default Hero
