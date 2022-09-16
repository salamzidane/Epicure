import styled from "styled-components";

interface Props {
    windowSize: number
}


export const ChefsPage = styled.div<Props>`
flex-direction: ${(props) => props.windowSize > 600 ? 'row' : 'column'};
flex-wrap: ${(props) => props.windowSize > 600 ? 'wrap' : 'nowrap'};
align-items: center;
display: flex;
justify-content: center;
row-gap: 10px;
column-gap: 30px;
z-index: auto;
`;





