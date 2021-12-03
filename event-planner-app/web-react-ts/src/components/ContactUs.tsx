import { Box, Card, CardMedia, Container, CssBaseline, Grid, Paper, styled, ThemeProvider, Typography } from '@material-ui/core'
import React from 'react'
import theme from '../theme'



const ContactBox = styled(Card)(({theme}) => ({
    minHeight: '50%',
    margin: '10px',
    palette:{
        type: 'white'
    }
}))

const InnertBox = styled(Card)(({theme}) => ({
    minWidth: '50%',
    margin: '10px'

}))

const rows = [
{name: 'Harrison Martin', age: '21', phone:'9102658553', email:'hmartin1@citadel.edu', img:'../imgs/Ben'}, 
{name: 'Mathew Daugomah', age: '21', phone:'8438146548', email:'P00Nslayer6969@gmail.com', img:'../imgs/Jalen.jpg'}, 
{name: 'Benjamin Whitlock', age: '21', phone:'8032107403', email:'bwhitloc@citadel.edu', img:'../imgs/Ben.jpg'}, 
{name: 'Jalen Singleton', age: '21', phone:'911',email:'Jsingle3@citadel.edu', img:'../imgs/Jalen.jpg'}, 
{name: 'Jakob Schumacher ', age: '22', phone:'7734123879', email:'Jschumac@citadel.edu', img:'./imgs/Jacob.jpg'}, 
{name: 'Errett Bainum', age: '21', phone:'8433432139', email:'ebainum@citadel.edu', img:''}]

export default function ContactUs() {


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Container disableGutters maxWidth={false} >
                <Box m={0}>                
                <Grid 
                container xs={12}
                spacing={2}               
                style= {{minHeight: '100vh'}}                
                 >
                  {rows.map(row =>(
                      
                      <Grid item xs={6}>
                      <Card>
                      {/* <CardMedia
                      component="img"
                      height="194"
                      image={require(row.img)}
                      alt="Paella dish"/>   */}
                      <img
                        src={`${row.img}`}
                        height='100px'
                      />
                          <InnertBox> <Typography variant='h4'>{row.name}</Typography></InnertBox>
                          <InnertBox><Typography variant='h4'>{row.age}</Typography></InnertBox>
                          <InnertBox><Typography variant='h4'>{row.email}</Typography></InnertBox>
                          </Card>
                              </Grid>
                  ))}                          
                    </Grid>
                    </Box>          
            </Container>
            
        </ThemeProvider>
    )
}
