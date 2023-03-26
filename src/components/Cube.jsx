import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
// six skills
import D1 from '../assets/images/svg/logo-react.svg'
import D2 from '../assets/images/svg/logo-tailwind.svg'
import D3 from '../assets/images/svg/logo-github.svg'
import D4 from '../assets/images/svg/logo-typescript.svg'
import D5 from '../assets/images/svg/logo-mui.svg'
import D6 from '../assets/images/svg/logo-javascript.svg'
import { keyframes } from '@emotion/react'

const spincube = keyframes({
  from: {
    transform: 'translateZ(-50px) rotateY(0deg)',
  },
  to: {
    transform: 'translateZ(-50px) rotateY(0deg)',
  },
  '16%': {
    transform: 'translateZ(-50px) rotateY(-90deg)',
  },
  '33%': {
    transform: 'translateZ(-50px) rotateY(-180deg)',
  },
  '50%': {
    transform: 'translateZ(-50px) rotateY(90deg)',
  },
  '66%': {
    transform: 'translateZ(-50px) rotateX(-90deg)',
  },
  '83%': {
    transform: 'translateZ(-50px) rotateX(90deg)',
  },
})

const cubeface = {
  border: '1px solid #ccc',
  boxShadow: '0 0 20px 10px lightyellow',
  background: 'rgba(255, 255, 255, 0.2)',
  position: 'absolute',
  width: '100px',
  height: '100px',
}

const POSITION = [
  {
    transform: 'rotateY(0deg) translateZ(50px)',
    src: D3,
    alt: 'three front',
  },
  {
    transform: 'rotateY(180deg) translateZ(50px)',
    src: D4,
    alt: 'four back',
  },
  {
    transform: 'rotateY(90deg) translateZ(50px)',
    src: D5,
    alt: 'five right',
  },
  {
    transform: 'rotateY(-90deg) translateZ(50px)',
    src: D2,
    alt: 'two left',
  },
  { transform: 'rotateX(90deg) translateZ(50px)', src: D1, alt: 'one top' },
  {
    transform: 'rotateX(-90deg) translateZ(50px)',
    src: D6,
    alt: 'six bottom',
  },
]

const Cube = ({ executeScroll }) => {
  return (
    <Box
      // scene
      sx={{
        height: '100px',
        width: '100px',
        perspective: '400px',
      }}
    >
      <Box
        // cube
        onClick={executeScroll}
        sx={{
          width: '100px',
          height: '100px',
          position: 'relative',
          transformStyle: 'preserve-3d',
          animation: `${spincube} 24s ease-in-out infinite`,
        }}
      >
        {POSITION.map((spot, index) => (
          <Card
            key={index}
            square
            sx={{
              transform: `${spot.transform}`,
              background: cubeface.background,
              position: cubeface.position,
              width: cubeface.width,
              height: cubeface.height,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backfaceVisibility: 'hidden',
            }}
          >
            <CardMedia
              component="img"
              src={spot.src}
              alt={spot.alt}
              sx={{
                width: '100%',
                height: 'auto',
              }}
            />
          </Card>
        ))}
      </Box>
    </Box>
  )
}

export default Cube
