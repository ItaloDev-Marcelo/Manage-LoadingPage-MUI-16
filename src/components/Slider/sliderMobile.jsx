import { Stack, Typography} from "@mui/material";
import slideDt from './slideData'
import ButtonItem from "../Button/Button";

export default function sliderMobile() {

  const SlideData = slideDt;
  
  return (
    <Stack component='section' >
       <Typography component='h4' className='headerTitle'>What they’ve said</Typography>
        <Stack display={flex} spacing={4}>
        {
          SlideData.map(({profilePhoto, name, info}) => {
              return (
                     <Stack component='article' className='slideD' display={navItem === 'card0' ? 'flex' : 'none'}>
                                 <Box className='profile-information-area'>
                                    <Box className='profile-photo'>
                                    <img src={profilePhoto} alt={name} />
                                    </Box>
                                    <Typography component='p' className='profile-name'>{name}</Typography>
                                 </Box>
                                 <Typography component='p' className='information'>{info}</Typography>
                      </Stack>
              )
          })
        }
        <ButtonItem text='Get Started' color='white' bg='orange' />
        </Stack>
    </Stack>
  )
}
