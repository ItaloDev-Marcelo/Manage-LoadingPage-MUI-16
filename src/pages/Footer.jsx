import {Stack} from '@mui/material'
import Grid from '@mui/material/Grid2';

export default function Footer() {
  return (
    <Stack >
         <Grid container >
              <Grid size={{xs: 12, md: 4}} sx={{order: {xs: 1, md: 3}}} >
                 <Stack >
                    <h6>Email</h6>
                 </Stack>
              </Grid>
              <Grid size={{xs: 12, md: 4}}  sx={{order: {xs: 2, md: 2}}}  >
                 <Stack>
                    <h6>list</h6>
                 </Stack>
              </Grid>
              <Grid size={{xs: 12, md: 4}}  sx={{order: {xs: 3, md: 1}}}>
                 <Stack>
                    <h6>social row</h6>
                 </Stack>
              </Grid>
         </Grid>
    </Stack>
  )
}
