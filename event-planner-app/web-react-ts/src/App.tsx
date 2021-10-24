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
  Button,
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
import { useState } from 'react'
import { Animated } from 'react-animated-css'
import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
} from '@syncfusion/ej2-react-schedule'

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
  const [taskReminders, setTaskReminders] = useState(false)

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      //bgcolor="linear-gradient(45deg, #000000 20%, 	#000080 90% )"
      bgcolor="#000040"
    >
      {taskReminders && (
        <Box
          minHeight="100%"
          minWidth="25vw"
          display="flex"
          flexDirection="column"
        >
          <Box width="100%" height="50%" bgcolor="blue">
            Reminders
          </Box>
          <Box width="100%" height="50%" bgcolor="red">
            To-Do
          </Box>
        </Box>
      )}
      <Box minHeight="100vh" minWidth="75vw">
        <Button
          variant="contained"
          onClick={() => setTaskReminders(!taskReminders)}
        >
          Toggle Reminders and Task
        </Button>
        <Box>
          <ScheduleComponent height="550px" width="100%">
            <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
          </ScheduleComponent>
        </Box>
      </Box>
    </Box>
  )
}
