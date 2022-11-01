import { useState } from "react";
import searchImage from "./svg/search.svg";
import locationImage from "./svg/location.svg";
import { useApiData } from "./useApiData";
import { DateContainer } from "./MainWrapper/DateContainer";

import { Forecast } from "./MainWrapper/Forecast";
import { Button } from "./MainWrapper/Button";
import { PlaceWeatherInformation } from "./MainWrapper/PlaceInformation";
import { CitiesItem, CitiesList, Container, Header, LocationSearch, MainWrapper, SearchInput, TemperatureButtons } from "./MainWrapper/styled";


function App() {

	const [search, setSearch] = useState("");

	const apiData = useApiData(search);
	console.log(apiData);

	const onFormSubmit = (event) => {
		event.preventDefault();
	};

	const onInputChange = (event) => {
		setSearch(event.target.value);
	};

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
						<LocationSearch onSubmit={onFormSubmit}>
							<SearchInput value={search} onChange={onInputChange} />
							<Button img={searchImage} />
							<Button img={locationImage} />
						</LocationSearch>
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