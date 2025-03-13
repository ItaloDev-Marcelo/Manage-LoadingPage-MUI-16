import {Stack, Typography, Box, Button} from '@mui/material';
import ButtonItem from '../components/Button/Button';

export default function MiddlePage() {
  return (
    <Stack component='section' id='MiddlePage' height={{xs: '250px', md: '200px'}} margin='7em 0 0 0' maxWidth='100%' backgroundColor='hsl(12, 88%, 59%)' display='flex' textAlign={{xs: 'center', md: 'left'}} flexDirection={{xs: 'column', md: 'row'}} alignItems='center' alignContent='center' padding={{md: '0 10em'}} justifyContent={{xs: 'center', md: 'space-between'}} >
           <Box>   <Typography maxWidth={{xs:'250px' , md: '400px'}} color='white'  component='h5' fontWeight='700' marginBottom='.5em' fontSize='2.3em'>Simplify how your team works today.</Typography></Box>
           <Box sx={{position: 'relative', left: {md: '7em'}, width: '300px'}} > 
              <Button className='middle-Btn' sx={{color: 'hsl(12, 88%, 59%)', fontWeight: '700', width: '170px', height: '45px' ,textTransform: 'capitalize', backgroundColor: 'white', borderRadius: '25px'}}>Get Started</Button>
          </Box>
    </Stack>
  )
}
