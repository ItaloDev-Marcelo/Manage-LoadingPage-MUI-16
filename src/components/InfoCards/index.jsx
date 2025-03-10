import { Stack, Typography, Box } from '@mui/material'

export default function Card({level, levelTitle, textInfo}) {
  return (
    <Stack component='article' margin='1.7em 0'>
        <Box className='line' sx={{display: 'flex', alignItems: 'center', zIndex: '12', width: {xs: '100%'}, position: 'relative',
      left: {xs: '1em', md: '0'},  background: {xs: 'hsl(13, 100%, 96%)', md: 'trasparent'}, borderRadius: {xs: '40px 0 0 40px', md: '0'}}} >
           <Box className='num-box' sx={{width: {xs: '60px', md: '100px'}, padding: '.4em', marginRight: '1em',borderRadius: '45px',  background: 'hsl(12, 88%, 59%)', color: 'white', textAlign: 'center'}} >
            <Typography component='strong' fontWeight='700'>{level}</Typography></Box>
           <Typography  component='h3' className='level-text' fontSize={{xs: '1em', lg: '1.5em'}} fontWeight='600' >{levelTitle}</Typography>
        </Box>
        <Stack maxWidth='365px' paddingLeft='.1em'>
        <Typography margin='1em 0 .7em 0 ' paddingLeft={3} component='p' >{textInfo}</Typography>
        </Stack>
    </Stack>
  )
}
