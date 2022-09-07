import {
    RestaurantName,
    RestaurantImage,
    RestaurantRate,
    RestaurantChef
} from './styles';

interface Restaurant {
    RestaurantName: string;
    RestaurantImage: string;
    RestaurantRate: string;
    RestaurantChef: string;
}



export default function RestaurantCard(props: Restaurant) {



    return (
        <div>


            <RestaurantImage><img src='{props.Image}' /></RestaurantImage>
            <RestaurantRate>{props.RestaurantRate}</RestaurantRate>
            <RestaurantChef>{props.RestaurantChef}</RestaurantChef>
            <RestaurantName>{props.RestaurantName}</RestaurantName>


        </div>
    );
}