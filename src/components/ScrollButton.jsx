import React, { useState } from 'react'
import Fab from '@mui/material/Fab'
import UpIcon from '@mui/icons-material/KeyboardArrowUp'
import Box from '@mui/material/Box'

const ScrollButton = () => {
  const [visible, setVisible] = useState(() => {
    return false
  })

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 400) {
      setVisible(true)
    } else if (scrolled <= 400) {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  window.addEventListener('scroll', toggleVisible)

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          bottom: '120px',
          height: '20px',
          cursor: 'pointer',
          color: 'primary.main',
          display: visible ? 'inline' : 'none',
          ml: { xs: '85%', sm: '90%', lg: '92%' },
        }}
      >
        <Fab onClick={scrollToTop} color="primary" aria-label="up">
          <UpIcon />
        </Fab>
      </Box>
    </>
  )
}

export default ScrollButton
