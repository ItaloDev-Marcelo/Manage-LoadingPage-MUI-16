import NavMobile from './components/Nav/navM';
import NavDesk from './components/Nav/navD';
import './App.css'
import { Stack } from '@mui/material';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './pages/Footer';
import SlideDesk from './components/Slider/sliderD';
import SlideMobile from './components/Slider/SliderM';
import MiddlePage from './pages/MiddlePage';
import bg from './assets/images/bg-tablet-pattern.svg'

function App() {



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
      <Home />
      <About />

      <Stack sx={{
        display: {
          xs: 'flex',
          lg: 'none'
        }
      }}>
        <SlideMobile />
      </Stack>


      <Stack sx={{
        display: {
          xs: 'none',
          lg: 'flex'
        }
      }}>
        <SlideDesk />
      </Stack>
      
      
      <MiddlePage/>
      <Footer/>
    </>



  )
}

export default App
