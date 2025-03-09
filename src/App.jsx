import NavMobile from './components/Nav/navM';
import NavDesk from './components/Nav/navD';
import './App.css'
import { Stack} from '@mui/material';
import Home from './pages/Home';
import About from './pages/About';
function App() {

  return (
    <>
      <Stack sx={{display: {
        xs: 'block',
        lg: 'none'
      }}}>

      <NavMobile />
      </Stack>
      <Stack sx={{display: {
        xs: 'none',
        lg: 'flex'
      }}}>

      <NavDesk />
      </Stack>
      <Home/>
      <About/>
    </>
  )
}

export default App
