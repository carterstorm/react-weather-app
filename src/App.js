import { useEffect, useState } from "react";
import axios from "axios";

import { CitiesList } from "./MainWrapper/CitiesList";
import { LocationSearch } from "./MainWrapper/LocationSearch";
import { Loading } from "./MainWrapper/Loading";
import { Failure } from "./MainWrapper/Failure";
import { DateContainer } from "./MainWrapper/DateContainer";
import { Forecast } from "./MainWrapper/Forecast";
import { PlaceWeatherInformation } from "./MainWrapper/PlaceInformation";

import { getHoursAndMinutes } from "./getHoursAndMinutes";

import {
	Container,
	Header,
	MainWrapper,
} from "./MainWrapper/styled";

function App() {

	const [searchCity, setSearchCity] = useState("");
	const [apiSearch, setApiSearch] = useState({
		state: "",
	});
	const [userCities, setUserCities] = useState([]);
	const [showValue, setShowValue] = useState(false);
	const [units, setUnits] = useState("metric");

	useEffect(() => {
		if (userCities && apiSearch.name) {
			if (userCities.some(({ name }) => name.toUpperCase() === apiSearch.name.toUpperCase())) {
				return setShowValue(true);
			}
			return setShowValue(false);
		}
	}, [userCities, apiSearch]);

	const getSearchData = async () => {

		const API_KEY = `b6e7b5d1fcedf9104ebd545f76f2ffd6`;
		const searchUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_KEY}&units=${units}`;

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
						const forecastData = response.data.list.slice(0, 6);
						const data = [];

						forecastData.filter((item, index) => {
							const { dt, main, weather } = forecastData[index];
							const { temp } = main;
							const { icon } = weather[0];

							const time = convertTime(dt);
							return data.push({ time, temp, icon });
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

	const convertTime = (time) => {
		return getHoursAndMinutes(new Date(time * 1000));
	};

	const onFormSubmit = (event) => {
		event.preventDefault();
		setApiSearch({
			state: "loading"
		});
		setTimeout(getSearchData, 3 * 1000);
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
							units={units}
							setUnits={setUnits}
						/>
					</Container >
					<DateContainer />
				</Header>
				{apiSearch.state === "" ? (
					<>
					</>
				) :
					apiSearch.state === "loading" ? (
						<Loading />
					)
						:
						apiSearch.state === "error" ? (
							<Failure />
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