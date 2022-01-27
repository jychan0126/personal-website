import React from "react";
import { createTheme, Drawer, ListItemButton, Paper, Typography } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import { Toolbar, AppBar } from "@mui/material";
import { Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { ThemeProvider } from "@emotion/react";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { selectControlPage, store } from "../slice/controlPage";
import { PAGE } from "../type.d";

const drawerWidth = 300;

const sidebarTheme = createTheme({
  components: {
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
      <Paper>Ch-Ying</Paper>
      {/* <Divider /> */}
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