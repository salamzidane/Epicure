import HeaderIcons from '../headerIcons/HeaderIcons';
import { useNavigate } from 'react-router-dom';
import {
  HeaderDesktopContainer,
  HeaderLogo,
  HeaderAppName,
  HeaderLeftSideContainer,
  HeaderDesktopMenu
} from './styles';
import { MenuItem } from '../headerDesktop/styles';
import headerLogo from '../../../assets/headerDesktopLogo.svg';







export default function HeaderDesktop() {

  const navigate = useNavigate();

  return (
    <HeaderDesktopContainer>

      <HeaderLeftSideContainer >

        <HeaderLogo src={headerLogo} onClick={() => navigate("/")} />

        <HeaderAppName>
          EPICURE
        </HeaderAppName>

        <HeaderDesktopMenu>
          <MenuItem onClick={() => navigate("/chefs")} >Chefs</MenuItem>
          <MenuItem onClick={() => navigate("/restaurants")}>Restaurants</MenuItem>
        </HeaderDesktopMenu>

      </HeaderLeftSideContainer>

      <HeaderIcons hideIcons={false} />


    </HeaderDesktopContainer>




  )
}



