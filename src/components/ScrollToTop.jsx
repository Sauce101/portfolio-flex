import React, { useState, useEffect } from 'react'
import Fab from '@mui/material/Fab'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'

export default function ScrollToTop() {
  const [uptop, setUptop] = useState(() => {
    return false
  })

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 350) {
        setUptop(true)
      } else {
        setUptop(false)
      }
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {uptop && (
        <Fab
          onClick={scrollUp}
          aria-label="up"
          color="primary"
          sx={{
            position: 'fixed',
            bottom: '60px',
            ml: { xs: '85%', sm: '90%', lg: '92%' },
          }}
        >
          <ArrowUpwardIcon />
        </Fab>
      )}
    </>
  )
}
