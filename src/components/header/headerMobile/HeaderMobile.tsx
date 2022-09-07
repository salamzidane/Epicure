import HeaderIcons from '../headerIcons/HeaderIcons';
import HeaderMobileMenu from './headermenu/HeaderMobileMenu';


import {
  HeaderMobileContainer,
  HeaderLogo,
  HeaderLeftSideContainer
} from './styles';



export default function HeadeMobile() {


  return (
    <HeaderMobileContainer>

      <HeaderLeftSideContainer >
       <HeaderMobileMenu />
      </HeaderLeftSideContainer>

      <HeaderLogo />

      <HeaderIcons />
      

    </HeaderMobileContainer>
  )
}


