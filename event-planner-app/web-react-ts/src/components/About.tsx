import { Box, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

export default function About() {
    const useStyles = makeStyles((theme) => ({
        root: {
          height: '100vh',
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
      const classes = useStyles()


    return (
        <div className={classes.root}>
            
           <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        //bgcolor="linear-gradient(45deg, #000000 20%, 	#000080 90% )"
        bgcolor="#000040"
      >
        <Box>
          <Typography variant="h1" gutterBottom>
            Only Events
            </Typography>
            </Box>
            </Box> 
        </div>
    )
}
