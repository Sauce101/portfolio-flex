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
import Cube from './Cube'
import useMediaQuery from '@mui/material/useMediaQuery'

const Hero = ({ daytime, executeScroll }) => {
  const devicePortrait = useMediaQuery('(orientation: portrait)')
  const tabletWide = useMediaQuery('(min-width:900px)')

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
            sx={{
              mt: '56px',
              pt: { xs: 6, sm: 2.5, laptop: 8 },
              '@media (orientation: portrait)': {
                pt: { tablet: '25%' },
              },
            }}
          >
            Michael Saucedo
          </Typography>
          <Typography
            variant="h5"
            align="center"
            paragraph
            sx={{
              color: daytime ? 'text.secondary' : 'primary.contrastText',
            }}
          >
            I build websites, web apps, and user interfaces.
          </Typography>
          <Stack
            sx={{ pt: { xm: 3, sm: 2, lg: 4 } }}
            direction="row"
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <IconButton
              aria-label="linked in"
              size="large"
              component={Link}
              href="https://www.linkedin.com/in/michael-saucedo-101/"
              underline="none"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon sx={{ fontSize: { xs: 33, lg: 40 } }} />
            </IconButton>
            <IconButton
              aria-label="git hub"
              size="large"
              component={Link}
              href="https://github.com/Sauce101"
              underline="none"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon sx={{ fontSize: { xs: 33, lg: 40 } }} />
            </IconButton>
          </Stack>
          <Stack direction="row" spacing={2} justifyContent="center">
            <IconButton
              aria-label="projects"
              size="large"
              variant="contained"
              onClick={executeScroll}
            >
              My Projects
              <ArrowDownwardIcon sx={{ fontSize: { xs: 33, lg: 40 } }} />
            </IconButton>
          </Stack>
        </Container>
        {/* skills cube */}
        {(devicePortrait || tabletWide) && (
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            sx={{ pt: 8 }}
          >
            <Cube executeScroll={executeScroll} />
          </Stack>
        )}
        {/* end skills cube */}
      </Box>
    </Box>
  )
}

export default Hero
