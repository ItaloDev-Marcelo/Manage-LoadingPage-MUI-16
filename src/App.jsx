import NavMobile from './components/Nav/navM';
import NavDesk from './components/Nav/navD';
import './App.css'
import { Stack} from '@mui/material';
import Home from './pages/Home';
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
    </>
  )
}

export default App
