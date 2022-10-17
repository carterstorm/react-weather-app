import { Container } from "./Container";
import { CitiesItem, CitiesList, UserCities, Wrapper } from "./styled";

export const Header = () => (
    <Wrapper>

        <UserCities>
            <CitiesList>
                <CitiesItem>
                    Londyn
                </CitiesItem>
                <CitiesItem>
                    Paryz
                </CitiesItem>
                <CitiesItem>
                    Warszawa
                </CitiesItem>
                <CitiesItem>
                    Belgrad
                </CitiesItem>
                <CitiesItem>
                    Praga
                </CitiesItem>
            </CitiesList>
        </UserCities>

        <Container />

        <div className="dateContainer">
            <p className="date"></p>
        </div>
    </Wrapper>
);