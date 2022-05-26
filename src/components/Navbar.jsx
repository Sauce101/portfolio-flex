import React from 'react'
import { styled } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import LogoDevIcon from '@mui/icons-material/LogoDev'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { amber, yellow } from '@mui/material/colors'

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  alignContent: 'center',
})

const Navbar = ({ duskdawn, daytime }) => {
  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: 'primary.main', mb: 'auto' }}
    >
      <StyledToolbar>
        <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
          <LogoDevIcon fontSize="large" sx={{ mr: 1 }} />
          <Typography variant="h6">Portfolio</Typography>
        </Box>
        <LogoDevIcon
          fontSize="large"
          sx={{ display: { xs: 'block', sm: 'none' } }}
        />
        {daytime ? (
          <DarkModeIcon sx={{ color: amber[500] }} onClick={duskdawn} />
        ) : (
          <LightModeIcon sx={{ color: yellow[500] }} onClick={duskdawn} />
        )}
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar
