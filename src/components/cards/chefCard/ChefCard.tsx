
import {
    ChefImage,
    ChefName,
    ChefCardContainer
} from './styles';

interface Chef {
    ChefName: string;
    ChefImage: string;
}


export default function ChefCard(props: Chef) {

    return (
        <div>

            <ChefCardContainer>
                <ChefImage><img src={props.ChefImage} /></ChefImage>

                <ChefName>{props.ChefName}</ChefName>


            </ChefCardContainer>

        </div>
    );
}
