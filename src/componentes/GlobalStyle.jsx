import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*, ::after, ::before {
   box-sizing: border-box;
   margin:0;
   font-family: "Gotham A", "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}
`
export default GlobalStyle;