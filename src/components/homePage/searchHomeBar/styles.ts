import styled from 'styled-components';
import searchBarBackground from '../../../assets/searchBarBackground.svg';
import searchLogo from '../../../assets/searchBarIcon.svg'



export const SearchHomeBarContainer = styled.div`
display:flex;
justify-content:center;
align-items: center;
flex-direction: row;
width: 100%;
left: 0px;
top: 64px;

`;


export const SearchBarBackground = styled.div`
width: 100%;
height: 48vw;
display: flex;
background-image: url(${searchBarBackground}) ;
background-size: 100%;
background-repeat: no-repeat;
flex-direction: row;
`;



export const SearchHomeBarTitleContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap:4vw;
padding: 3.5vw 2vw;
position: absolute;
background: rgba(255, 255, 255, 0.88);
`;



export const SearchHomeBarTitle = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 8vw;
line-height: 8.098vw;
letter-spacing: 0.202vw;
color: #000000;

`;
export const SearchHomeBarInput = styled.div`
display: flex;
justify-content: center;
align-items: center;
box-sizing: border-box;
display: flex;
flex-direction: row;
align-items: center;
gap: 16px;
width: 87vw;
height: 6vw;
border: 0.5px solid #000000;
border-radius: 0.41vw;

`;

export const SearchInput = styled.input`
width:68vw;
height: 4vw;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 4.459vw;
line-height: 4.971vw;
letter-spacing:0.132vw;
color: #000000;
border: 0;
background: transparent;
background-size: 2.9vw;
flex-direction: row;
justify-content: center;
`;
export const SearchHomeBarLogo = styled.div`
width: 5vw;
 height: 4.918vw;
background:url(${searchLogo});
background-repeat: no-repeat;
background-size: 100%;

`;
