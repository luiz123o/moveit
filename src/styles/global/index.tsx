import { createGlobalStyle } from 'styled-components'

import { THEME_CSS_VARIABLES } from './css-variables'

const GlobalStyles = createGlobalStyle`
  ${THEME_CSS_VARIABLES}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}

html {
  font-size: 62.5%;
}

html, body, #__next{
  height: 100%;
}

body {
  background: ${({ theme }) => theme.colors.shapes.background};

  font-family: --apple-system, BlinkMacSystemFont, 'Inter','Rajdhani','Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

`
export default GlobalStyles
