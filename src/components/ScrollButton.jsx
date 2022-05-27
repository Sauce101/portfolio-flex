import React, { useState } from 'react'
import Fab from '@mui/material/Fab'
import Box from '@mui/material/Box'
import UpIcon from '@mui/icons-material/KeyboardArrowUp'

const ScrollButton = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 300) {
      setVisible(true)
    } else if (scrolled <= 300) {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    })
  }

  window.addEventListener('scroll', toggleVisible)

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          // right: '50%',
          mx: 'auto',
          bottom: '120px',
          height: '20px',
          fontSize: '3rem',
          // zIndex: '1',
          cursor: 'pointer',
          color: 'primary.main',
          display: visible ? 'inline' : 'none',
          // display: !visible && 'none',
        }}
      >
        <Fab onClick={scrollToTop} color="primary" aria-label="add">
          <UpIcon />
        </Fab>
      </Box>
    </>
  )
}

export default ScrollButton
