import {
    AboutUsContnainer,
} from './styles';
import AboutUsDesktop from './aboutUsDesktop/AboutUsDesktop';
import AboutUsMobile from './aboutUsMobile/AboutUsMobile'





export default function AboutUs() {


    return (
        <AboutUsContnainer>
            <AboutUsDesktop />
            <AboutUsMobile />
        </AboutUsContnainer>
    )
}