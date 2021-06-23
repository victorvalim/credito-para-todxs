import styled from "styled-components";

export const MainContainer = styled.main`
background: rgb(242, 242, 242);
width:100vw;
padding-bottom:1rem;

`;
export const Text = styled.h1`
padding:1rem;
text-align:center;
color:rgb(0, 184, 215);
background:transparent;
`;

export const ImageContainer = styled.div`
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
export const ItemContainer = styled.div`
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

export const Image = styled.img`
`;

export const TextoContainerStrong = styled(Text)`
padding:0.2rem;
text-align:center;
color: rgb(106, 106, 106);
font-size: 1.25rem;
font-weight: 700;
`;
export const TextoContainer = styled(TextoContainerStrong)`
text-align:center;

color: rgb(23, 28, 37);
font-size: 0.95rem;
font-weight: 400;
line-height: 1.5;
letter-spacing: 0.03rem;

`;
export const Button = styled.button`
display:block;
width:150px;
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


&:hover {

  background-color: gray;

}
`;
