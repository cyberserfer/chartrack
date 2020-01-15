import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { normalize } from 'polished'

const GlobalStyles = createGlobalStyle`
    ${normalize()}
    body {
        margin: 0;
    }
`

const tempTheme = {
    colors: {
        primary: '#26de81'
    }
}

ReactDOM.render(
    <ThemeProvider theme={tempTheme}>
        <GlobalStyles />
        <App />
    </ThemeProvider>
    , document.getElementById('root'))
