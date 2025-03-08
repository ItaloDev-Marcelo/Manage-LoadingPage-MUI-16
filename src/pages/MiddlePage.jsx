import {Stack, Typography} from '@mui/material';
import ButtonItem from '../components/Button/Button';

export default function MiddlePage() {
  return (
    <Stack>
            <Typography component='h5'></Typography>
            <ButtonItem text='Get Started' color={'orange'} bg='white' />
    </Stack>
  )
}
