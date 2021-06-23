import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import mainImage from '../images/mainImage.png'
import { AiOutlineLeft } from "react-icons/ai";
import allActions from '../actions';
import Modal from 'react-modal';
import { useState } from 'react';
import { MainContainer, Image, FormContainer, Text, TextWithSVG, ButtonContainer, Button, ProposalDetailContainer, ModalText, TextNumbers, TextNumbersBig, ButtonModal, Label, Input, Span, ButtonInput, ModalTextWithShadowBox } from './MainStyled'

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
    'border': '3px solid rgb(0, 184, 215)',

  },
};


function Main() {

  const { loanValue, showInstallments, installmentsMonths, installmentMonthValue, isHired, showOtherContainer } = useSelector((state) => state.userReducer);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState(null);

  const dispatch = useDispatch()

  function changeHandler({ target: { value } }) {
    const newValue = value.replace(/[^0-9]/g, "");
    setInput((state) => +newValue)
  }

  function closeModal() {
    dispatch(allActions.userActions.willBeHired(false));
    setIsOpen(false);
  }


  function hiredClickHandle() {
    dispatch(allActions.userActions.willBeHired(true));
    dispatch(allActions.userActions.resetGlobalState());
    setInput((state) => null)

  }

  function clickHandler(value) {
    dispatch(allActions.userActions.loanValue(value));
    dispatch(allActions.userActions.showOtherContainer(false));
    setInput((state) => null)
  }

  function clickBackToLoan() {
    dispatch(allActions.userActions.backToLoan());
  }

  function clickHandlerInstallments(value, investment) {
    const futureValue = Number(investment) * (Math.pow(1.02, Number(value)));
    const futureValuePerMonth = futureValue / value;
    dispatch(allActions.userActions.installmentsValue(value, futureValue, futureValuePerMonth));
    setIsOpen(true);
  }

  function otherClickHandler(value) {
    dispatch(allActions.userActions.showOtherContainer(value));
  }

  function otherValueClickHandler(value) {
    dispatch(allActions.userActions.loanValue(value));
  }

  return (

    <>

      {showInstallments ? (

        <MainContainer>
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
        </MainContainer>

      ) : (

        <MainContainer>
          <FormContainer>
            <TextWithSVG>
              Empréstimo Pessoal Online
            </TextWithSVG>
            <Text>
              De quanto você precisa?
            </Text>
            <ButtonContainer>
              <Button onClick={() => clickHandler(5000)}>R$ 5.000</Button>
              <Button onClick={() => clickHandler(10000)}>R$ 10.000</Button>
              <Button onClick={() => clickHandler(20000)}>R$ 20.000</Button>
              <Button onClick={() => clickHandler(30000)}>R$ 30.000</Button>
              <Button onClick={() => clickHandler(50000)}>R$ 50.000</Button>
              <Button onClick={() => otherClickHandler(true)}>Outro</Button>
            </ButtonContainer>

            {showOtherContainer && (

              <>
                <Label>
                  <Input autoComplete="off" required type="text" onChange={(e) => changeHandler(e)} value={input} name="login" />
                  <Span>Qual o valor?</Span>
                </Label>
                <ButtonInput disabled={!input} onClick={() => otherValueClickHandler(input)}>Continuar</ButtonInput>
              </>
            )}
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
              <ModalText>Obrigado por Contratar nossos Serviços !!!</ModalText>
              <ButtonModal onClick={() => closeModal()}>Finalizar</ButtonModal>
            </>

          ) : (
            <>
              <ModalText>Parcela mensal aproximada</ModalText>
              <TextNumbers>{`${installmentsMonths}X`}</TextNumbers>
              <TextNumbersBig>{`R$ `}<strong>{`${installmentMonthValue.toFixed(2)}`}</strong></TextNumbersBig>
              <ButtonModal onClick={() => hiredClickHandle()}>Contratar</ButtonModal>
              <ModalTextWithShadowBox>Estamos considerando as taxas médias oferecidas pelos parceiros.</ModalTextWithShadowBox>
            </>
          )}

        </ProposalDetailContainer>

      </Modal>

    </>

  );
}
export default Main;