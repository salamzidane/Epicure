import styled from 'styled-components';
import headerlogo from '../../../assets/headerDesktopLogo.svg';


export const HeaderDesktopContainer = styled.div`
width: 100%;
height: 64px;
left: 0px;
top: 0px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

`;

// This include the logo and the Epicure name and menu
export const HeaderLeftSideContainer = styled.div`
display: flex;
margin-left: 5%;
display: flex;
flex-direction: row;
gap:20px;
justify-content: space-between;
align-items: center;
`;

export const HeaderLogo = styled.div`
width: 32.93px;
height: 32px;
background: url(${headerlogo});
&:hover{
cursor: pointer;
}


`;

export const HeaderAppName = styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 27px;
line-height: 33px;
letter-spacing: 1.35px;
color: #000000;
`;

//combined design for Chefs+Restaurants 
export const HeaderDesktopMenu = styled.a`
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


`;

//seperated design for Chefs+Restaurants Header Item 
export const MenuItem = styled.div`
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
&:hover{
border-bottom: 1.8px solid rgba(222, 146, 0, 0.9);
cursor: pointer;
}
`;




