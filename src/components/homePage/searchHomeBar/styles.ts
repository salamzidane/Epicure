import styled from 'styled-components';
import searchBarBackground from '../../../assets/searchBarBackground.svg';
import searchLogo from '../../../assets/searchBarIcon.svg'



export const SearchHomeBarContainer = styled.div`
display:flex;
justify-content:center;
//align-items: stretch;
flex-direction: row;
//position: absolute;
width: 100%;
left: 0px;
top: 64px;

padding:36px, 126px, 36px, 126px;

`;


export const SearchBarBackground=styled.div`
width: 100%;
height: 696px;
position: fixed;
background-image: url(${searchBarBackground}) ;
background-size: 100%;
background-repeat: no-repeat;

`;


export const SearchHomeBarTitleContainer = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap:18px;
margin-top: 11%;
padding: 36px 126px;
position: fixed;
background: rgba(255, 255, 255, 0.88);
`;

export const SearchHomeBarTitle = styled.div`

font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 32px;
line-height: 40px;
letter-spacing: 1.97px;
color: #000000;
`;

export const SearchHomeBarInput = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: row;
align-items: center;
padding: 6px 12px;
gap: 16px;
width: 505px;
height: 48px;
border: 0.5px solid #000000;
border-radius: 4px;
`;

export const SearchLogo = styled.div`
width: 32px;
height: 32px;
background: url(${searchLogo});
`


export const SearchInput = styled.input`
width: 423px;
height: 29px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 24px;
line-height: 29px;
letter-spacing: 1.29px;
color: #000000;
border: 0;
background: transparent;
flex: none;
order: 1;
flex-grow: 1;

`