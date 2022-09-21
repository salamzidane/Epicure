import HeaderIcons from '../headerIcons/HeaderIcons';
import { useState } from "react";
import Hamburger from 'hamburger-react';
import {
  HeaderMobileContainer,
  HeaderLogo,
  HeaderMenuMobileContainer,
  MenuItem
} from './styles';
import { useNavigate } from 'react-router-dom';
import headerLogo from '../../../assets/headerMobileLogo.svg';


export default function HeadeMobile() {


  const [showMenu, setShowMenu] = useState(false);
  const toggleShowMenu = () => { setShowMenu(!showMenu); }
  const navigate = useNavigate();



  return (
    <HeaderMobileContainer>


      <Hamburger color="#000000" distance="lg" size={22} toggled={showMenu} toggle={toggleShowMenu} />


      <HeaderMenuMobileContainer MenuStatus={showMenu}>
        <MenuItem onClick={() => navigate("/chefs")}>Chefs</MenuItem>
        <MenuItem onClick={() => navigate("/restaurants")} >Restaurants</MenuItem>
        <MenuItem >Contact Us</MenuItem>
        <MenuItem >Terms of Use</MenuItem>
        <MenuItem >Privacy Policy</MenuItem>

      </HeaderMenuMobileContainer>

      <HeaderLogo src={headerLogo} MenuStatus={showMenu} onClick={() => navigate("/")}/>
      <HeaderIcons hideIcons={showMenu} />

    </HeaderMobileContainer>
  )
}



