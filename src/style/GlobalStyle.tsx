import { createGlobalStyle } from 'styled-components'
import { ResetCSS, FONTS } from 'lugo'
import { background } from './darkTheme'

const GlobalStyle = createGlobalStyle`
  ${ResetCSS}

  @font-face {
    font-family: ${FONTS.UBUNTU};
    src: url('/fonts/ubuntu/Ubuntu-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  html {
    height: 100%;
    font-size: 16px;
    font-family: Ubuntu, sans-serif;
  }

  body {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  
    background-color: ${background.main};
    color: #fff;
    word-wrap: break-word;
  
    main {
      flex: 1;
    }
  }
`

export default GlobalStyle
