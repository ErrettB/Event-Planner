import { Box, Container, CssBaseline, Grid, Paper, styled, ThemeProvider, Typography } from '@material-ui/core'
import React from 'react'
import theme from '../theme'


const ContactBox = styled(Paper)(({theme}) => ({
    minHeight: '50%',
    margin: '10%',
    palette:{
        type: 'white'
    }
}))

const InnertBox = styled(Paper)(({theme}) => ({
    minWidth: '50%',
    margin: '5%'

}))

const rows = [
{name: 'Errett Bainum', age: '21', email:'ebainum@citadel.edu'}, 
{name: 'Errett Bainum', age: '21', email:'ebainum@citadel.edu'}, 
{name: 'Errett Bainum', age: '21', email:'ebainum@citadel.edu'}, 
{name: 'Errett Bainum', age: '21', email:'ebainum@citadel.edu'}, 
{name: 'Errett Bainum', age: '21', email:'ebainum@citadel.edu'}, 
{name: 'Errett Bainum', age: '21', email:'ebainum@citadel.edu'}]

export default function ContactUs() {


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Container disableGutters maxWidth={false} >
                <Box m={0}>                
                <Grid 
                container xs={12}
                spacing={0}               
                style= {{minHeight: '100vh'}}                
                 >
                  {rows.map(row =>(
                      <Grid item xs={6}>
                      <ContactBox>
                          <InnertBox> <Typography variant='h4'>{row.name}</Typography></InnertBox>
                          <InnertBox><Typography variant='h4'>{row.age}</Typography></InnertBox>
                          <InnertBox><Typography variant='h4'>{row.email}</Typography></InnertBox>  </ContactBox>
                              </Grid>
                  ))}                          
                    </Grid>
                    </Box>          
            </Container>
            
        </ThemeProvider>
    )
}
