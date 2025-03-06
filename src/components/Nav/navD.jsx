import { AppBar, Button, Toolbar, Stack} from "@mui/material";
import Logo from '../../assets/images/logo.svg';
import ButtonItem from "../Button/Button";

export default function navMobile() {

  return (
    <AppBar color="#fff"sx={{display:'flex', justifyContent: 'space-between', boxShadow: 'none',alignContent: 'center', padding: '1em 10em'}} >
       <Stack sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:   'center'}}>
       <Button>
            <img src={Logo} alt="" />
        </Button>
        <Toolbar sx={{display:'flex', marginLeft: '-2.2em'}} >
        <Button variant="text" sx={{color: 'blue',textTransform: 'capitalize', '&:hover': {
            color: 'red',
            border: 'none'
         }}}>Pricing</Button>
         <Button variant="text"  sx={{color: 'blue',textTransform: 'capitalize', '&:hover': {
            color: 'red',
            border: 'none'
         }}}>Product</Button>
         <Button variant="text"  sx={{color: 'blue', textTransform: 'capitalize','&:hover': {
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
        </Toolbar>
        <ButtonItem text={'Get Started'} color={'white'} bg={'orange'} />
       </Stack>
    </AppBar>
  )
}
