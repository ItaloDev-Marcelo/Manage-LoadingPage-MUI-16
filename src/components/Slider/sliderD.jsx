import { Stack, Typography, Box} from "@mui/material";
import slideDt from './slideData'
import ButtonItem from "../Button/Button";

export default function sliderDesk() {

  const SlideData = slideDt;
  
  return (
    <Stack component='section' display='flex'  >
       <Typography component='h4' className='headerTitle' fontSize='3em' position='relative' top='1.5em' marginLeft='-3.5em' textAlign='center'>What they’ve said</Typography>
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
        <Box sx={{position: 'relative' ,top:'1.5em', marginLeft: '-5.5em',  textAlign:'center'}}>
        <ButtonItem text='Get Started' color='white' bg='orange' />
        </Box>
    </Stack>
  )
}
