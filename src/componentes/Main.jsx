import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import mainImage from '../imagens/mainImage.png'
import { AiOutlineLeft } from "react-icons/ai";
import allActions from '../actions';
import Modal from 'react-modal';
import { useState } from 'react';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    'background-color': '#eee',
    'border-radius': '30px',

  },
};

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
color:rgb(23, 28, 37);
background:transparent;
font-weight:700;
`;
const TextWithSVG = styled(Text)`
font-size:1.5rem;
color:grey;
font-weight:400;

svg{
  padding-top:7px;
  cursor:pointer;
  color:rgb(0, 184, 215);  
}
`;
const ButtonContainer = styled.div`
width:100%;

`;
const Button = styled.button`
cursor: pointer;
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

const ProposalDetailContainer = styled.div`
width:50vw;
height:50vh;
background-color: #eee;
display:flex;
flex-flow: column nowrap;
justify-content: space-evenly;
align-items: center;
opacity:0.6;
`;
const ModalText = styled(Text)`
color: #575755;
font-weight:300;

`;
const TextNumbers = styled(Text)`
font-size:1.5rem;
color:rgb(0, 184, 215);

font-weight:300;

`;
const TextNumbersBig = styled(TextNumbers)`
color:rgb(0, 184, 215);
font-size:3rem;
font-weight:400;

`;

const ButtonModal = styled(Button)`
min-width:150px;
height: 2rem;

`;
export const Label = styled.label`
position:relative;
padding-top:20px;
margin-bottom:5px;
input:valid + span, input:focus + span {
  top:20px;
  font-size:12px;
  color:rgb(0, 184, 215);
  border-color: black;
  background: white;
}
input:valid, input:focus{
  transition-delay:0.1s;
  border-color: #222;
}
`;

export const Input = styled.input`

font-size:14px;
border:none;
-webkit-appearance:none;
-ms-appearance:none;
-moz-apprearance:none;
appearance: none;
background: none;
padding:12px;
border-radius:3px;
width: 250px;
outline:none;
border: 2px solid #ddd ;
transition: border-color 0.4s ease;
`;

export const Span = styled.span`
padding-right: 2px;
padding-left: 2px;
position:absolute;
font-size:14px;
left:12px;
top:calc(50% + 10px);
color:rgb(0, 184, 215);
transform:translateY(-50%);
transition: top 0.4s ease , font-size 0.4s ease , color 0.4s ease ;
`;


function Main() {
  const { loanValue, showInstallments, installmentsMonths, installmentMonthValue, isHired } = useSelector((state) => state.userReducer);
  const [modalIsOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch()


  function closeModal() {
    dispatch(allActions.userActions.willBeHired(false));

    setIsOpen(false);
    console.log("Fechou modal")
  }

  function hiredClickHandle() {
    dispatch(allActions.userActions.willBeHired(true));
  }

  function clickHandler(value) {
    dispatch(allActions.userActions.loanValue(value));
    console.log(value, loanValue)
  }

  function clickBackToLoan() {
    dispatch(allActions.userActions.backToLoan());
  }
  function clickHandlerInstallments(value, investment) {
    const futureValue = Number(investment) * (Math.pow(1.02, Number(value)));
    const futureValuePerMonth = futureValue / value;
    console.log(futureValue, futureValuePerMonth);
    dispatch(allActions.userActions.installmentsValue(value, futureValue, futureValuePerMonth));
    setIsOpen(true);
  }

  return (
    <>

      {showInstallments ? (<MainContainer>
        <FormContainer>
          <TextWithSVG>
            <AiOutlineLeft onClick={() => clickBackToLoan()} />
            {`Você selecionou R$ `}<strong>{`${loanValue}`}</strong>
          </TextWithSVG>
          <Text>

            EM QUANTAS PARCELAS?
          </Text>
          <ButtonContainer>
            <Button onClick={() => clickHandlerInstallments(12, loanValue)}>12X</Button>
            <Button onClick={() => clickHandlerInstallments(18, loanValue)}>18X</Button>
            <Button onClick={() => clickHandlerInstallments(24, loanValue)}>24X</Button>
            <Button onClick={() => clickHandlerInstallments(30, loanValue)}>30X</Button>
            <Button onClick={() => clickHandlerInstallments(36, loanValue)}>36X</Button>
            <Button onClick={() => clickHandlerInstallments(72, loanValue)}>72X</Button>
          </ButtonContainer>
        </FormContainer>
        <Image src={mainImage} width="430px" />
      </MainContainer>) : (
        <MainContainer>
          <FormContainer>
            <TextWithSVG>
              Empréstimo Pessoal Online
            </TextWithSVG>
            <Text>
              De quanto você precisa?
            </Text>
            <ButtonContainer>
              <Button onClick={() => clickHandler(5000)}>RS 5.000</Button>
              <Button onClick={() => clickHandler(10000)}>RS 10.000</Button>
              <Button onClick={() => clickHandler(20000)}>RS 20.000</Button>
              <Button onClick={() => clickHandler(30000)}>RS 30.000</Button>
              <Button onClick={() => clickHandler(50000)}>RS 50.000</Button>
              <Button onClick={() => clickHandler()}>Outro</Button>
            </ButtonContainer>
            <Label>
              <Input autoComplete="off" required type="number" name="login" />
              <Span>Qual o valor?</Span>
            </Label>
          </FormContainer>
          <Image src={mainImage} width="430px" />
        </MainContainer>
      )}


      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >

        <ProposalDetailContainer>
          {isHired ? (
            <>
              <ModalText>Obrigado por nos contratar</ModalText>
              <ButtonModal onClick={() => closeModal()}>Finalizar</ButtonModal>
            </>
          ) : (
            <>
              <ModalText>Parcela mensal aproximada</ModalText>
              <TextNumbers>{`${installmentsMonths}X`}</TextNumbers>
              <TextNumbersBig>{`R$ `}<strong>{`${installmentMonthValue.toFixed(2)}`}</strong></TextNumbersBig>
              <ButtonModal onClick={() => hiredClickHandle()}>Contratar</ButtonModal>
            </>
          )}

        </ProposalDetailContainer>

      </Modal>
    </>
  );
}
export default Main;