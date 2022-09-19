import styled from "styled-components";
import spicyIcon from '../../../assets/spicyIcon.svg';
import veganIcon from '../../../assets/veganIcon.svg';
import vegetarianIcon from '../../../assets/vegitarianIcon.svg';



interface Props {

  windowSize: number

}






export const DishesIconsBarContainer = styled.div<Props>`
width: 100%;
height:fit-content;
//background-color: #FAFAFA;
background-color: aqua;
padding-bottom:${(props) => props.windowSize > 600 ? '35.5px' : '24.02px'};

`;
export const SpicyIcon = styled.div`
background-image: url(${spicyIcon});


 
 `;
export const VegitarianIcon = styled.div`
background-image: url(${vegetarianIcon});


  `;
export const VeganIcon = styled.div`
background-image: url(${veganIcon});



`;

export const DishesIcons = styled.div<Props>`
display: flex;
flex-direction:${(props) => props.windowSize > 600 ? 'row' : 'column'};
justify-content: center;
align-items: center;

`;


export const DishesIconsBarTitle = styled.div<Props>`
font-size:${(props) => props.windowSize > 600 ? '30px' : '18px'};
letter-spacing:${(props) => props.windowSize > 600 ? '2.140000104904175px' : '1.25px'};
padding-top:${(props) => props.windowSize > 600 ? '35.5px' : '24px'};

display: flex;
justify-content: center;
font-family: Helvetica Neue;
font-weight: 200;
line-height: 35px;
letter-spacing: 2.140000104904175px;
text-align: center;
color: #000000;

`;



export const DishesCategory = styled.div<Props>`
display: flex;
flex-direction:${(props) => props.windowSize > 600 ? 'row' : 'column'};
justify-content: center;
align-items: center;
gap:${(props) => props.windowSize > 600 ? '141px' : '126px'};
font-size:${(props) => props.windowSize > 600 ? '30px' : '24px'};
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
text-align: center;
letter-spacing: 1.97px;
color: #000000;



`;
export const VeganTitle = styled.div`




`;
export const VegitarianTitle = styled.div`




`;
export const SpicyTitle = styled.div`




`;
