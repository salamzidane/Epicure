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
                <FooterElement>Contact Us</FooterElement>
                <FooterElement>Terms Of Use</FooterElement>
                <FooterElement>Privacy Policy</FooterElement>
            </FooterContainer>
        </div>

    )
}