import {
  HeaderBagIcon,
  HeaderProfileIcon,
  HeaderSearchIcon,
  HeaderIconsContainer
} from './styles';
import headerSearchIcon from '../../../assets/searchIcon.svg';
import headerBagIcon from '../../../assets/bagIcon.svg';
import headerProfileIcon from '../../../assets/profileIcon.svg';



interface properties {
  hideIcons: boolean
}



export default function HeaderIcons(props:properties) {


  return (

    <HeaderIconsContainer MenuStatus={props.hideIcons}>
      <HeaderSearchIcon src={headerSearchIcon}/>
      <HeaderProfileIcon src={headerBagIcon}/>
      <HeaderBagIcon src={headerProfileIcon}/>
    </HeaderIconsContainer>


  )
}

