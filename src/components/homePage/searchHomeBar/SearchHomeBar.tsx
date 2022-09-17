import {
  SearchHomeBarContainer,
  SearchHomeBarTitle,
  SearchHomeBarTitleContainer,
  SearchHomeBarInput,
  SearchLogo,
  SearchInput,
  SearchBarBackground
} from './styles';
import searchBarLogo from '../../../assets/searchBarIcon.svg'


export default function SearchHomeBar() {

  return (
    <SearchHomeBarContainer>
      <SearchBarBackground />
      <SearchHomeBarTitleContainer>
        <SearchHomeBarTitle>
          Epicure works with the top <br />
          chef restaurants in Tel Aviv
        </SearchHomeBarTitle>
        <SearchHomeBarInput>
          {/* <SearchLogo></SearchLogo> */}
          <SearchInput type="text" placeholder='Search for restaurant cuisine, chef'></SearchInput>
        </SearchHomeBarInput>
      </SearchHomeBarTitleContainer>
    </SearchHomeBarContainer>

  )
}


