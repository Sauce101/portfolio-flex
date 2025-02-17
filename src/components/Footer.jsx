import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

function Copyright() {
  const currentYear = new Date().getFullYear()
  return (
    <Typography variant="body2">
      {'Copyright © '}
      Saucedo 2022-{currentYear}
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
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
      }}
    >
      <Container maxWidth="sm" align="center">
        <Typography variant="body2">Contact me</Typography>
        <Typography variant="body2">Mike.Cucamonga@gmail.com</Typography>
        <Copyright />
      </Container>
    </Box>
  )
}

export default Footer
