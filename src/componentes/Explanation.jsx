import React from 'react';
import styled from 'styled-components';
import um from '../imagens/um.webp'
import dois from '../imagens/dois.webp'
import tres from '../imagens/tres.webp'
import quatro from '../imagens/quatro.webp'

const MainContainer = styled.main`
background: rgb(242, 242, 242);
width:100vw;
padding-bottom:1rem;

`;
const Text = styled.h1`
padding:1rem;
text-align:center;
color:rgb(0, 184, 215);
background:transparent;
`;

const ImageContainer = styled.div`
background: rgb(242, 242, 242);
width:100vw;
display: flex;
// flex-wrap: nowrap;
// justify-content: center;
// align-items: center;
@media (max-width: 800px){
  display: flex;
flex-direction:column;
justify-content: flex-start;
align-items: center;
}
`;
const ItemContainer = styled.div`
width:25%;
margin:2rem;
display: flex;
flex-flow: column wrap;
justify-content: center;
align-items: center;
align-content: center;
@media (max-width: 800px){
width:40%;
margin:0.5rem;
}
`;

const Image = styled.img`
`;

const TextoContainerStrong = styled(Text)`
padding:0.2rem;
text-align:center;
color: rgb(106, 106, 106);
font-size: 1.25rem;
font-weight: 700;
`;
const TextoContainer = styled(TextoContainerStrong)`
text-align:center;

color: rgb(23, 28, 37);
font-size: 0.95rem;
font-weight: 400;
line-height: 1.5;
letter-spacing: 0.03rem;

`;
const Button = styled.button`
display:block;
width:250px;
height: 3rem;
font-size: 18px;
font-weight: bold;
color: rgb(255, 255, 255);
border: 0px;
background-color: #C44C43;
box-shadow: 0 3px 3px 0px RGB(0, 0, 0, 0.3);
border-radius: 7px;
background-color: rgb(0, 184, 215);
margin: 0 auto;
cursor: pointer;

&:hover {

  background-color: gray;

}
`;

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
          <TextoContainerStrong>Parcelas em até 72 vezes
          </TextoContainerStrong>
          <TextoContainer>Você decide a melhor forma de organizar as parcelas que cabem no seu bolso.</TextoContainer>
        </ItemContainer>
        <ItemContainer>
          <Image src={quatro} />
          <TextoContainerStrong>Sem garantia
          </TextoContainerStrong>
          <TextoContainer>Fique tranquilo, não pedimos seus bens como garantia, nem imóveis e nem carro.</TextoContainer>
        </ItemContainer>
      </ImageContainer>
      <Button onClick={() => scrollTop()}>Simular empréstimo</Button>
    </MainContainer >
  );
}
export default Explanation;