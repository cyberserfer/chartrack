import React, { Component } from "react";
import { Router } from "@reach/router";
import SavageSheet from "./container/SavageSheet";
import LandingContainer from "./container/LandingContainer";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql"
});

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <SavageSheet path="/savageSheet/addNewCharacter" addingNewCharacter={true} />
          <SavageSheet path="/savageSheet" />
          <LandingContainer path="/" />
        </Router>
      </ApolloProvider>
    );
  }
}
