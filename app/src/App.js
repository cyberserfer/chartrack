import React from 'react'
import { Router } from '@reach/router'
import LandingContainer from './container/LandingContainer'
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'
import CharacterBrowser from './container/CharacterBrowser'
import SheetForm from './container/SheetForm'

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql'
})

export default function App () {
  return (
    <ApolloProvider client={client}>
      {window.localStorage.getItem('jwt') ? (
        <Router>
          <CharacterBrowser path='/' />
          <SheetForm path='/savageSheet/addNewCharacter' />
        </Router>
      ) : (
        <Router>
          <LandingContainer path='/' />
        </Router>
      )}
    </ApolloProvider>
  )
}
