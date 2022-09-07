import HeaderIcons from '../headerIcons/HeaderIcons';
import {
  HeaderDesktopContainer,
  HeaderLogo,
  HeaderAppName,
  HeaderLeftSideContainer,
  HeaderDesktopMenu
} from './styles';
import { Link } from 'react-router-dom';


export default function HeaderDesktop() {


  return (
    <HeaderDesktopContainer>

      <HeaderLeftSideContainer >

        <HeaderLogo />

        <HeaderAppName>
          EPICURE
        </HeaderAppName>

        <HeaderDesktopMenu>
          <Link to="/chefs" >Chefs</Link>
          <Link to="/restaurants" >Restaurants</Link>
        </HeaderDesktopMenu>

      </HeaderLeftSideContainer>

      <HeaderIcons />
     

    </HeaderDesktopContainer>




  )
}



