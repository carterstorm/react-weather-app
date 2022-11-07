import axios from "axios";
import { useState, useEffect } from "react";
import { DateContainer } from "./MainWrapper/DateContainer";
import { LocationSearch } from "./MainWrapper/LocationSearch";

import { Forecast } from "./MainWrapper/Forecast";
import { Button } from "./MainWrapper/Button";
import { PlaceWeatherInformation } from "./MainWrapper/PlaceInformation";
import {
	CitiesItem,
	CitiesList,
	Container,
	Header,
	MainWrapper,
	TemperatureButtons
} from "./MainWrapper/styled";

function App() {

	const [cities, setCities] = useState(null);


	useEffect(() => {
		const getLocationApi = async () => {
			try {
				const response = await axios.get(`https://api.weatherapi.com/v1/search.json?key=131dcfb91d6d4b0da9d123040220511&q=Lon`);
				setCities(response.data);
			} catch (error) {
				console.error(error);
			}
		};
		setTimeout(getLocationApi, 1 * 1000);
	}, []);

	return (
		<div className="App">
			<MainWrapper>
				<Header>
					<CitiesList>
						<CitiesItem>
							Londyn
						</CitiesItem>
						<CitiesItem>
							Paryż
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
					<Container>
						<LocationSearch cities={cities} />
						<TemperatureButtons>
							<Button content={"°C"} />
							{"|"}
							<Button content={"°F"} />
						</TemperatureButtons>
					</Container >
					<DateContainer />
				</Header>
				<PlaceWeatherInformation />
				<Forecast />
			</MainWrapper>
		</div>
	);
}

export default App;