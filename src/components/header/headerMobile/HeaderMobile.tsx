import HeaderIcons from '../headerIcons/HeaderIcons';
import { useState } from "react";
import Hamburger from 'hamburger-react';
import {
  HeaderMobileContainer,
  HeaderLogo,
  HeaderMenuMobileContainer,
  MenuItem
} from './styles';
import { Link } from 'react-router-dom';



export default function HeadeMobile() {


  const [showMenu, setShowMenu] = useState(false);
  const toggleShowMenu = () => { setShowMenu(!showMenu); }



  return (
    <HeaderMobileContainer>


      <Hamburger color="#000000" distance="lg" size={22} toggled={showMenu} toggle={toggleShowMenu} />


      <HeaderMenuMobileContainer MenuStatus={showMenu}>
        <MenuItem ><Link to="/chefs" >Chefs</Link></MenuItem>
        <MenuItem ><Link to="/restaurants" >Restaurants</Link></MenuItem>
        <MenuItem >Contact Us</MenuItem>
        <MenuItem >Terms of Use</MenuItem>
        <MenuItem >Privacy Policy</MenuItem>

      </HeaderMenuMobileContainer>

      <Link to="/" ><HeaderLogo MenuStatus={showMenu}/></Link>
        <HeaderIcons hideIcons={showMenu} />

    </HeaderMobileContainer>
  )
}



          