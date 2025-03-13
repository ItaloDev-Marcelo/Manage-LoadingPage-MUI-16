import { Stack, Typography, Box} from "@mui/material";
import slideDt from './slideData'
import ButtonItem from "../Button/Button";

export default function sliderDesk() {

  const SlideData = slideDt;
  
  return (
    <Stack className="slider-container" component='section' display='flex' justifyContent='center' alignContent='center' textAlign='center' alignItems='center'  >
       <Typography component='h4' position='relative' top='1em' left='-1.5em' className='headerTitle' fontSize='3em'  >What they’ve said</Typography>
        <Stack className="carrousel">
        <Stack  className="carrousel-container" display='flex' flexDirection='row'>
        {
          SlideData.map(({profilePhoto, name, info}) => {
              return (
                     <Stack component='article' className='CardD' >
                                 <Box className='profile-information-area-D'>
                                    <Box className='profile-photo-D'>
                                    <img src={profilePhoto} alt={name} />
                                    </Box>
                                    <Typography component='p' className='profile-name-D'>{name}</Typography>
                                 </Box>
                                 <Box className='information-box'>
                                 <Typography component='p' className='information-D'>{info}</Typography>
                                 </Box>
                                
                      </Stack>
              )
          })
        }
      
        </Stack>
        </Stack>
        <Stack position='relative' top='1em' left='-5em'  minWidth='200px' >
        <ButtonItem text='Get Started'  color='white' bg='orange' />
        </Stack>
    </Stack>
  )
}
