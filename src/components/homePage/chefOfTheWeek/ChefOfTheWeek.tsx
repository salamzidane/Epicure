import React from "react";
import { useNavigate } from "react-router-dom";
import SetWindowSize from "../../../helpers/SetWindowSize";
import {
    ChefOfTheWeekMainContainer,
    ChefOfTheWeekUpperContainer,
    ChefOfTheWeekLowerContainer,
    ChefDescription,
    ChefContainerTitle,
    ChefCard,
    ChefOfTheWeekTitleContainer

} from "./styles";

interface Chef {
    ChefFirstname: string;
   ChefCard: string;
    ChefDescription: string;
}


export default function ChefOfTheWeek() {
   
    const windowSize = SetWindowSize();
    const navigate = useNavigate();
   
   
    return (
        <ChefOfTheWeekMainContainer>
            <ChefOfTheWeekTitleContainer windowSize={windowSize}>CHEF OF THE WEEK:</ChefOfTheWeekTitleContainer>
            <ChefOfTheWeekUpperContainer>
                {/* <ChefCard>{props.ChefCard}</ChefCard>
                <ChefDescription>{props.ChefDescription}</ChefDescription> */}
            </ChefOfTheWeekUpperContainer>


            <ChefOfTheWeekLowerContainer>
                {/* <ChefContainerTitle>{props.chef}'s Restaurants</ChefContainerTitle> */}

          
            </ChefOfTheWeekLowerContainer>

        </ChefOfTheWeekMainContainer>

    );
}




      {/* <ChefRestaurantsContainer>
                    {props.restaurants.map((props: Restaurant, key: number) => (
                        <ChefRestaurantCard
                            key={key}
                            onClick={() =>
                                navigate("/restaurantdetails", { state: { props } })
                            }
                        >
                            <ChefRestCardImageDiv>
                                <ChefRestCardImage src={props.RestaurantImage} />
                            </ChefRestCardImageDiv>
                            <ChefRestCardBottomContent>
                                {props.RestaurantName}
                            </ChefRestCardBottomContent>
                        </ChefRestaurantCard>
                    ))}
                </ChefRestaurantsContainer> */}