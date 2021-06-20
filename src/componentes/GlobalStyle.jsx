import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*, ::after, ::before {
   box-sizing: border-box;
   margin:0;
   background: rgb(242, 242, 242);
}
`
export default GlobalStyle;