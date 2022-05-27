import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
// icons
import GitHubIcon from '@mui/icons-material/GitHub'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
// project images
import DiceRed from '../assets/images/covers/diceflex.jpg'
import TableGames from '../assets/images/covers/gametable.jpg'
import HighCard from '../assets/images/covers/highlow.jpg'
import DicePoker from '../assets/images/covers/pokerdice.jpg'
import Sienar from '../assets/images/covers/sienar.jpg'
import Xwing from '../assets/images/covers/xwing.jpg'
import DsOne from '../assets/images/covers/dsone.jpg'
import TeslaRed from '../assets/images/covers/teslaclone.jpg'
import Swapi from '../assets/images/covers/swapinext.jpg'
// import ScrollButton from './ScrollButton'

const MYALBUM = [
  {
    href: 'https://diceflex.netlify.app/',
    code: 'https://github.com/Sauce101/dice-flex',
    image: DiceRed,
    title: 'Dice Flex',
    about:
      'Flexbox practice with animation and rotation building dice with craps table background. Built with React.js and MUI 5.',
  },
  {
    href: 'https://gametables.netlify.app/',
    code: 'https://github.com/Sauce101/game-table',
    image: TableGames,
    title: 'Table Games',
    about:
      'React Router 6 practice with animation and rotation building dice and cards. Built with React.js and MUI 5.',
  },
  {
    href: 'https://pokerdice.netlify.app/',
    code: 'https://github.com/Sauce101/poker-dice',
    image: DicePoker,
    title: 'Poker Dice',
    about:
      'Grid practice with animation and rotation building poker dice with an svg per side. Built with React.js and MUI 5.',
  },
  {
    href: 'https://highcard.netlify.app/',
    code: 'https://github.com/Sauce101/high-card',
    image: HighCard,
    title: 'High Card',
    about:
      'Builds a 52 card deck, shuffles, cuts and flips the cards until all cards are delt. Then a fresh deck with different color back is used. React.js & MUI 5',
  },
  {
    href: 'https://sienar.netlify.app/',
    code: 'https://github.com/Sauce101/sienar',
    image: Sienar,
    title: 'Sienar Fleet Systems',
    about:
      'Sienar Fleet Systems starship manufacturer, best known for their TIE line. Many starships to choose from. Built with Gatsby.js & MUI 5.',
  },
  {
    href: 'https://xwing-sauce.netlify.app/',
    code: 'https://github.com/Sauce101/xwing-sauce',
    image: Xwing,
    title: 'X-wing',
    about:
      'A fan site written in Gatsby.js showcasing the X-wing starfighter from the original movies. The site is installable.',
  },
  {
    href: 'https://ds1.netlify.app/',
    code: 'https://github.com/Sauce101/star-styled',
    image: DsOne,
    title: 'DS-1',
    about:
      'A fan site written in React.js and Styled-Components showcasing the Death Star from the original movies.',
  },
  {
    href: 'https://teslatwo.netlify.app/',
    code: 'https://github.com/Sauce101/tesla-clone-react',
    image: TeslaRed,
    title: 'Tesla Clone',
    about:
      'My second Tesla clone site, built with React and styled components. This is from a tutorial I modified.',
  },
  {
    href: 'https://swapi-next.vercel.app/',
    code: 'https://github.com/Sauce101/swapi-next',
    image: Swapi,
    title: 'SW-API',
    about:
      'My first build utilizing an API that has a Star Wars theme. This is a wiki like site with Galactic Basic to English language translation. Built with Next.js',
  },
]

const Projects = () => {
  return (
    <>
      {MYALBUM.map((proj, index) => (
        <Card
          key={index}
          sx={{
            // flex: { sm: '40%', lg: '25%' },
            maxWidth: { xs: '90%', sm: '40%', lg: '25%' },
            // border: daytime ? '4px solid white' : '4px solid black',
            border: '2px solid white',
            position: 'relative',
          }}
          square
          elevation={8}
        >
          <CardMedia
            component="img"
            image={proj.image}
            sx={{
              aspectRatio: '16 / 9',
            }}
          />
          <CardContent sx={{ mb: 6 }}>
            <Typography gutterBottom variant="h5" component="div">
              {proj.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {proj.about}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              component={Link}
              href={proj.href}
              underline="none"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              startIcon={<OpenInNewIcon />}
              size="small"
              sx={{ position: 'absolute', left: 12, bottom: 8 }}
            >
              Open
            </Button>
            <Button
              color="secondary"
              component={Link}
              href={proj.code}
              underline="none"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              startIcon={<GitHubIcon />}
              size="small"
              sx={{ position: 'absolute', right: 12, bottom: 8 }}
            >
              Code
            </Button>
          </CardActions>
        </Card>
      ))}
      {/* <ScrollButton sx={{ justifyContent: 'flex-end' }} /> */}
    </>
  )
}

export default Projects
