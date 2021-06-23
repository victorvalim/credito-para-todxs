import React from 'react';
import { FooterContainer, TextoFooter, ItemFooter, ImageFooter, ItemImageFooter } from './FooterStyled'



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