import styled from "styled-components";



interface Props {
    MenuStatus: boolean
}


export const HeaderMenuMobileContainer = styled.div<Props>`
display: ${(props) => props.MenuStatus  ? 'flex' : 'none'};
flex-direction: column;
align-items: stretch;
padding: 40px 12px 24px 20px;
gap: 24px;
position: fixed;
width: 100%;
height: fit-content;
z-index:2;
background: #FFFFFF;
box-shadow: 2px 4px 10px rgba(175, 175, 175, 0.25);

`;

export const MenuItem = styled.a`

display:flex;
flex-direction: row;
gap: 32px;
justify-content: space-between;
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



