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

export default function Footer() {
  return (
    <Stack bgcolor='hsl(233, 12%, 13%)' color='white' padding={{xs: '1.5em 2em', md: '2.5em 5em 0 1em'}} textAlign='center' >
         <Grid container >
              <Grid size={{xs: 12, md: 4}} sx={{order: {xs: 1, md: 3}}} >
                 <Stack  >
                     <Box sx={{margin: '1.2em 0'}}>
                     <label></label>
                    <input type='text' name='email' placeholder='Updates in your inbox...'/>
                    <input type='button' name='submit' value='Ok'  />
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
