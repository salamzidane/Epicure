import SetWindowSize from '../../../../helpers/SetWindowSize';
import downloadApple from '../../../../assets/downloadApple.svg'
import downloadAndroid from '../../../../assets/downloadAndroid.svg'
import aboutUsDesktopLogo from '../../../../assets/aboutUsDesktopLogo.svg'
import {
    AboutUsDesktopContainer,
    AboutUsDesktopTitle,
    AboutUsDesktopText,
    AboutUsDesktopLogo,
    AboutUsAppleDownload,
    AboutUsAndroidDownload,
    AboutUsDesktopDownload,
    AboutUsRightContainer,
    AboutUsLeftContainer
} from './styles';


export default function AboutUsDesktop() {

    const windowSize = SetWindowSize();

    return (
        <AboutUsDesktopContainer windowSize={windowSize}>

            <AboutUsLeftContainer>
                <AboutUsDesktopTitle>ABOUT US:</AboutUsDesktopTitle>

                <AboutUsDesktopText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non
                    eu ipsum. Cras porta malesuada eros, eget blandit
                    turpis suscipit at.  Vestibulum sed massa in magna sodales porta.  Vivamus elit urna,
                    dignissim a vestibulum.<br />
                    <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum no
                    eu ipsum. Cras porta malesuada eros.
                </AboutUsDesktopText>

                <AboutUsDesktopDownload>
                    <AboutUsAndroidDownload src={downloadAndroid} />
                    <AboutUsAppleDownload src={downloadApple} />
                </AboutUsDesktopDownload>

            </AboutUsLeftContainer>


            <AboutUsRightContainer>
                <AboutUsDesktopLogo src={aboutUsDesktopLogo} />
            </AboutUsRightContainer>

        </AboutUsDesktopContainer>

    )
}