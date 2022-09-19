import SetWindowSize from '../../../helpers/SetWindowSize';
import {
    DishesIconsBarContainer,
    SpicyIcon,
    VegitarianIcon,
    VeganIcon,
    DishesIconsBarTitle,
    DishesIcons,
    DishesCategory,
    VeganTitle,
    VegitarianTitle,
    SpicyTitle
} from './styles';




export default function DishesIconsBar() {

    const windowSize = SetWindowSize();
    return (

        <DishesIconsBarContainer windowSize={windowSize}>
            <DishesIconsBarTitle windowSize={windowSize}>THE MEANING OF OUR ICONS:</DishesIconsBarTitle>

            <DishesIcons windowSize={windowSize}>
                <SpicyIcon />
                <VegitarianIcon />
                <VeganIcon />
            </DishesIcons>
            <DishesCategory windowSize={windowSize}>

                <SpicyTitle>Spicy</SpicyTitle>
                <VegitarianTitle>Vegitarian</VegitarianTitle>
                <VeganTitle>Vegan</VeganTitle>

            </DishesCategory>


        </DishesIconsBarContainer>


    )
}