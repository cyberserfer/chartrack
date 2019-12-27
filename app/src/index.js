import React, { Fragment } from 'react'
import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './Utils/GlobalStyle'
import Layout from './Layout'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
});

const theme = {
  type: {
    primary: '#2d3436',
    danger: '#d63031'
  }  
}



render(
  <ApolloProvider client={client}>
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyle />
      <Layout />
    </Fragment>
  </ThemeProvider>
  </ApolloProvider>, 
  document.getElementById("app"))
