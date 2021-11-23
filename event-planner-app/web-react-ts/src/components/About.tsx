import { Box, makeStyles, withStyles, Typography, Paper, createTheme, ThemeProvider, styled  } from '@material-ui/core'
import React from 'react'



export default function About() {
    const useStyles = makeStyles((theme) => ({
        root: {
          height: '100vh',
          backgroundImage: "linear-gradient(45deg, #000000, 20%, #1d007d, 80%, #3d74ff)"
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

      const Item = styled(Paper)(({ theme}) => ({
        textAlign: 'center'
      }))

      const WhiteTextTypography = withStyles({
        root: {
          color: "#FFFFFF"
        }
      })(Typography);


    return (
        <div className={classes.root}>
          
            
           <Box
        display="flex"
        justifyContent="center"  
        alignContent="center"    
        minHeight="100vh"     
        // bgcolor="#000040"
      >
        <Box 
        display='flex'      
        minHeight='20vh'
        flexDirection="column"
         
        alignContent="center" 
        width='50vw'
        
        >
          
          <WhiteTextTypography align="center" variant="h1" gutterBottom>
            Only Events
            </WhiteTextTypography>
            <WhiteTextTypography variant="h3" align="center" gutterBottom>
              Get on the same page with your Friends, Family and Collegues
              </WhiteTextTypography>
              
            </Box>
            </Box> 
        </div>
    )
}
