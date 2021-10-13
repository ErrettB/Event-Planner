import React from 'react'
import { useForm } from 'react-hook-form'
import { useQuery } from '@apollo/react-hooks'
import {
  makeStyles,
  Grid,
  Box,
  Paper,
  Divider,
  Typography,
  TextField,
  Button,
} from '@material-ui/core'
import { GridOff } from '@material-ui/icons'
import { Link, Route, Switch, Router, BrowserRouter } from 'react-router-dom'
import Dashboard from './Dashboard'

type Inputs = {
  name: string
  password: string
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    background: 'linear-gradient(45deg, #000000 20%, 	#000080 90% )',
  },
  text: {
    margin: '0',
    color: 'black',
  },
  grid: {
    background: 'white',
    minHeight: '75vh',
  },
  paper: {
    height: '100%',
    width: '50%',
    margin: '10px',
  },
  textfield: {
    margin: ' 40px 0px 40px 0px',
  },
}))

export default function Login() {
  const onSubmit = (d: any) => console.log(JSON.stringify(d))
  const classes = useStyles()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  return (
    <div className={classes.root}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        bgcolor="linear-gradient(45deg, #000000 20%, 	#000080 90% )"
      >
        <Box
          sx={{
            width: '70vw',
            height: '70vh',
            p: '10px',
            display: 'flex',
          }}
        >
          <Paper variant="outlined" className={classes.paper}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1>Only Events</h1>
              <label className={classes.text}>
                <h3>First Name:</h3>
                <input {...register('name')} />
              </label>
              <br />

              <label className={classes.text}>
                <h3>Last Name:</h3>
                <input {...register('password')} />
              </label>
              <br />
              <input type="submit" style={{ marginTop: '5px' }} />
            </form>
          </Paper>
          <Paper variant="outlined" className={classes.paper}>
            <Box
              display="flex"
              alignItems="flex-start"
              justifyContent="center"
              pt="10%"
            >
              <form onSubmit={handleSubmit(onSubmit)}>
                <Typography variant="h1" gutterBottom>
                  Only Events
                </Typography>
                <Box className={classes.textfield}>
                  <TextField
                    id="outlined-textarea"
                    {...register('name')}
                    fullWidth
                    label="Username"
                    variant="filled"
                  ></TextField>
                </Box>
                <Box className={classes.textfield}>
                  <TextField
                    id="outlined-textarea"
                    {...register('password')}
                    fullWidth
                    label="Password"
                    variant="filled"
                  ></TextField>
                </Box>

                <br />

                <Button
                  type="submit"
                  // component={Link}
                  // to="/app"
                  variant="contained"
                  style={{ marginTop: '5px', width: '100%', height: '5vh' }}
                  size="large"
                >
                  Login
                </Button>
              </form>
            </Box>
          </Paper>
        </Box>
      </Box>
    </div>
  )
}
