import AboutUs from '../aboutUs/AboutUs';
import DishesIconsBar from '../dishesIconsBar/DishesIconsBar';
import SearchHomeBar from '../searchHomeBar/SearchHomeBar';


export default function HomePageDesktop() {

  return (
    <div>
      <SearchHomeBar />
      <DishesIconsBar />
      <AboutUs />
    </div>
  )
}
