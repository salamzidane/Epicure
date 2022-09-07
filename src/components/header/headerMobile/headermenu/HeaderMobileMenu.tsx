import React, { useState } from "react";
import { MenuItem } from "../../headerMobile/headermenu/styles";
import { HeaderMenuMobileContainer } from './styles';
import Hamburger from 'hamburger-react';

export default function HeaderMobileMenu() {

    const [showMenu, setShowMenu] = useState(true);
    const toggleShowMenu = () => { setShowMenu(!showMenu); }



    return (
        <div>  <Hamburger color="#000000" distance="lg" size={22} toggled={showMenu} toggle={toggleShowMenu} />

            <HeaderMenuMobileContainer MenuStatus={showMenu}>
                <MenuItem >Chefs</MenuItem>
                <MenuItem >Restaurants</MenuItem>
                <MenuItem >Contact Us</MenuItem>
                <MenuItem >Terms of Use</MenuItem>
                <MenuItem >Privacy Policy</MenuItem>

            </HeaderMenuMobileContainer>
        </div>






    )
}





