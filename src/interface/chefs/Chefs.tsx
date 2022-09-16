import SetWindowSize from "../../helpers/SetWindowSize";
import ChefCard from "../../components/cards/chefCard/ChefCard"
import { ChefsPage } from "./styles";
import chefImage from '../../assets/chefsCards/AsafGranit.svg'


export default function Chefs() {
  const array_chefsName = ["Asaf Granit", "Aviv Moshe", "Meir Adoni", "Yossi Shitret"];

  const windowSize = SetWindowSize();
  return (
    <div>
      <ChefsPage windowSize={windowSize}>
        
        {array_chefsName.map(name => {

          return (<ChefCard ChefName={name} ChefImage={chefImage} />);

        })}
      </ChefsPage>
    </div>
  )
}

