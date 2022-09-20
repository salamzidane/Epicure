import { Interface } from "readline";
import styled from "styled-components";


interface Props {
    windowSize: number
}





export const ChefOfTheWeekMainContainer = styled.div`
//background: #FAFAFA;
height: fit-content;
background-color: pink;



`;





export const ChefOfTheWeekUpperContainer = styled.div`




`;


export const ChefOfTheWeekLowerContainer  = styled.div`




`;

export const ChefOfTheWeekTitleContainer = styled.div<Props>`
display: flex;
justify-content:${(props) => props.windowSize > 600 ? 'center' : 'flex-start'};
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
line-height: 35px;
letter-spacing: 1.25px;
text-transform: uppercase;
color: #000000;
font-size: ${(props) => props.windowSize > 600 ? '30px' : '18px'};

`;


export const ChefDescription = styled.div`




`;


export const ChefContainerTitle = styled.div`




`;


export const ChefCard = styled.div`




`;
