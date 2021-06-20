import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
font-size:2rem;
font-family: "Gotham A", "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
width:100vw;
height: 5rem;
top: 0px;
position: sticky;
z-index: 1000;
box-shadow: rgb(0 0 0 / 10%) 0px 0px 0.2rem;
// background: linear-gradient(
//   180deg
//   , rgba(137, 26, 197, 1) 0%, rgba(235, 61, 199, 1) 82%);
//   }  
display: flex;
justify-content: center;
align-items: center;
background-color:white;
`;
const Text = styled.p`
color:rgb(0, 184, 215);
background:transparent;
`;
function Header() {
  return(
    <HeaderContainer>
<Text>
  {`Crédito
  para 
  todx`}
</Text>
    </HeaderContainer>
  );
}
export default Header;