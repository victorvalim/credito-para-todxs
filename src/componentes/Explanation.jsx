import React from 'react';
import um from '../imagens/um.webp'
import dois from '../imagens/dois.webp'
import tres from '../imagens/tres.webp'
import quatro from '../imagens/quatro.webp'
import {
  MainContainer, Text, ImageContainer, ItemContainer
  ,Image, TextoContainerStrong, TextoContainer, Button
} from './ExplanationStyled'

function Explanation() {
  function scrollTop() {

    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
  return (
    <MainContainer>
      <Text>O empréstimo que te ajuda:
      </Text>
      <ImageContainer>
        <ItemContainer>
          <Image src={um} />
          <TextoContainerStrong>Dinheiro Rápido</TextoContainerStrong>
          <TextoContainer>Em até 1 dia útil, após aprovação do contrato e documentos, o dinheiro está na sua conta.</TextoContainer>
        </ItemContainer>
        <ItemContainer>
          <Image src={dois} />
          <TextoContainerStrong>Seguro
          </TextoContainerStrong>
          <TextoContainer>Você solicita na segurança da sua casa, sem contato físico com ninguém.</TextoContainer>
        </ItemContainer>
        <ItemContainer>
          <Image src={tres} />
          <TextoContainerStrong>Seguro
          </TextoContainerStrong>
          <TextoContainer>Você solicita na segurança da sua casa, sem contato físico com ninguém.</TextoContainer>
        </ItemContainer>
        <ItemContainer>
          <Image src={quatro} />
          <TextoContainerStrong>Seguro
          </TextoContainerStrong>
          <TextoContainer>Você solicita na segurança da sua casa, sem contato físico com ninguém.</TextoContainer>
        </ItemContainer>
      </ImageContainer>
      <Button onClick={() => scrollTop()}>Simular</Button>
    </MainContainer >
  );
}
export default Explanation;