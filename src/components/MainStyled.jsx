import styled, { keyframes } from "styled-components";

const rotate = keyframes`
0% {
  transform: scale(1)
}
50% {
  transform: scale(1.2)
}
100% {
  transform: scale(1)
}
`;
export const MainContainer = styled.main`
width:100vw;
padding:4rem;
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
-webkit-box-align: center;
align-items: center;
@media (max-width: 1024px){
  padding:1rem;

}
`;
export const Image = styled.img`
float:right;
width: 429px;
height: auto;
@media (max-width: 1024px){
  display:none;
}
`;
export const FormContainer = styled.div`
display: flex;
flex-flow: column wrap;
width: 45vw;
@media (max-width: 1024px){
  width: 100vw;
}
`;
export const Text = styled.p`
margin:0.5rem;
font-size:2rem;
color:rgb(23, 28, 37);
background:transparent;
font-weight:700;
@media (max-width: 1024px){
  text-align: center;
}
`;
export const TextWithSVG = styled(Text)`
font-size:1.5rem;
color:grey;
font-weight:400;

svg{
  padding-top:7px;
  cursor:pointer;
  color:rgb(0, 184, 215);  
}
`;
export const ButtonContainer = styled.div`
width:100%;
@media (max-width: 1024px){
  display: flex;
flex-wrap: wrap;
justify-content: space-between;
-webkit-box-align: center;
align-items: center;

}
`;
export const Button = styled.button`
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
font-weight: 700;
&:hover {

  background-color: gray;

  @media (max-width: 600px){
    background-color: rgb(0, 184, 215)
  }
}
&:active {
  animation: ${rotate} 0.2s linear;
  @media (max-width: 600px){
    animation: ${rotate} 0.1s linear;
  }
}
`;

export const ProposalDetailContainer = styled.div`
width:50vw;
height:50vh;
background-color: #eee;
display:flex;
flex-flow: column nowrap;
justify-content: space-evenly;
align-items: center;
opacity:0.8;
@media (max-width: 1024px){
width:80vw;

}

`;
export const ModalText = styled(Text)`
color: #575755;
font-weight:300;
text-align: center;
`;

export const TextNumbers = styled(Text)`
font-size:1.5rem;
color:rgb(0, 184, 215);

font-weight:300;

`;
export const TextNumbersBig = styled(TextNumbers)`
color:rgb(0, 184, 215);
font-size:3rem;
font-weight:400;

`;

export const ButtonModal = styled(Button)`
min-width:150px;
height: 3rem;
`;
export const Label = styled.label`
position:relative;
padding-top:20px;
margin:0.5rem;input:valid + span, input:focus + span {
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
export const ButtonInput = styled(Button)`
min-width:120px;
height: 2.5rem;
&:disabled{
  background-color:grey;
}

`;

export const ModalTextWithShadowBox = styled(ModalText)`
color: gray;
font-size:15px;
font-weight:200;
text-align: center;
border-top: 0.1px solid gray;


`;