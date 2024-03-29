import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import Chip from '@mui/material/Chip'
// icons
import GitHubIcon from '@mui/icons-material/GitHub'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
// project images
import SkyRed from '../assets/images/covers/skyred-cover.webp'
import CardsRedux from '../assets/images/covers/cardsRedux.webp'
// import BlackJack from '../assets/images/covers/blackjack.jpg'
// import VideoPoker from '../assets/images/covers/videoPoker.jpg'
import SlotSauce from '../assets/images/covers/slot-sauce.webp'
import BountyHunters from '../assets/images/covers/bounty-hunters.webp'
// import DiceRed from '../assets/images/covers/diceflex.jpg'
// import TableGames from '../assets/images/covers/gametable.jpg'
import HighCard from '../assets/images/covers/highlow.jpg'
// import DicePoker from '../assets/images/covers/pokerdice.jpg'
import Sienar from '../assets/images/covers/sienar.jpg'
// import Xwing from '../assets/images/covers/xwing.jpg'
// import DsOne from '../assets/images/covers/dsone.jpg'
// import TeslaRed from '../assets/images/covers/teslaclone.jpg'
// import Swapi from '../assets/images/covers/swapinext.jpg'

const MYALBUM = [
  {
    href: 'https://www.skyredpro2023.com/',
    code: 'https://github.com/squarespace',
    image: SkyRed,
    alt: 'sky red productions',
    title: 'SkyRed Productions',
    about:
      'A business with over 20 years of photography and video production experience. Real estate and photobooth. Constructed with Squarespace web builder. ',
  },
  {
    href: 'https://cardsredux.netlify.app/',
    code: 'https://github.com/Sauce101/cards-redux',
    image: CardsRedux,
    alt: 'cards redux',
    title: 'Cards Redux',
    about:
      'A React deck of cards API website you can install on mobile devices. This app uses Redux Toolkit and React Router to combine two games, blackjack and video poker.',
  },
  // {
  //   href: 'https://blackjacksauce.netlify.app/',
  //   code: 'https://github.com/Sauce101/blackjack-react',
  //   image: BlackJack,
  //   alt: 'blackjack',
  //   title: 'Blackjack',
  //   about:
  //     'My take on Blackjack with deck of cards api and automatic ace calculation. Made with my React Tailwind starter template in Typescript.',
  // },
  // {
  //   href: 'https://videopokerapi.netlify.app/',
  //   code: 'https://github.com/Sauce101/video-poker',
  //   image: VideoPoker,
  //   alt: 'video poker',
  //   title: 'Video Poker Api',
  //   about:
  //     'Video Poker App with api calls to a deck of cards. Vite React framework with Redux Toolkit in Typescript.',
  // },
  {
    href: 'https://bountyhunters.netlify.app/',
    code: 'https://github.com/Sauce101/bounty-hunters',
    image: BountyHunters,
    alt: 'bounty hunters',
    title: 'Bounty Hunters',
    about:
      'Tailwind CSS practice with React PWA, ESLint, Prettier and Husky. I used an Empire Strikes Back bounty hunter theme.',
  },
  {
    href: 'https://slotsauce.netlify.app/',
    code: 'https://github.com/Sauce101/slot-sauce',
    image: SlotSauce,
    alt: 'slot sauce',
    title: 'Slot Machine',
    about:
      'A responsive slot machine app with adjustable reels. Made with React and a touch of Tailwind.',
  },
  // {
  //   href: 'https://diceflex.netlify.app/',
  //   code: 'https://github.com/Sauce101/dice-flex',
  //   image: DiceRed,
  //   alt: 'red dice',
  //   title: 'Dice Casino',
  //   about:
  //     'Flexbox practice with animation and rotation building dice with craps table background. Built with React.js and MUI 5.',
  // },
  // {
  //   href: 'https://gametables.netlify.app/',
  //   code: 'https://github.com/Sauce101/game-table',
  //   image: TableGames,
  //   alt: 'table games',
  //   title: 'Table Games',
  //   about:
  //     'React Router 6 practice with animation and rotation building dice and cards. React.js & MUI 5.',
  // },
  // {
  //   href: 'https://pokerdice.netlify.app/',
  //   code: 'https://github.com/Sauce101/poker-dice',
  //   image: DicePoker,
  //   alt: 'poker dice',
  //   title: 'Poker Dice',
  //   about:
  //     'Grid practice with animation and rotation building poker dice with an svg per side. Built with React.js & MUI 5.',
  // },
  {
    href: 'https://highcard.netlify.app/',
    code: 'https://github.com/Sauce101/high-card',
    image: HighCard,
    alt: 'high card',
    title: 'High Card',
    about:
      'Builds a 52 card deck, shuffles, cuts and flips the cards until all cards are delt. Then a fresh deck with different color back is used. React.js & MUI 5',
  },
  {
    href: 'https://sienar.netlify.app/',
    code: 'https://github.com/Sauce101/sienar',
    image: Sienar,
    alt: 'sienar',
    title: 'Sienar Fleet Systems',
    about:
      'Sienar Fleet Systems starship manufacturer, best known for their TIE line. Many starships to choose from. Built with Gatsby.js & MUI 5.',
  },
  // {
  //   href: 'https://xwing-sauce.netlify.app/',
  //   code: 'https://github.com/Sauce101/xwing-sauce',
  //   image: Xwing,
  //   alt: 'x-wing',
  //   title: 'X-wing',
  //   about:
  //     'A fan site written in Gatsby.js showcasing the X-wing starfighter from the original movies complete with trench run countdown video.',
  // },
  // {
  //   href: 'https://ds1.netlify.app/',
  //   code: 'https://github.com/Sauce101/star-styled',
  //   image: DsOne,
  //   alt: 'death star one',
  //   title: 'DS-1',
  //   about:
  //     'A fan site written in React.js and Styled-Components showcasing the Death Star from the original movies.',
  // },
  // {
  //   href: 'https://teslatwo.netlify.app/',
  //   code: 'https://github.com/Sauce101/tesla-clone-react',
  //   image: TeslaRed,
  //   alt: 'tesla clone',
  //   title: 'Tesla Clone',
  //   about:
  //     'My second Tesla clone site, built with React and styled components. This is from a tutorial I modified.',
  // },
  // {
  //   href: 'https://swapi-next.vercel.app/',
  //   code: 'https://github.com/Sauce101/swapi-next',
  //   image: Swapi,
  //   alt: 'swapi',
  //   title: 'SW-API',
  //   about:
  //     'My first build utilizing an API that has a Star Wars theme. This is a wiki like site with Galactic Basic to English language translation. Built with Next.js',
  // },
]

const Projects = () => {
  return (
    <>
      {MYALBUM.map((proj, index) => (
        <Card
          key={index}
          sx={{
            maxWidth: { xs: '90%', sm: '40%', lg: '25%' },
            border: '2px solid white',
            position: 'relative',
          }}
          square
          elevation={8}
        >
          <CardMedia
            component="img"
            alt={proj.alt}
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
            <Chip
              color="primary"
              component={Link}
              href={proj.href}
              underline="none"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              icon={<OpenInNewIcon />}
              label="Open"
              sx={{
                position: 'absolute',
                left: 16,
                bottom: 12,
              }}
            />
            <Chip
              color="secondary"
              component={Link}
              href={proj.code}
              underline="none"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              icon={<GitHubIcon />}
              label="Code"
              sx={{
                position: 'absolute',
                right: 16,
                bottom: 12,
                // bgcolor: grey[900],
              }}
            />
          </CardActions>
        </Card>
      ))}
    </>
  )
}

export default Projects
