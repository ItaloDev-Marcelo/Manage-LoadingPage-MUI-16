import NavMobile from './components/Nav/navM';
import NavDesk from './components/Nav/navD';
import './App.css'
import { Stack } from '@mui/material';
import Home from './pages/Home';
import About from './pages/About';
import SlideDesk from './components/Slider/sliderD';
import SlideMobile from './components/Slider/SliderM';
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
    </>



  )
}

export default App
