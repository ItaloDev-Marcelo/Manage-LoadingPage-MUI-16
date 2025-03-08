import { Stack, Typography } from '@mui/material'

export default function Card({level, levelTitle, textInfo}) {
  return (
    <Stack component='article'>
        <Box className='line'>
           <Box className='num-box' sx={{width: {xs: '75px', md: '100px'}, padding: '1em', color: 'orange', color: 'white'}} ><Typography component='strong'>{level}</Typography></Box>
           <Typography component='h3' fontSize={{xs: '1.2em', lg: '1.5em'}} >{levelTitle}</Typography>
        </Box>
        <Typography component='p' >{textInfo}</Typography>
    </Stack>
  )
}
