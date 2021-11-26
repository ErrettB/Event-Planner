import { Box, makeStyles, withStyles, Typography, Paper, createTheme, ThemeProvider, styled, Grid  } from '@material-ui/core'
import React from 'react'



export default function About() {
    const useStyles = makeStyles((theme) => ({
        root: {
          height: '100%',
          backgroundImage: "linear-gradient(45deg, #000000, 20%, #1d007d, 80%, #3d74ff)",
          margin: "0px",
          padding: '0px'
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
        grid2:{
          width:'100%'
        },
        textfield: {
          margin: ' 40px 0px 40px 0px',
        },
        smallBox:{
          width:"100%"
        }
      }))
      const classes = useStyles()
      const className = useStyles()
      

      const Item = styled(Paper)(({ theme}) => ({
        textAlign: 'center'
      }))

      const WhiteTextTypography = withStyles({
        root: {
          color: "#FFFFFF",
          fontSize: '70px'
        }
      })(Typography);

      const BlackTextTypography = withStyles({
        root: {
          color: "#000000",
          fontSize: '40px'

          
        }
      })(Typography);

      const SubTextTypography = withStyles({
        root:{
          fontSize: '40px',
          color:"#FFFFFF"
        }
      })(Typography)


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
        width='90vw'
        padding="20vh 0 20vh 0"      
        >
          
          <WhiteTextTypography align="center" variant="h1" gutterBottom >
            The perfect date for you
            </WhiteTextTypography>
            <SubTextTypography variant="h4" align="center" gutterBottom>
              Get on the same page with your <BlackTextTypography >Friends, Family and Collegues.</BlackTextTypography>
              </SubTextTypography>
              
            </Box>
            </Box> 

            <Box p={2}>
            
            <Grid 
            container             
            xs = {12}        
            >            
              <Grid container                           
                xs = {6}
                justifyContent='flex-end'               
                >                
                <Grid item xs={12} >
                <Paper >
                  Team
                  </Paper>
                </Grid>

                <Grid item xs = {12}>
                  <Paper >
                  Tech
                  </Paper>
                </Grid>
              </Grid>

                <Grid item xs = {6}>
                    <Paper style={{height:'100%'}}>
                      Test
                      </Paper>
                  </Grid>
                
                <Grid item xs={12} >
                  <Paper> 
                    Lower bar
                  </Paper>
                  </Grid>
            </Grid>
            </Box>         
        </div>
    )
}
