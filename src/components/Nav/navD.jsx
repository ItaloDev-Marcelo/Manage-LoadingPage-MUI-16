import { AppBar, Button, Toolbar, Stack} from "@mui/material";
import Logo from '../../assets/images/logo.svg';
import ButtonItem from "../Button/Button";

export default function navMobile() {

   var lastScrollTop = 0;
   let navbar = document.getElementById('navbar');
   window.addEventListener('scroll', function() {
      var scrollTop = window.pageYOffset || document.scrollTop;
      if  ( scrollTop > lastScrollTop )  {
         navbar.style.top = '-80px'
      }else {
         navbar.style.top = '0'
      }
   })

  return (
    <AppBar id='navbar' color="trasparent" sx={{display:'flex', maxWidth: '1300px',  position: 'relative', left: '-1em' ,justifyContent: 'space-between', boxShadow: 'none',alignContent: 'center', padding: '1em 10em'}} >
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
