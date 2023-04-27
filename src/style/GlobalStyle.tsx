import { createGlobalStyle } from 'styled-components'
import { resetCSS, flexBody, FONTS } from 'lugo'
import { background } from './theme'

const GlobalStyle = createGlobalStyle`
  ${resetCSS}
  ${flexBody}

  @font-face {
    font-family: ${FONTS.UBUNTU};
    src: url('/fonts/ubuntu/Ubuntu-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  html {
    font-size: 16px;
    font-family: ${FONTS.UBUNTU}, sans-serif;
  }

  body {
    background-color: ${background.primary};
    color: #fff;
  }
`

export default GlobalStyle
