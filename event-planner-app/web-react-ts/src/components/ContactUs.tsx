import { ThemeProvider } from '@material-ui/core'
import React from 'react'
import theme from '../theme'


export default function ContactUs() {
    return (
        <ThemeProvider theme={theme}>
        <div>
            Hello
        </div>
        </ThemeProvider>
    )
}
