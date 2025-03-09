import { Stack, Typography, Box } from '@mui/material'

export default function Card({level, levelTitle, textInfo}) {
  return (
    <Stack component='article' margin='1.7em 0'>
        <Box className='line' sx={{display: 'flex', alignItems: 'center'}} >
           <Box className='num-box' sx={{width: {xs: '50px', md: '100px'}, padding: '.4em', marginRight: '1em',borderRadius: '45px', background: 'orange', color: 'white', textAlign: 'center'}} >
            <Typography component='strong' fontWeight='700'>{level}</Typography></Box>
           <Typography  component='h3' className='level-text' fontSize={{xs: '1em', lg: '1.5em'}} fontWeight='600' >{levelTitle}</Typography>
        </Box>
        <Typography margin='.7em 0' component='p' >{textInfo}</Typography>
    </Stack>
  )
}
