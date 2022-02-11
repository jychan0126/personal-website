import React from "react";
import { Card, CardContent, CardMedia, createTheme, Drawer, Grid, ListItemButton, Paper, Stack, Typography } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import { Toolbar, AppBar } from "@mui/material";
import { Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { ThemeProvider } from "@emotion/react";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { selectControlPage, store } from "../slice/controlPage";
import { PAGE } from "../type.d";
import { Box, color, textAlign } from "@mui/system";
import logo from '../img/Logo_big.png'

const drawerWidth = 300;

const sidebarTheme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#0000',
          color: 'white',
          boxShadow: 'none',
          paddingTop: '15px',
          paddingBottom: '15px',
          paddingLeft: '10px',
          paddingRight: '10px',
          justifyContent: 'space-around'
        }
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          // paddingLeft: '40px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }
      }
    },
    MuiCardMedia: {
      styleOverrides: {
        img: {
          width: '105px',
          padding: '16px'
        }
      }
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: '#25274D',
          color: 'white',
          width: drawerWidth,
          boxSizing: 'border-box',
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontWeight: 'bold'
        }
      }
    }
  }
})

export default function SideBar() {
  const controlPage = useAppSelector(selectControlPage)
  const dispatch = useAppDispatch()

  const changePage = (text: string) => [
    dispatch(store(text))
  ]

  return (
    <ThemeProvider theme={sidebarTheme}>
      <CssBaseline />
      {/* <AppBar
          position="fixed"
          sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
          <Toolbar>
          <Typography variant="h6" noWrap component="div">
              Permanent drawer
          </Typography>
          </Toolbar>
      </AppBar> */}
      <Drawer
      sx={{width: drawerWidth,
          flexShrink: 0
      }}
      variant="permanent"
      anchor="left"
    >
      <Card sx={{ display: 'flex' }}>
        <CardMedia
          component="img"
          image={logo}
          // sx={{flexGrow: '1'}}
          alt="Live from space album cover"
        />
        <Box sx={{ display: 'flex'}}>
          <CardContent>
            <Typography component="span" variant="h5">
              詹居穎
            </Typography>
            <Typography variant="subtitle1" color="white" component="div" sx={{ marginTop: '8px' }}>
              Chan, Chu-Ying
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          </Box>
        </Box>
      </Card>

      <List>
        {[PAGE.AboutMe, 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItemButton onClick={() => changePage(text)} key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon sx={{color: 'white'}}/> : <MailIcon sx={{color: 'white'}}/>}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        ))}
      </List>
      {/* <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
      </Drawer>
    </ThemeProvider>
  )
}