import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Login from './components/Login'
import About from './components/About'
import NavBar from './components/NavBarComponents/NavBar'

import * as serviceWorker from './serviceWorker'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ApolloProvider } from '@apollo/client'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core'
import theme from './theme'
import SignUp from './components/SignUp'

const uri = process.env.REACT_APP_GRAPHQL_URI || 'http://localhost:4001/graphql'
const cache = new InMemoryCache()

const client = new ApolloClient({
  uri,
  cache,
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <NavBar/>
      <Switch>
      
        <Route exact path="/" component={About} />
        <Route exact path="/app" component={App} />
        <Route exact path='/login' component={Login}/>
        <Route exact path='/signup' component={SignUp}/>
        
      </Switch>
      
    </BrowserRouter>
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
