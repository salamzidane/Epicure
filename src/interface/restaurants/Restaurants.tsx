import RestaurantCard from "../../components/cards/restaurantCard/RestaurantCard";
import SetWindowSize from "../../helpers/SetWindowSize";
import { RestaurantsPage } from "./styles";
import chefImage from '../../assets/restaurantsCards/Claro.svg';




export default function Restaurants() {

  const array_RestaurantsName = [
    {
      restaurantImage:chefImage,
      restaurantName:"shavor",
      restaurantChef:"soso",
      restaurantRate:30
    },
    {
      restaurantImage:chefImage,
      restaurantName:"safaa",
      restaurantChef:"soso",
      restaurantRate:100
    },
    {
      restaurantImage:chefImage,
      restaurantName:"shawatina",
      restaurantChef:"gordon",
      restaurantRate:20
    }
  ];
  
  const windowSize = SetWindowSize();

  

  return (
    <div>
      <RestaurantsPage windowSize={windowSize}>
     
      {array_RestaurantsName.map(detail => {
        return(<RestaurantCard RestaurantChef={detail.restaurantChef} RestaurantName={detail.restaurantName} RestaurantImage={detail.restaurantImage} RestaurantRate={detail.restaurantRate} /> );
      })}
      </RestaurantsPage>
    </div>
  )
  
}



