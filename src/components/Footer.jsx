import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'

function Copyright() {
  return (
    <Typography variant="body2" color="background.paper">
      {'Copyright © '}
      <Link color="inherit" href="https://mikeys.netlify.app/">
        Michael Saucedo
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: 'primary.main',
        color: 'background.paper',
      }}
    >
      <Container maxWidth="sm" align="center">
        <Typography variant="body1">Contact me</Typography>
        <Copyright />
      </Container>
    </Box>
  )
}

export default Footer
