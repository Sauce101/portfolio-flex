import React, { useState } from 'react'
import Fab from '@mui/material/Fab'
import UpIcon from '@mui/icons-material/KeyboardArrowUp'

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
      {visible && (
        <Fab
          onClick={scrollToTop}
          color="primary"
          aria-label="up"
          sx={{
            position: 'fixed',
            bottom: '60px',
            cursor: 'pointer',
            ml: { xs: '85%', sm: '90%', lg: '92%' },
          }}
        >
          <UpIcon />
        </Fab>
      )}
    </>
  )
}

export default ScrollButton
