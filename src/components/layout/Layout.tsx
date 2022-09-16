import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from '../footer/Footer';
import Header from '../header/header';
import HomePage from '../homePage/homePage/HomePage';
import Restaurants from '../../interface/restaurants/Restaurants';
import Chefs from '../../interface/chefs/Chefs';



export default function Layout() {
  return (


    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/chefs" element={<Chefs />} />
      </Routes>

      <Footer />
    </Router>


  );
}

