import React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import AppsIcon from '@mui/icons-material/Apps'
import { amber, yellow } from '@mui/material/colors'

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  alignContent: 'center',
})

const Navbar = ({ duskdawn, daytime, executeScroll }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'primary.main',
        mb: 'auto',
        top: 0,
      }}
    >
      <StyledToolbar>
        <Box
          onClick={executeScroll}
          sx={{ alignItems: 'flex-end', display: { xs: 'none', sm: 'flex' } }}
        >
          <AppsIcon fontSize="large" sx={{ mr: 1 }} />
          <Typography variant="h6">Portfolio</Typography>
        </Box>
        <AppsIcon
          onClick={executeScroll}
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
