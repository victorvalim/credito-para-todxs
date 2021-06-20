import React from 'react';
import styled from 'styled-components';
import mainImage from '../imagens/mainImage.png'
const MainContainer = styled.main`
width:100vw;
padding:4rem;
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
-webkit-box-align: center;
align-items: center;
`;
const Image = styled.img`
float:right;
width: 429px;
height: auto;
`;
const FormContainer = styled.div`
display: flex;
flex-flow: column wrap;
width: 45vw;
`;
const Text = styled.p`
margin:0.5rem;
font-size:2rem;
color:rgb(0, 184, 215);
background:transparent;
`;
const ButtonContainer = styled.div`
width:100%;
`;
const Button = styled.button`
margin:0.5rem;
width:25%;
height: 4rem;
font-size: 18px;
font-weight: bold;
color: rgb(255, 255, 255);
border: 0px;
background-color: #C44C43;
box-shadow: 0 3px 3px 0px RGB(0, 0, 0, 0.3);
border-radius: 7px;
background-color: rgb(0, 184, 215);
&:hover {

  background-color: gray;

}
`;
function Main() {
  return(
    <MainContainer>
      <FormContainer>
<Text>
Empréstimo Pessoal Online
</Text>
<Text>
De quanto você precisa?
</Text>
<ButtonContainer>
  <Button>RS 5.000</Button>
  <Button>RS 10.000</Button>
  <Button>RS 20.000</Button>
  <Button>RS 30.000</Button>
  <Button>RS 50.000</Button>
  <Button>Outro</Button>
</ButtonContainer>
      </FormContainer>
      <Image src={mainImage} width="430px"/>
    </MainContainer>
  );
}
export default Main;