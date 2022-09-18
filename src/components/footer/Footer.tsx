import SetWindowSize from '../../helpers/SetWindowSize';
import {
    FooterContainer,
    FooterElement
} from './styles';



export default function Footer() {

    const windowSize = SetWindowSize();


    return (
        <div>
            
            <FooterContainer windowSize={windowSize}>
                <FooterElement windowSize={windowSize}>Contact Us</FooterElement>
                <FooterElement windowSize={windowSize}>Terms Of Use</FooterElement>
                <FooterElement windowSize={windowSize}>Privacy Policy</FooterElement>
            </FooterContainer>
        </div>

    )
}