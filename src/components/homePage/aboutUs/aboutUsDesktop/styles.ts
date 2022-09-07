import styled from "styled-components";
import downloadApple from '../../../../assets/downloadApple.svg'
import downloadAndroid from '../../../../assets/downloadAndroid.svg'
import aboutUsDesktopLogo from '../../../../assets/aboutUsDesktopLogo.svg'




interface Props {
    windowSize: number
}

export const AboutUsDesktopContainer = styled.div<Props>`
display: ${(props) => props.windowSize > 600 ? 'flex' : 'none'};
margin-bottom: ${(props) => props.windowSize > 600 ? '84px' : 'none'};
background-color: #FAFAFA; 
width: 100%;
height:50px;
flex-direction: row;
padding-top: 40px;
padding-bottom:47px;
justify-content: space-between;
gap: 40px;
`;

export const AboutUsRightContainer = styled.div`
margin-right:5%;

`;

export const AboutUsLeftContainer = styled.div`
margin-left:5%;
`;

export const AboutUsDesktopTitle = styled.div`
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

export const AboutUsDesktopText = styled.div`
height: 330px;
width: 569px;
flex-direction: row;
border-radius: nullpx;
font-family: 'Helvetica Neue';
font-size: 20px;
font-weight: 200;
line-height: 30px;
letter-spacing: 2.140000104904175px;
text-align: left;
font-style: normal;
font-weight: 200;
font-size: 20px;
line-height: 30px;
letter-spacing: 2.14px;
color: #000000;
flex: none;
order: 1;
flex-grow: 0;
`;

export const AboutUsAppleDownload = styled.a`
background:url(${downloadApple});
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
&:hover{
cursor: pointer;
}
`;

export const AboutUsAndroidDownload = styled.a`
background:url(${downloadAndroid});
box-sizing: border-box;
display: flex;
flex-direction: row;
align-items: center;
padding: 7px 12px;
gap: 7px;
width: 180px;
height: 52px;
flex: none;
order: 1;
flex-grow: 0;
&:hover{
cursor: pointer;
}
`;

export const AboutUsDesktopDownload = styled.div`
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

export const AboutUsDesktopLogo = styled.div`
width: 178.22px;
height: 166px;
flex-direction: row;
position: relative;
//align-items: center;
//justify-content: center;
display: flex;
background:url(${aboutUsDesktopLogo});

`;








