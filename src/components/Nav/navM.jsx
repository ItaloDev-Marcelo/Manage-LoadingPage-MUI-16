import { AppBar, Button, IconButton, Paper, Stack, Box} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Logo from '../../assets/images/logo.svg'
import { useState } from "react";
export default function navDesk() {

  const [toggleMenu, setToggleMenu] = useState(false); 

 
  return (
  <>
       <AppBar id='navMobile' sx={{boxShadow: 'none'}} color='inherit' >
         <Stack sx={{display: {
        xs: 'flex',
        lg: 'none'
    }, flexDirection: 'row',  justifyContent: 'space-between', padding: '.5em', alignContent: 'center'}}>

         <Button variant="text">
             <img src={Logo} alt="" width={'90%'} />
         </Button>

         <Button onClick={() => setToggleMenu(!toggleMenu)} variant="text" className="menu-icon">
           {toggleMenu ?<IconButton> <CloseIcon fontSize="large" /></IconButton> : <IconButton><MenuIcon fontSize="large" /></IconButton> }
         </Button>
         </Stack>

    </AppBar>
  
    <Paper id='shadow'   sx={{display:toggleMenu ? 'block': 'none' ,boxShadow: '0px 75px 70px rgba(0,0,0,0.3)'
, padding: '1em', position: 'absolute', top: '8em', left: '1.5em', width: '87%',zIndex: '1000' }}  >
      <Stack spacing={2} >
         <Button variant="text"sx={{  color: ' hsl(228, 39%, 23%)',textTransform: 'capitalize', '&:hover': {
            color: ' hsl(227, 12%, 61%)',
            border: 'none',
            background: 'none'
         }}}>Pricing</Button>
         <Button variant="text"  sx={{color: ' hsl(228, 39%, 23%)',textTransform: 'capitalize', '&:hover': {
            color: ' hsl(227, 12%, 61%)',
            border: 'none',
            background: 'none'
         }}}>Product</Button>
         <Button variant="text"  sx={{color: ' hsl(228, 39%, 23%)',textTransform: 'capitalize', '&:hover': {
            color: ' hsl(227, 12%, 61%)',
            border: 'none',
            background: 'none'
         }}}>About us</Button>
         <Button variant="text" sx={{color: ' hsl(228, 39%, 23%)',textTransform: 'capitalize', '&:hover': {
            color: ' hsl(227, 12%, 61%)',
            border: 'none',
            background: 'none'
         }}}>Carrers</Button>
         <Button variant="text" sx={{color: ' hsl(228, 39%, 23%)',textTransform: 'capitalize', '&:hover': {
            color: ' hsl(227, 12%, 61%)',
            border: 'none',
            background: 'none'
         }}}>Community</Button>
      </Stack>
    </Paper>
   
  </>
  )
}
