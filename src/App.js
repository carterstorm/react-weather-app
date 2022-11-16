import { useState } from "react";
import axios from "axios";
import searchImage from "../src/svg/search.svg";
import locationImage from "../src/svg/location.svg";
import { DateContainer } from "./MainWrapper/DateContainer";
import { Forecast } from "./MainWrapper/Forecast";
import { Button } from "./MainWrapper/Button";
import { PlaceWeatherInformation } from "./MainWrapper/PlaceInformation";
import {
	CityItem,
	CitiesList,
	Container,
	ContainerSearch,
	Header,
	Input,
	MainWrapper,
	StyledLocationSearch,
	TemperatureButtons,
	CityText,
	CityButton,
	DeleteSpan,
} from "./MainWrapper/styled";
import { Loading } from "./MainWrapper/Loading/styled";
import { Failure } from "./MainWrapper/Failure/styled";

function App() {

	const [searchCity, setSearchCity] = useState("");

	const [apiSearch, setApiSearch] = useState({
		state: "",
	});

	const [userCities, setUserCities] = useState([]);

	const getSearchData = async () => {

		try {
			const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=b6e7b5d1fcedf9104ebd545f76f2ffd6&units=metric`);
			const {
				coord: { lon, lat },
				main: { temp, temp_max, temp_min, feels_like, humidity, pressure },
				name,
				sys: { country, sunrise, sunset },
				weather,
				wind: { speed },
			} = response.data;

			const { description, icon } = weather[0];

			setApiSearch({
				state: "success",
				name,
				lon,
				lat,
				temp,
				temp_max,
				temp_min,
				feels_like,
				humidity,
				pressure,
				country,
				sunrise,
				sunset,
				speed,
				description,
				icon,
			});

		} catch {
			setApiSearch({
				state: "error",
			});
		}
	};

	const addCity = (searchCity) => {

		if (userCities.some(({ inputName, name }) => inputName.toUpperCase() === searchCity.toUpperCase()
			||
			name.toUpperCase() === searchCity.toUpperCase())) {
			return null;
		} else {
			setUserCities(userCities => [
				...userCities,
				{
					id: userCities.length === 0 ? 1 : userCities[userCities.length - 1].id + 1,
					inputName: searchCity,
					name: apiSearch.name,
				}
			]);
		}
	};

	const onFormSubmit = (event) => {
		event.preventDefault();
		setApiSearch({
			state: "loading"
		});
		setTimeout(getSearchData, 2 * 1000);
	};

	return (
		<div className="App">
			<MainWrapper>
				<Header>
					<CitiesList>
						{userCities.map(city => (
							<CityItem key={city.id}>
								<CityText>{city.name}</CityText>
								<CityButton remove><DeleteSpan>-</DeleteSpan></CityButton>
							</CityItem>
						))}
					</CitiesList>
					<Container>
						<StyledLocationSearch onSubmit={onFormSubmit}>
							<ContainerSearch>
								<Input
									placeholder="Wpisz szukane miasto"
									value={searchCity}
									onChange={({ target }) => setSearchCity(target.value)}
								/>
								{apiSearch.state === "success" ? (
									<CityButton
										type="button"
										add
										onClick={() => addCity(searchCity)}
									>
										+
									</CityButton>
								) :
									null
								}
							</ContainerSearch>
							<Button
								img={searchImage} />
							<Button
								img={locationImage} />
						</StyledLocationSearch>
						<TemperatureButtons>
							<Button content={"°C"} />
							{"|"}
							<Button content={"°F"} />
						</TemperatureButtons>
					</Container >
					<DateContainer />
				</Header>
				{apiSearch.state === "" ? (
					<>
					</>
				) :
					apiSearch.state === "loading" ? (
						<Loading>
							Wczytuję dane
						</Loading>
					)
						:
						apiSearch.state === "error" ? (
							<Failure>
								Coś poszło chyba nie tak...
							</Failure>
						) :
							(
								<>
									<PlaceWeatherInformation apiSearch={apiSearch} />
									<Forecast />
								</>
							)
				}
			</MainWrapper>
		</div>
	);
}

export default App;