import React, { useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles';
import SideBar from '../components/SideBar';
import MainSpace from '../components/MainSpace';
import { useAppDispatch, useAppSelector } from '../app/hook';
import { selectControlPage } from '../slice/controlPage';
import { PAGE } from '../type.d';
import { AboutMe } from './AboutMe';

const Item = styled(Paper)(( {theme} ) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center'
}))

const TextStyle = styled('h2')({
  color: 'white'
})


export default function HomePage() {
  const now = useAppSelector(selectControlPage)
  const dispatch = useAppDispatch()

  useEffect(() => {
    console.log(`now: ${now}`)
  }, [now])

  const controlMainSpace = () => {
    if (now == PAGE.AboutMe) {
      return <AboutMe/>
    }
    else return <MainSpace/>
  }

  return (
    <Box sx={{ display: "flex" }}>
      <SideBar/>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: '#AAABB8', p: 3 }}>
        {controlMainSpace()}
        <Grid container spacing={1}>
          <Grid item xs>
            <Item style={{background: "#25274D"}}>
              <TextStyle>#25274D</TextStyle>
            </Item>
          </Grid>
          <Grid item xs>
            <Item style={{background: "#464866"}}>
              <TextStyle>#464866</TextStyle>
            </Item>
          </Grid>
          <Grid item xs>
            <Item style={{background: "#AAABB8"}}>
              <TextStyle>#AAABB8</TextStyle>
            </Item>
          </Grid>
          <Grid item xs>
            <Item style={{background: "#2E9CCA"}}>
              <TextStyle>#2E9CCA</TextStyle>
            </Item>
          </Grid>
          <Grid item xs>
            <Item style={{background: "#29648A"}}>
              <TextStyle>#29648A</TextStyle>
            </Item>
          </Grid>
        </Grid>

      </Box>
    </Box>
  );
}


