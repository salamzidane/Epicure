import {
  HeaderBagIcon,
  HeaderProfileIcon,
  HeaderSearchIcon,
  HeaderIconsContainer
} from './styles';



interface properties {
  hideIcons: boolean
}



export default function HeaderIcons(props:properties) {


  return (

    <HeaderIconsContainer MenuStatus={props.hideIcons}>
      <HeaderSearchIcon />
      <HeaderProfileIcon />
      <HeaderBagIcon />
    </HeaderIconsContainer>


  )
}

