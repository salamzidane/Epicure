import styled from "styled-components";
import downloadApple from '../../../../assets/downloadApple.svg'
import downloadAndroid from '../../../../assets/downloadAndroid.svg'
import aboutUsMobileLogo from '../../../../assets/aboutUsMobileLogo.svg'




interface Props {
    windowSize: number
}
export const AboutUsMobileContainer = styled.div<Props>`

display: ${(props) => props.windowSize > 600 ? 'none' : 'flex'};
margin-bottom: ${(props) => props.windowSize > 600 ? 'none' : '202px'};
flex-direction: column;
align-items: stretch;
gap: 32px;
width: 100%;
height: fit-content;
background-color: #FAFAFA; 
margin-left: 5%;
`;


export const AboutUsMobileTitle=styled.div`

font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 20px;
line-height: 30px;
letter-spacing: 2.14px;
color: #000000;
flex: none;
order: 1;
flex-grow: 0;
margin-bottom:16px;
`;
export const AboutUsMobileText=styled.div`

left: 19px;
top: 3266px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 28px;
letter-spacing: 2.14px;
color: #000000;
order: 2;

`;

export const AboutUsAppleDownload=styled.a`
background:url(${downloadApple});
box-sizing: border-box;
display: flex;
flex-direction: row;
align-items: center;
padding: 7px 12px;
gap: 7px;
width: 180px;
height: 52px;

border: 0.5px solid #000000;
border-radius: 10px;
flex: none;
order: 1;
flex-grow: 0;
&:hover{
cursor: pointer;
}
`;
export const AboutUsAndroidDownload=styled.a`

background:url(${downloadAndroid});

box-sizing: border-box;
display: flex;
flex-direction: row;
align-items: center;
padding: 7px 12px;
gap: 7px;
width: 180px;
height: 52px;
border: 0.5px solid #000000;
border-radius: 10px;
flex: none;
order: 0;
flex-grow: 0;
&:hover{
cursor: pointer;
}
`;

export const AboutUsMobileDownload=styled.div`
box-sizing: border-box;
display: flex;
flex-direction: row;
align-items: center;
padding: 7px 12px;
gap: 7px;
width: 180px;
height: 52px;
flex: none;
order: 0;
flex-grow: 0;

`;

export const AboutUsMobileLogo=styled.div`
width: 102px;
height: 95px;
left: 19px;
top: 2920px;
background:url(${aboutUsMobileLogo});

`;








