import styled from "styled-components";




interface Props {

  windowSize: number

}


export const DishesIconsBarContainer = styled.div<Props>`
width: 100%;
height:fit-content;
background-color: #FAFAFA;
padding-bottom:${(props) => props.windowSize > 600 ? '35.5px' : '24.02px'};


`;
export const SpicyIcon = styled.img<Props>`



 `;

export const VegitarianIcon = styled.img<Props>`


  `;

export const VeganIcon = styled.img<Props>`


`;

export const DishesIconsContainer = styled.div<Props>`
display: flex;
flex-direction:${(props) => props.windowSize > 600 ? 'row' : 'column'};
justify-content: center;
align-items: center;
gap:${(props) => props.windowSize > 600 ? '110px' : '58px'};
font-size:${(props) => props.windowSize > 600 ? '30px' : '24px'};
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
text-align: center;
letter-spacing: 1.97px;
color: #000000;
`;


export const DishesIconsBarTitle = styled.div<Props>`
font-size:${(props) => props.windowSize > 600 ? '30px' : '18px'};
letter-spacing:${(props) => props.windowSize > 600 ? '2.140000104904175px' : '1.25px'};
padding-top:${(props) => props.windowSize > 600 ? '35.5px' : '24px'};
font-family: Helvetica Neue;
font-weight: 200;
line-height: 35px;
letter-spacing: 2.140000104904175px;
text-align: center;
color: #000000;
padding-bottom: 5%;

`;

export const VeganTitle = styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
text-align: center;
letter-spacing: 1.97px;
color: #000000;

`;
export const VegitarianTitle = styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
text-align: center;
letter-spacing: 1.97px;
color: #000000;

`;
export const SpicyTitle = styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
text-align: center;
letter-spacing: 1.97px;
color: #000000;



`;
export const SpicyContainer = styled.div<Props>`
display: flex;
flex-direction: column;
gap:${(props) => props.windowSize > 600 ? '32px' : '33px'};

`;
export const VegitarianContainer = styled.div<Props>`
display: flex;
flex-direction: column;
align-items:center;
gap:${(props) => props.windowSize > 600 ? '32px' : '33px'};

`;
export const VeganContainer = styled.div<Props>`
display: flex;
flex-direction: column;
align-items: center;
gap:${(props) => props.windowSize > 600 ? '32px' : '33px'};

`;