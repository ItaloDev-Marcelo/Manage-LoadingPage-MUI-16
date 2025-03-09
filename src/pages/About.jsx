import {Stack, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';
import Card from '../components/InfoCards';

export default function About() {
  return (
    <Stack component='section'>
        <Grid contained padding={{xs: '1em 2.4em ', lg: '1em 7em'}}>
          <Grid size={{xs: 12, lg:6}} >
             <Stack >
                <Stack className='information-box' margin='1em 0'  textAlign={{xs: 'center', lg: 'left'}} >
                <Typography component='h2' margin='1.5em 0 1em 0' padding={{xs: '0 2em'}} fontSize={{xs: '1.7em'}} fontWeight='600'> What’s different about Manage?</Typography>
                <Typography component='p'> Manage provides all the functionality your team needs, without 
  the complexity. Our software is tailor-made for modern digital 
  product teams. </Typography>
                </Stack>
             </Stack>
          </Grid>
          <Grid size={{xs: 12, lg:6}} >
             <Stack alignSelf={{md: 'center'}} >
             <Card level='01' levelTitle='Track company-wide progress' textInfo='See how your day-to-day tasks fit into the wider vision. Go from 
  tracking progress at the milestone level all the way done to the 
  smallest of details. Never lose sight of the bigger picture again.' />
            <Card level='02' levelTitle='Advanced built-in reports' textInfo='Set internal delivery estimates and track progress toward company 
  goals. Our customisable dashboard helps you build out the reports 
  you need to keep key stakeholders informed.' />
            <Card level='03' levelTitle='Everything you need in one place' textInfo='Stop jumping from one service to another to communicate, store files, 
  track tasks and share documents. Manage offers an all-in-one team 
  productivity solution.' />
                </Stack>
          </Grid>
          
        </Grid>
    </Stack>
  )
}
