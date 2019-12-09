import React, { Component } from "react"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom"
import "./App.css"
import AppHeader from "./container/AppHeader"
import SavageSheet from "./container/SavageSheet"
import LandingContainer from "./container/LandingContainer"
import { ApolloProvider } from "@apollo/react-hooks"
import ApolloClient from "apollo-boost"

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql"
})

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div>
            <header className="App-header">
              <AppHeader />
            </header>
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
}
