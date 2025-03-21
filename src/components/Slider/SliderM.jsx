import Img1 from '../../assets/images/avatar-anisha.png';
import Img2 from '../../assets/images/avatar-ali.png';
import Img3 from '../../assets/images/avatar-richard.png';
import Img4 from '../../assets/images/avatar-shanai.png';
import ButtonItem from "../Button/Button";
import { Stack, Typography, Box } from "@mui/material";
import { useState } from 'react';


export default function sliderMobile() {
  const [navItem, setNavItem] = useState('card0');
  return (
    <Stack className="slider-container" component='section' padding='1em 2em' alignSelf='center' >
       <Typography component='h4' className='headerTitle' m='2em 0 2em 0' textAlign='center' fontWeight='600' fontSize={{xs: '2em', lg: '3em'}}>What they’ve said</Typography>
        <Stack className='slider-container'>
           <Stack component='article' className='card' display={navItem === 'card0' ? 'flex' : 'none'}>
              <Box className='profile-information-area'>
                 <Box className='profile-photo'>
                 <img src={Img1} alt='Anisha Li'   />
                 </Box>
                 <Typography component='p' className='profile-name'>Anisha Li</Typography>
              </Box>
              <Typography component='p' className='information' padding='0 3em 2em 3em'> “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”</Typography>
           </Stack>
           <Stack component='article' className='card' display={navItem === 'card1' ? 'flex' : 'none'}>
              <Box className='profile-information-area'>
                 <Box className='profile-photo'>
                 <img src={Img2} alt='Ali Bravo' />
                 </Box>
                 <Typography component='p' className='profile-name'>Ali Bravo</Typography>
              </Box>
              <Typography component='p' className='information'>“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”</Typography>
           </Stack>
           <Stack component='article' className='card' display={navItem === 'card2' ? 'flex' : 'none'}>
              <Box className='profile-information-area'>
                 <Box className='profile-photo'>
                 <img src={Img3} alt='Richard Watts' />
                 </Box>
                 <Typography component='p' className='profile-name'>Richard Watts</Typography>
              </Box>
              <Typography component='p' className='information'>“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”</Typography>
           </Stack>
           <Stack component='article' className='card' display={navItem === 'card3' ? 'flex' : 'none'}>
              <Box className='profile-information-area'>
                 <Box className='profile-photo'>
                 <img src={Img4} alt='Shanai Gough' />
                 </Box>
                 <Typography component='p' className='profile-name'>Shanai Gough</Typography>
              </Box>
              <Typography component='p' className='information'>“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”</Typography>
           </Stack>
           <Stack display='flex' position='relative' top='-1.5em' flexDirection='row' justifyContent='center'>
              <Box className={navItem === 'card0' ? 'bullet active' : 'bullet'} onClick={()  => setNavItem('card0')}></Box>
              <Box className={navItem === 'card1' ? 'bullet active' : 'bullet'}  onClick={()  => setNavItem('card1')}></Box>
              <Box className={navItem === 'card2' ? 'bullet active' : 'bullet'}  onClick={()  => setNavItem('card2')}></Box>
              <Box className={navItem === 'card3' ? 'bullet active' : 'bullet'}  onClick={()  => setNavItem('card3')}></Box>
           </Stack>
        </Stack>
        
        <Stack component='div' width='200px' alignSelf='center' >
        <ButtonItem  text='Get Started' color='white' bg='orange' />
        </Stack>
    </Stack>
  )
}
