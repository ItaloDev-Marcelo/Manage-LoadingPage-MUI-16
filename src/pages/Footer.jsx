import {Stack, Typography, Box, IconButton} from '@mui/material'
import Grid from '@mui/material/Grid2';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '../assets/images/icon-youtube.svg';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import FooterIcon from '../assets/images/logoD.svg'
import { useState } from 'react';

export default function Footer() {

   const [email, setEmail] = useState('');
   const [error, setError] = useState(true)


   function submitForm() {
      const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i
      if(regex.test(email)){
         setError(prev => !prev)
      }else {
         setError(false)
         setTimeout(() => {
            setError(prev => !prev)
         }, 1000) 
      }
   }

  return (
    <Stack id='footer' bgcolor='hsl(233, 12%, 13%)' color='white' padding={{xs: '1.5em 2em', md: '2.5em 5em 0 1em'}} textAlign='center' >
         <Grid container >
              <Grid size={{xs: 12, md: 4}} sx={{order: {xs: 1, md: 3}}} >
                 <Stack id='email-area' textAlign={{xs: 'center', md: 'left'}}  >
                     <Box sx={{margin: '1.2em 0', }}>
                     <label htmlFor='email'>
                     <input type='text' id='email' className={!error ? 'email error' : 'email'} name='email' onKeyDown={(e) => setEmail(e.target.value)} placeholder='Updates in your inbox...'/>
                     </label>
                    <input type='button' name='submit' value='Go' onClick={submitForm} />
                    <Typography component='p' mt='1em' className={!error ? 'text error' : 'text'}>Please insert a valid email</Typography >
                     </Box>
                     <Box sx={{position: 'relative', top: {md: '1em'}}}>
                        <Typography component='p' display={{xs: 'none', md: 'block'}}>Copyright 2020. All Rights Reserved</Typography>
                     </Box>
                 </Stack>
              </Grid>
              <Grid size={{xs: 12, md: 4}}  sx={{order: {xs: 2, md: 2}}}  >
                 <Stack display='flex' flexDirection='row' justifyContent='center' >

                       <List>
                          <ListItem>Home</ListItem>
                          <ListItem>Pricing</ListItem>
                          <ListItem>Products</ListItem>
                          <ListItem>About Us</ListItem>
                       </List>
                    
                       <List sx={{paddingLeft: {xs:  '5em', md: '7em'}}} >
                          <ListItem>Carrers</ListItem>
                          <ListItem>Community</ListItem>
                          <ListItem>Privacy Policy</ListItem>
                       </List>
                    
                 </Stack>
              </Grid>
              <Grid size={{xs: 12, md: 4}}  sx={{order: {xs: 3, md: 1}}}>
                 <Stack display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                      <Stack >
                           <Stack display='flex' margin='1.2em 0' flexDirection='row'>
                           <Box >
                             <IconButton className='icon' >
                                <FacebookIcon fontSize='large'/>
                             </IconButton>
                           </Box>
                           <Box >
                             <IconButton className='icon'>
                                 <img src={YouTubeIcon}  alt='' width='30px' />
                             </IconButton>
                           </Box>
                           <Box>
                             <IconButton className='icon'>
                                 <TwitterIcon  fontSize='large'/>
                             </IconButton>
                           </Box>
                           <Box>
                             <IconButton className='icon'>
                                <PinterestIcon  fontSize='large'/>
                             </IconButton>
                           </Box>
                           <Box>
                             <IconButton className='icon'>
                                 <InstagramIcon  fontSize='large'/>
                             </IconButton>
                           </Box>
                           </Stack>
                           <IconButton sx={{position: 'relative', left: {md: '-1.7em'}, top: {md: '1em'}}}>
                               <img src={FooterIcon} alt=''/>
                           </IconButton>
                      </Stack>
                      <Box sx={{margin:'2em 0'}} >
                        <Typography component='p' paddingTop={{md: '3em'}} display={{xs: 'block', md: 'none'}}>Copyright 2020. All Rights Reserved</Typography>
                     </Box>
                 </Stack>
              </Grid>
         </Grid>
    </Stack>
  )
}
