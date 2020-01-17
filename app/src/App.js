import React from 'react'
import { Router } from '@reach/router'
import LandingContainer from './container/LandingContainer'
import { ApolloProvider } from '@apollo/react-hooks'
import { ApolloClient, ApolloLink, InMemoryCache, HttpLink } from 'apollo-boost';
import SheetForm from './container/SheetForm'

const httpLink = new HttpLink({ uri: 'http://localhost:8000/graphql' });

const authLink = new ApolloLink((operation, forward) => {
  // Retrieve the authorization token from local storage.
  const token = localStorage.getItem('jwt');

  // Use the setContext method to set the HTTP headers.
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : ''
    }
  });

  // Call the next link in the middleware chain.
  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink), // Chain it with the HttpLink
  cache: new InMemoryCache()
});

export default function App () {
  return (
    <ApolloProvider client={client}>
      <Router>
        <LandingContainer path='/' />
        <SheetForm path='/savageSheet/addNewCharacter' />
        <SheetForm path='/savageSheet/:characterId' />
      </Router>
    </ApolloProvider>
  )
}
