import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

export const GlobalStyle = createGlobalStyle`
  ${normalize()}
  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
  }
`
