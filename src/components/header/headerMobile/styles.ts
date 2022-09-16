import styled from "styled-components";
import headerlogo from '../../../assets/headerLogo.svg';



interface Props {
    MenuStatus: boolean
}





export const HeaderMobileContainer = styled.div`
width: 100%;
height: 64px;
left: 0px;
top: 0px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

`;



export const HeaderLogo = styled.div<Props>`
display: ${(props) => props.MenuStatus ? 'none' : 'flex'};
justify-content: center;
background:url(${headerlogo});
height: 32px;
width: 32.933685302734375px;
margin-left: 20%;
&:hover{
border: 2px solid rgba(222, 146, 0, 0.9);
cursor: pointer;
border-radius: 20px 20px 20px 20px;
justify-content: center;
align-items: center;
}

`;




export const HeaderMenuMobileContainer = styled.div<Props>`
display: ${(props) => props.MenuStatus ? 'flex' : 'none'};
flex-direction: column;
align-items: stretch;
padding: 40px 12px 24px 20px;
gap: 24px;
width: 100%;
height: fit-content;
z-index: 2;
background: #FFFFFF;
box-shadow: 2px 4px 10px rgba(175, 175, 175, 0.25);
position: fixed;
top: 72px;
left: 0px;
`;

export const MenuItem = styled.a`

display:flex;
flex-direction: row;
align-items: center;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 22px;
letter-spacing: 1.92px;
color: #000000;
margin-left: 5%;

&:hover{
border-bottom: 1.8px solid rgba(222, 146, 0, 0.9);
width: fit-content;
cursor: pointer;
}
`;


