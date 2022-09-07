import SetWindowSize from '../../../../helpers/SetWindowSize';
import {
    AboutUsMobileContainer,
    AboutUsMobileTitle,
    AboutUsMobileText,
    AboutUsMobileLogo,
    AboutUsAppleDownload,
    AboutUsAndroidDownload,
    AboutUsMobileDownload,
} from './styles';


export default function AboutUsMobile() {

    const windowSize = SetWindowSize();

    return (

        
               <AboutUsMobileContainer windowSize={windowSize}>
                                <AboutUsMobileLogo />
                                <AboutUsMobileDownload>
                    <AboutUsAndroidDownload />
                    <AboutUsAppleDownload />
                </AboutUsMobileDownload>

                <AboutUsMobileTitle>ABOUT US:</AboutUsMobileTitle>

                <AboutUsMobileText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non
                    eu ipsum. Cras porta malesuada eros, eget blandit
                    turpis suscipit at.  Vestibulum sed massa in magna sodales porta.  Vivamus elit urna,
                    dignissim a vestibulum.
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum no
                    eu ipsum. Cras porta malesuada eros.
                </AboutUsMobileText>
                
                </AboutUsMobileContainer>

    )
}