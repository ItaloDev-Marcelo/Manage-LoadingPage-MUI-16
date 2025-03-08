import { Stack, Box, Typography } from '@mui/material'
import React from 'react'
import HomeBanner from '../assets/images/illustration-intro.svg'
import ButtonItem from '../components/Button/Button'

export default function Home() {
  return (
    <Stack component='section' position='relative' className='Home-section' sx={{display: 'flex', flexDirection: {
        xs: 'column',
        lg: 'row-reverse'
    }, justifyContent: {
      xs:'center',
      lg: 'space-between' 
    }, textAlign: {
      xs: 'center',
      lg: 'left'
    }, alignContent:'center',padding: {
      xs: '0',
      lg: '2em 7em '
    }  }}>
       <Box className='container-home-image' >
         <img src={HomeBanner} alt=''  />
       </Box>
       <Box component='div'className='info-box' sx={{marginTop: {
        xs: '0',
        md: '3em'
       }, position: 'relative', top:{xs: '2em', lg: '0'}}}>
          <Typography component='h1' padding={{xs: '0 2em', lg: '0'}} fontSize={{xs: '2.1em', lg: '3.5em'}} fontWeight={700}>Bring everyone together to build better products.</Typography>
          <Typography component='p' padding={{xs: '1.4em 3.4em', lg: '1em 0'}}> Manage makes it simple for software teams to plan day-to-day 
          tasks while keeping the larger team goals in view.</Typography>
          <ButtonItem text='Get Started' color={'white'} bg='orange' />
       </Box>
    </Stack>
  )
}
