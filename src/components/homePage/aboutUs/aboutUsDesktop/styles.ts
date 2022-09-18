import styled from "styled-components";
import downloadApple from '../../../../assets/downloadApple.svg'
import downloadAndroid from '../../../../assets/downloadAndroid.svg'
import aboutUsDesktopLogo from '../../../../assets/aboutUsDesktopLogo.svg'




interface Props {
    windowSize: number
}

export const AboutUsDesktopContainer = styled.div<Props>`
display: ${(props) => props.windowSize > 600 ? 'flex' : 'none'};
flex-direction: row;
align-items: center;

`;

export const AboutUsRightContainer = styled.div`
margin-right:10%;
margin-left: 15%;
`;

export const AboutUsLeftContainer = styled.div`
margin-left: 5%;
`;

export const AboutUsDesktopTitle = styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 20px;
line-height: 30px;
letter-spacing: 2.14px;
color: #000000;
margin-bottom:16px;
margin-top: 40px;
`;

export const AboutUsDesktopText = styled.div`
margin-bottom: 32px;
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
`;

export const AboutUsAppleDownload = styled.a`
background:url(${downloadApple});
box-sizing: border-box;
display: flex;
flex-direction: row;
padding: 7px 12px;
width: 180px;
height: 52px;
flex: none;
order: 0;
&:hover{
cursor: pointer;
}
`;

export const AboutUsAndroidDownload = styled.a`
background:url(${downloadAndroid});
box-sizing: border-box;
display: flex;
flex-direction: row;
padding: 7px 12px;
width: 180px;
height: 52px;
flex: none;
order: 1;
&:hover{
cursor: pointer;
}
`;

export const AboutUsDesktopDownload = styled.div`
display: flex;
flex-direction: row;
margin-bottom: 47px;
gap: 7px;
width: 180px;
height: 52px;
`;

export const AboutUsDesktopLogo = styled.div`
width: 178.22px;
height: 166px;
background:url(${aboutUsDesktopLogo});
`;








