import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.header`
background-color: grey;
font-size:2rem;
width:100vw;
height: 5rem;
display:flex;
justify-content: center;
`;
const Text = styled.p`
color:black;
background:transparent;
`;
export const TextoFooter = styled.div`
height:100%;
padding:15px;
display:flex;
flex-wrap: nowrap;
justify-content: space-start;
align-items: flex-end ;


`;

export const ItemFooter = styled.p`
font-size:12px;
margin:10px;
color:white;
margin-bottom:0;
`;
export const ImageFooter = styled.div`
display:flex;
flex-wrap: nowrap;
justify-content: flex-end;
align-items: flex-end ;
width:100%;
height:100%;
padding:15px;
color:yellow;

`;

export const ItemImageFooter = styled.img`
padding:5px;
`;


function Footer() {
  return(
    <FooterContainer>
          <TextoFooter>
            <ItemFooter>Todos os direitos reservados a Crédito para Todx - 2021-2021
            </ItemFooter>
          </TextoFooter>
          <ImageFooter>
            <ItemImageFooter src="https://i.imgur.com/nUwIKvQ.png" width="30px" />
            <ItemImageFooter src="https://i.imgur.com/uDFwo4g.png" width="30px" />
            <ItemImageFooter src="https://i.imgur.com/AOkqFEC.png" width="30px" />
            <ItemImageFooter src="https://i.imgur.com/xuwsQEa.png" width="30px" />
          </ImageFooter>
    </FooterContainer>
  );
}
export default Footer;