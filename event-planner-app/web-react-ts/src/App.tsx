import React from 'react'

import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom'

import UserList from './components/UserList'

import clsx from 'clsx'

import {
  CssBaseline,
  Drawer,
  Box,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  Container,
  Link as MUILink,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import {
  ChevronLeft as ChevronLeftIcon,
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  People as PeopleIcon,
} from '@material-ui/icons'
import Dashboard from './components/Dashboard'
import Login from './components/Login'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MUILink color="inherit" href="https://grandstack.io/">
        Your GRANDstack App Name Here
      </MUILink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default function App() {
  const [open, setOpen] = React.useState(true)
  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      //bgcolor="linear-gradient(45deg, #000000 20%, 	#000080 90% )"
      bgcolor="#000040"
    >
      <Box minHeight="100vh" minWidth="25vw" display="flex">
        <Box minWidth="100%" bgcolor="blue">
          Reminders
        </Box>
        <Box minWidth="100%" bgcolor="red">
          To-Do
        </Box>
      </Box>
      <Box minHeight="100vh" minWidth="75vw"></Box>
    </Box>
  )
}
