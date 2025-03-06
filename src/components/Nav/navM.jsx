import { AppBar, Button, IconButton, Paper, Stack, Box} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Logo from '../../assets/images/logo.svg'
import { useState } from "react";
export default function navDesk() {

  const [toggleMenu, setToggleMenu] = useState(false); 

  return (
  <>
       <AppBar color="#fff" sx={{boxShadow: 'none'}} >
         <Stack sx={{display: {
        xs: 'flex',
        md: 'none'
    }, flexDirection: 'row', justifyContent: 'space-between', padding: '.5em', alignContent: 'center'}}>

         <Button variant="text">
             <img src={Logo} alt="" width={'90%'} />
         </Button>

         <Button onClick={() => setToggleMenu(!toggleMenu)} variant="text" className="menu-icon">
           {toggleMenu ?<IconButton> <CloseIcon fontSize="large" /></IconButton> : <IconButton><MenuIcon fontSize="large" /></IconButton> }
         </Button>
         </Stack>

    </AppBar>
  
    <Paper id='shadow' sx={{display:toggleMenu ? 'block': 'none' , padding: '1em', position: 'absolute', top: '8em', left: '1.5em', width: '87%'}}  >
      <Stack spacing={2} >
         <Button variant="text" sx={{color: 'blue', textTransform: 'capitalize','&:hover': {
            color: 'red',
            border: 'none'
         }}}>Pricing</Button>
         <Button variant="text"  sx={{color: 'blue',textTransform: 'capitalize', '&:hover': {
            color: 'red',
            border: 'none'
         }}}>Product</Button>
         <Button variant="text"  sx={{color: 'blue',textTransform: 'capitalize', '&:hover': {
            color: 'red',
            border: 'none'
         }}}>About us</Button>
         <Button variant="text"  sx={{color: 'blue',textTransform: 'capitalize', '&:hover': {
            color: 'red',
            border: 'none'
         }}}>Carrers</Button>
         <Button variant="text"  sx={{color: 'blue',textTransform: 'capitalize', '&:hover': {
            color: 'red',
            border: 'none'
         }}}>Community</Button>
      </Stack>
    </Paper>
  </>
  )
}
