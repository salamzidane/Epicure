import React from "react";
import RestaurantCard from "../../components/cards/restaurantCard/RestaurantCard";
import SetWindowSize from "../../helpers/SetWindowSize";
import { RestaurantsPage } from "./styles";
import chefImage from '../../assets/restaurantsCards/Claro.svg';




export default function Restaurants() {


  const [data, setData] = React.useState<any[]>([]);

  React.useEffect(() => {
    fetch("/chefs")
      .then((res) => res.json())
      .then((data) => setData(data.restaurant_arry));
  }, []);
 console.log("my data is",data);
  const windowSize = SetWindowSize();

  

  return (
    <div>
      <RestaurantsPage windowSize={windowSize}>
     
      {data.map(detail => {
        return(<RestaurantCard RestaurantChef={detail.restaurantChef} RestaurantName={detail.restaurantName} RestaurantImage={chefImage} RestaurantRate={detail.restaurantRate} /> );
      })}
      </RestaurantsPage>
    </div>
  )
  
}



