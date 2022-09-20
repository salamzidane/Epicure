import SetWindowSize from '../../../helpers/SetWindowSize';
import {
    DishesIconsBarContainer,
    SpicyIcon,
    VegitarianIcon,
    VeganIcon,
    DishesIconsBarTitle,
    VeganTitle,
    VegitarianTitle,
    SpicyTitle,
    DishesIconsContainer,
    SpicyContainer,
    VeganContainer,
    VegitarianContainer
} from './styles';
import vegitarianIcon from '../../../assets/vegitarianIcon.svg';
import spicyIcon from '../../../assets/spicyIcon.svg';
import veganIcon from '../../../assets/veganIcon.svg';


export default function DishesIconsBar() {

    const windowSize = SetWindowSize();
    return (



        <DishesIconsBarContainer windowSize={windowSize}>
            <DishesIconsBarTitle windowSize={windowSize}>THE MEANING OF OUR ICONS:</DishesIconsBarTitle>

            <DishesIconsContainer windowSize={windowSize}>

                <SpicyContainer windowSize={windowSize}>
                    <SpicyIcon src={spicyIcon} windowSize={windowSize} />
                    <SpicyTitle>Spicy</SpicyTitle>
                </SpicyContainer>

                <VegitarianContainer windowSize={windowSize}>
                    <VegitarianIcon src={vegitarianIcon} windowSize={windowSize} />
                    <VegitarianTitle>Vegitarian</VegitarianTitle>
                </VegitarianContainer>

                <VeganContainer windowSize={windowSize}>
                    <VeganIcon src={veganIcon} windowSize={windowSize} />
                    <VeganTitle>Vegan</VeganTitle>
                </VeganContainer>

            </DishesIconsContainer>

        </DishesIconsBarContainer>


    )
}