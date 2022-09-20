import AboutUs from '../aboutUs/AboutUs';
import ChefOfTheWeek from '../chefOfTheWeek/ChefOfTheWeek';
import DishesIconsBar from '../dishesIconsBar/DishesIconsBar';
import SearchHomeBar from '../searchHomeBar/SearchHomeBar';


export default function HomePageDesktop() {

  return (
    <div>
      <SearchHomeBar />
      <DishesIconsBar />
      <ChefOfTheWeek />

      <AboutUs />
    </div>
  )
}
