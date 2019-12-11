import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'
import preset from '@rebass/preset'

const GlobalStyles = createGlobalStyle`
  ${normalize()}
  body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  }
`

ReactDOM.render(
  <ThemeProvider theme={preset}>
    <GlobalStyles />
    <App />
  </ThemeProvider>
  , document.getElementById('root'))
