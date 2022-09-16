import HeaderIcons from '../headerIcons/HeaderIcons';
import {
  HeaderDesktopContainer,
  HeaderLogo,
  HeaderAppName,
  HeaderLeftSideContainer,
  HeaderDesktopMenu
} from './styles';
import { Link } from 'react-router-dom';
import { MenuItem } from '../headerDesktop/styles';







export default function HeaderDesktop() {


  return (
    <HeaderDesktopContainer>

      <HeaderLeftSideContainer >

      <Link to="/" ><HeaderLogo /></Link>

        <HeaderAppName>
          EPICURE
        </HeaderAppName>

        <HeaderDesktopMenu>
          <MenuItem ><Link to="/chefs" >Chefs</Link></MenuItem>
          <MenuItem ><Link to="/restaurants" >Restaurants</Link></MenuItem>
        </HeaderDesktopMenu>

      </HeaderLeftSideContainer>

      <HeaderIcons hideIcons={false} />


    </HeaderDesktopContainer>




  )
}



