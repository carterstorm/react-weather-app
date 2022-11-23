import { useEffect, useState } from "react";
import axios from "axios";
import { DateContainer } from "./MainWrapper/DateContainer";
import { Forecast } from "./MainWrapper/Forecast";
import { PlaceWeatherInformation } from "./MainWrapper/PlaceInformation";
import {
	Container,
	Header,
	MainWrapper,
} from "./MainWrapper/styled";
import { Loading } from "./MainWrapper/Loading/styled";
import { Failure } from "./MainWrapper/Failure/styled";
import { CitiesList } from "./MainWrapper/CitiesList";
import { LocationSearch } from "./MainWrapper/LocationSearch";

function App() {

	const [searchCity, setSearchCity] = useState("");
	const [apiSearch, setApiSearch] = useState({
		state: "",
	});
	const [userCities, setUserCities] = useState([]);
	const [showValue, setShowValue] = useState(false);

	useEffect(() => {
		if (userCities && apiSearch.name) {
			if (userCities.some(({ name }) => name.toUpperCase() === apiSearch.name.toUpperCase())) {
				setShowValue(true);
			}
			return setShowValue(false);
		}
	}, [userCities, apiSearch]);

	const getSearchData = async () => {

		const API_KEY = `b6e7b5d1fcedf9104ebd545f76f2ffd6`;
		const searchUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_KEY}&units=metric`;

		try {
			await axios.get(searchUrl).then(async (response) => {
				const {
					coord: { lon, lat },
					main: { temp, temp_max, temp_min, feels_like, humidity, pressure },
					name,
					sys: { country, sunrise, sunset },
					weather,
					wind: { speed },
				} = response.data;

				const { description, icon } = weather[0];

				return axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
					.then((response) => {
						const forecastData = response.data.list.slice(0, 5);
						const data = [];

						forecastData.filter((item, index) => {
							const { dt, main } = forecastData[index];
							const { temp } = main;

							return data.push({ dt, temp });
						});

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
							data: data,
						});
					})
			})
		} catch {
			setApiSearch({
				state: "error",
			});
		};
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
					<CitiesList
						userCities={userCities}
						setUserCities={setUserCities}
					/>
					<Container>
						<LocationSearch
							searchCity={searchCity}
							setSearchCity={setSearchCity}
							onFormSubmit={onFormSubmit}
						/>
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
									<PlaceWeatherInformation
										apiSearch={apiSearch}
										userCities={userCities}
										setUserCities={setUserCities}
										showValue={showValue}
									/>
									<Forecast apiSearch={apiSearch} />
								</>
							)
				}
			</MainWrapper>
		</div>
	);
}

export default App;