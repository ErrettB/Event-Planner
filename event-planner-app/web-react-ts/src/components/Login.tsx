import React from 'react'
import { useForm } from 'react-hook-form'
import { useQuery } from '@apollo/react-hooks'
import { makeStyles, Grid, Box, Paper, Divider } from '@material-ui/core'
import { GridOff } from '@material-ui/icons'

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
    margin: 'auto',
  },
}))

export default function Login() {
  const onSubmit = (d: any) => alert(JSON.stringify(d))
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
          bgcolor="green"
          sx={{
            width: '60vw',
            height: '60vh',
            p: '10px',
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
        </Box>
      </Box>
    </div>
  )
}
