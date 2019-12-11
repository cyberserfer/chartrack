import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
<<<<<<< HEAD
} from "react-router-dom"
import "./App.css"
import SavageSheet from "./container/SavageSheet"
import LandingContainer from "./container/LandingContainer"
import { ApolloProvider } from "@apollo/react-hooks"
import ApolloClient from "apollo-boost"
=======
} from 'react-router-dom'
import SavageSheet from './container/SavageSheet'
import LandingContainer from './container/LandingContainer'
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'
>>>>>>> origin/signin

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql'
})

<<<<<<< HEAD
export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div>
            <Switch>
              <Route path="/savageSheet" component={SavageSheet} />
              <Route path="/" component={LandingContainer} />
              <Redirect from="*" to="/" />
            </Switch>
          </div>
        </Router>
      </ApolloProvider>
    )
  }
=======
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
>>>>>>> origin/signin
}
