import NavMobile from './components/Nav/navM';
import NavDesk from './components/Nav/navD';
import './App.css'
import { Stack } from '@mui/material';
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import Home from './pages/Home';
import About from './pages/About';
import Footer from './pages/Footer';
import SlideDesk from './components/Slider/sliderD';
import SlideMobile from './components/Slider/SliderM';
import MiddlePage from './pages/MiddlePage';

function App() {

 
  useEffect(() => {
    ScrollReveal().reveal(".reveal", {
      distance: "20px",
      duration: 1000,
      easing: "ease-in-out",
      origin: "top",
      reset: true, // Se quiser que a animação ocorra toda vez que o elemento entrar na tela
    });
  }, []);


  return (
    <>
      <Stack sx={{
        display: {
          xs: 'block',
          lg: 'none'
        }
      }}>

        <NavMobile />
      </Stack>
      <Stack sx={{
        display: {
          xs: 'none',
          lg: 'flex'
        }
      }}>

        <NavDesk />
      </Stack>
      <Stack className='reveal'>
      <Home />
      </Stack>
      <Stack className='reveal' id='container-area' position='relative'>
      <About />
      <Stack className='reveal' sx={{
        display: {
          xs: 'flex',
          lg: 'none'
        }
      }}>
        <SlideMobile />
      </Stack>
      <Stack className='reveal' sx={{
        display: {
          xs: 'none',
          lg: 'flex'
        }
      }}>
        <SlideDesk />
      </Stack>
      </Stack>
    
      <MiddlePage/>

      <Stack className='reveal'>
      <Footer/>
      </Stack>
      
    </>



  )
}

export default App
