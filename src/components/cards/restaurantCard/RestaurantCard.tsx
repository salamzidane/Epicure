import {
    RestaurantName,
    RestaurantImage,
    RestaurantRate,
    RestaurantChef,
    RestaurantCardContainer,
    RestaurantDetails
} from './styles';
//import { Rating } from 'react-simple-star-rating'

interface Restaurant {
    RestaurantName: string;
    RestaurantImage: string;
    RestaurantRate: number;
    RestaurantChef: string;
}





export default function RestaurantCard(props: Restaurant) {
    
console.log("lkmkl;", props.RestaurantImage);

    return (
        <div>
            <RestaurantCardContainer>

                <RestaurantImage><img src={props.RestaurantImage} /></RestaurantImage>
                <RestaurantDetails>
                    <RestaurantName>{props.RestaurantName}</RestaurantName>
                    <RestaurantChef>{props.RestaurantChef}</RestaurantChef>

                    <RestaurantRate>
                    {/* <RestaurantRate src='{getRate()}'> */}

                        {/* <Rating 
                        // initialValue={props.RestaurantRate} 
                        // ratingValue={props.RestaurantRate} 
                        // readonly={true}
                        // fillColor={"#DE9200"}
                        //  emptyColor={"#E5E5E5"}
                        // style={{border:"#DE9200"}} /> */}

                    </RestaurantRate>
                </RestaurantDetails>


            </RestaurantCardContainer>

        </div>
    );
}







