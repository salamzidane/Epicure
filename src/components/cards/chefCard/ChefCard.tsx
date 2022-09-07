
import {
ChefImage,
ChefName
}from './styles';

interface Chef {
    ChefName:string;
    ChefImage:string; }


export default function ChefCard(props:Chef){



return(
<div>


<ChefImage><img src='{props.ChefImage}' /></ChefImage>

<ChefName>{props.ChefName}</ChefName>




</div>
);
}