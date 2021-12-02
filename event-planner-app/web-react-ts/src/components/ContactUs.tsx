import { Container, CssBaseline, Grid, Paper, ThemeProvider } from '@material-ui/core'
import React from 'react'
import theme from '../theme'


export default function ContactUs() {
    return (
        <ThemeProvider theme={theme}>
            <Container component='main' maxWidth='lg'>
                <CssBaseline/>
                <Grid container xs={12} >
                    <Grid container xs={6} >
                        <Grid item xs={12}>
                            <Paper>
                                1
                            </Paper>
                            </Grid>

                        <Grid item xs={12}>
                            <Paper>2</Paper>
                            </Grid>

                        <Grid item xs={12}>
                            <Paper>3</Paper>
                            </Grid>
                        </Grid>
                    
                    <Grid container xs={6} >

                    <Grid item xs={12}>
                    <Paper>4</Paper>
                            </Grid>
                    <Grid item xs={12}>
                    <Paper>5</Paper>
                            </Grid>
                    <Grid item xs={12}>
                    <Paper>6</Paper>
                            </Grid>
                        </Grid>
                    </Grid>        
            </Container>
        </ThemeProvider>
    )
}
