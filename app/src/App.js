import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import SavageSheet from './container/SavageSheet'
import LandingContainer from './container/LandingContainer'
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql'
})

export default function App (props) {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path='/savageSheet' component={SavageSheet} />
          <Route path='/' component={LandingContainer} />
          <Redirect from='*' to='/' />
        </Switch>
      </Router>
    </ApolloProvider>
  )
}
