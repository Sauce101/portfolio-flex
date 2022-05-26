import React from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
// import Button from '@mui/material/Button'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

const Hero = ({ daytime }) => {
  return (
    <Box
      // backgroundColor={daytime ? 'background.paper' : 'secondary.main'}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        color: !daytime && 'background.paper',
        bgcolor: daytime ? 'background.paper' : 'secondary.main',
      }}
    >
      <Box sx={{ pt: 8, pb: 6 }}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" gutterBottom>
            Michael Saucedo
          </Typography>
          <Typography
            variant="h5"
            align="center"
            paragraph
            // color="text.secondary"
            sx={{ color: daytime ? 'text.secondary' : 'background.paper' }}
          >
            Hello there, thank you for taking the time to visit my Portfolio
            page. Below is a collection of some projects I've put together over
            the last year.
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
