import styled from "styled-components";

interface Props {
    windowSize: number
}

export const FooterContainer = styled.div<Props>`
display: flex;
justify-content: center;
gap: 40px;
width:100%;
bottom: 0;
background: #FFFFFF;
flex-direction: ${(props) => props.windowSize > 600 ? 'row' : 'column'};
align-items: ${(props) => props.windowSize > 600 ? 'center' : 'flex-start'};
margin-left: ${(props) => props.windowSize > 600 ? '0' : '5%'};
margin-bottom: ${(props) => props.windowSize > 600 ? '52px' : '24px'};
height: ${(props) => props.windowSize > 600 ? '84px' : '202px'};
//position: fixed;
`;

export const FooterElement = styled.a`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 22px;
letter-spacing: 1.92px;
color: #000000;
&:hover{
border-bottom: 1.8px solid rgba(222, 146, 0, 0.9);
cursor: pointer;
}
`;