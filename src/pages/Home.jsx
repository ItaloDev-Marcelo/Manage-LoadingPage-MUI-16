import { Stack, Box, Typography } from '@mui/material'
import React from 'react'
import HomeBanner from '../assets/images/illustration-intro.svg'
import ButtonItem from '../components/Button/Button'

export default function Home() {
  return (
    <Stack component='section' position='relative' className='Home-section' sx={{display: 'flex', flexDirection: {
        xs: 'column',
        lg: 'row'
    }, justifyContent: 'center', textAlign: 'center'}}>
       <Box className='container-home-image' >
         <img src={HomeBanner} alt=''  />
       </Box>
       <Box component='div'className='info-box' sx={{marginTop: {
        xs: '-1em',
        md: '3em'
       }}}>
          <Typography component='h1' padding='0 2em' fontSize='2.1em' fontWeight={700}>Bring everyone together to build better products.</Typography>
          <Typography component='p' padding='1.4em 3.4em'> Manage makes it simple for software teams to plan day-to-day 
          tasks while keeping the larger team goals in view.</Typography>
          <ButtonItem text='Get Started' color={'white'} bg='orange' />
       </Box>
    </Stack>
  )
}
