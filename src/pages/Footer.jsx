import {Stack, Typography, Box, IconButton} from '@mui/material'
import Grid from '@mui/material/Grid2';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import FooterIcon from '../assets/images/logoD.svg'

export default function Footer() {
  return (
    <Stack bgcolor='hsl(233, 12%, 13%)' color='white' padding='1em 2em' textAlign='center' >
         <Grid container >
              <Grid size={{xs: 12, md: 4}} sx={{order: {xs: 1, md: 3}}} >
                 <Stack >
                     <Box sx={{margin: '1.2em 0'}}>
                     <label></label>
                    <input type='text' name='email' placeholder='Updates in your inbox...'/>
                    <input type='button' name='submit' value='Ok'/>
                     </Box>
                     <Box>
                        <Typography component='p' display={{xs: 'none', md: 'block'}}>Copyright 2020. All Rights Reserved</Typography>
                     </Box>
                 </Stack>
              </Grid>
              <Grid size={{xs: 12, md: 4}}  sx={{order: {xs: 2, md: 2}}}  >
                 <Stack display='flex' flexDirection='row' >

                       <List>
                          <ListItem>Home</ListItem>
                          <ListItem>Pricing</ListItem>
                          <ListItem>Products</ListItem>
                          <ListItem>About Us</ListItem>
                       </List>
                    
                       <List sx={{paddingLeft: '5em'}} >
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
                           <Box>
                             <IconButton>
                                <FacebookIcon fontSize='large'/>
                             </IconButton>
                           </Box>
                           <Box>
                             <IconButton>
                                 <YouTubeIcon  fontSize='large'/>
                             </IconButton>
                           </Box>
                           <Box>
                             <IconButton>
                                 <TwitterIcon  fontSize='large'/>
                             </IconButton>
                           </Box>
                           <Box>
                             <IconButton>
                                <PinterestIcon  fontSize='large'/>
                             </IconButton>
                           </Box>
                           <Box>
                             <IconButton>
                                 <InstagramIcon  fontSize='large'/>
                             </IconButton>
                           </Box>
                           </Stack>
                           <IconButton>
                               <img src={FooterIcon} alt=''/>
                           </IconButton>
                      </Stack>
                      <Box sx={{margin:'1.2em 0'}} >
                        <Typography component='p' display={{xs: 'block', md: 'none'}}>Copyright 2020. All Rights Reserved</Typography>
                     </Box>
                 </Stack>
              </Grid>
         </Grid>
    </Stack>
  )
}
