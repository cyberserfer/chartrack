import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { normalize } from 'polished'

const GlobalStyles = createGlobalStyle`
    ${normalize()}
    body {
        @import url('https://rsms.me/inter/inter.css');
        margin: 0;
        font-family: 'Inter',  sans-serif;
    }
`

const tempTheme = {
    colors: {
        primary: '#3867d6',
        primaryHover: '#4b7bec',
        warning: '#f7b731',
        warningHover: '#fed330',
        danger: '#eb3b5a',
        dangerHover: '#fc5c65',
        lightGray: '#d1d8e0'
    }
}

ReactDOM.render(
    <ThemeProvider theme={tempTheme}>
        <GlobalStyles />
        <App />
    </ThemeProvider>
    , document.getElementById('root'))
