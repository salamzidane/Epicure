import styled from "styled-components";





interface Props {
    windowSize: number
}
export const AboutUsMobileContainer = styled.div<Props>`
display: ${(props) => props.windowSize > 600 ? 'none' : 'flex'};
flex-direction: column;
gap: 32px;
margin-left: 5%;
`;


export const AboutUsMobileTitle = styled.div`
width: 100%;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 20px;
line-height: 30px;
letter-spacing: 2.14px;
color: #000000;
`;

export const AboutUsMobileText = styled.div`
display: flex;
flex-direction: row;
width: 100%;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 28px;
letter-spacing: 2.14px;
color: #000000;
margin-bottom: 48px;

`;

export const AboutUsAppleDownload = styled.img`
box-sizing: border-box;
gap: 7px;
width: 180px;
height: 52px;
border-radius: 10px;
flex: none;

&:hover{
cursor: pointer;
}
`;
export const AboutUsAndroidDownload = styled.img`
box-sizing: border-box;
gap: 7px;
width: 180px;
height: 52px;
border-radius: 10px;
flex: none;
&:hover{
cursor: pointer;
}
`;

export const AboutUsMobileDownload = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: column;
gap: 7px;
width: 180px;
height: 52px;
margin-bottom: 59.5px;
`;

export const AboutUsMobileLogo = styled.img`
width: 102px;
height: 95px;
margin-top: 24px;
`;








