import styled from 'styled-components';
import searchBarBackground from '../../../assets/searchBarBackground.svg';
import searchLogo from '../../../assets/searchBarIcon.svg'



export const SearchHomeBarContainer = styled.div`
display:flex;
justify-content:center;
flex-direction: row;
width: 100%;
left: 0px;
top: 64px;
padding:36px, 126px, 36px, 126px;

`;


export const SearchBarBackground=styled.div`
width: 100%;
height: 71.311vw;
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
gap:18px;
margin-top: 11%;
padding: 3.689vw 12.91vw;
position: absolute;
//top:10%;
background: rgba(255, 255, 255, 0.88);
`;

export const SearchHomeBarTitle = styled.div`

font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 3.279vw;
line-height: 4.098vw;
letter-spacing: 0.202vw;
color: #000000;

`;

export const SearchHomeBarInput = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding: 6px 12px;
gap: 16px;
width: 51.742vw;
height: 4.918vw;
border: 0.5px solid #000000;
border-radius: 0.41vw;

`;

export const SearchLogo = styled.div`
width: 32px;
height: 32px;

`


export const SearchInput = styled.input`
width: 43.34vw;
height: 2.971vw;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 2.459vw;
line-height: 2.971vw;
letter-spacing:0.132vw;
color: #000000;
border: 0;
background: transparent;
flex: none;
order: 1;
flex-grow: 1;
flex-direction: row;
background: url(${searchLogo}) no-repeat;
background-size: 2.9vw;
padding-left: 5.3vw;
`