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

export const TextoFooter = styled.div`
width:800px;
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
padding:0 3px;
`;



function Footer() {
  return (
    <FooterContainer>
      <TextoFooter>
        <ItemFooter>Todos os direitos reservados a Crédito para Todx - 2021-2021
        </ItemFooter>
      </TextoFooter>
      <ImageFooter>
        <a target="_blank" href="https://www.facebook.com/serasa.com.br"><ItemImageFooter src="https://i.imgur.com/nUwIKvQ.png" width="30px" /></a>
        <a target="_blank" href="https://www.instagram.com/serasa/"><ItemImageFooter src="https://i.imgur.com/uDFwo4g.png" width="30px" /></a>
        <a target="_blank" href="https://www.linkedin.com/company/serasa/"><ItemImageFooter src="https://i.imgur.com/AOkqFEC.png" width="30px" /></a>
        <a target="_blank" href="https://open.spotify.com/show/5ZTMUau1ssfgmCIyvygpwt"><ItemImageFooter src="https://i.imgur.com/xuwsQEa.png" width="30px" /></a>
      </ImageFooter>
    </FooterContainer>
  );
}
export default Footer;