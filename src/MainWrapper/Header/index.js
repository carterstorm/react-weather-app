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
        <div className="container">
            <div className="locationOptions">
                <input className="citySearch"></input>
                <div className="buttons">
                    <button className="button"></button>
                    <button className="button"></button>
                </div>
            </div>
            <div className="temperatureOptions">
                <div className="buttons">
                    <button className="button"></button>
                    <button className="button"></button>
                </div>
            </div>
        </div>
        <div className="dateContainer">
            <p className="date"></p>
        </div>
    </Wrapper>
);