import styled from 'styled-components';

interface Props {
    MenuStatus: boolean
}


// This include the (search+profile+bag) icons
export const HeaderIconsContainer = styled.div<Props>`
display:flex;
margin-right: 5%;
display: ${(props) => props.MenuStatus ? 'none' : 'flex'};
flex-direction: row;
gap: 20px;
justify-content: space-between;
align-items: center;
`;


export const HeaderSearchIcon = styled.img`
width: 24px;
height: 24px;
background-repeat: no-repeat;
&:hover{
border-bottom: 1.8px solid rgba(222, 146, 0, 0.9);
cursor: pointer;
}
`;

export const HeaderProfileIcon = styled.img`
width: 24px;
height: 24px;
background-repeat: no-repeat;
&:hover{
border-bottom: 1.8px solid rgba(222, 146, 0, 0.9);
cursor: pointer;
}
`;

export const HeaderBagIcon = styled.img`

width: 24px;
height: 24px;
background-repeat: no-repeat;
&:hover{
border-bottom: 1.8px solid rgba(222, 146, 0, 0.9);
cursor: pointer;
}
`;
