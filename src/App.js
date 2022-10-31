import { useState } from "react";
import searchImage from "./svg/search.svg";
import locationImage from "./svg/location.svg";

import {
	CitiesItem,
	CitiesList,
	Container,
	HeaderWrapper,
	MainWrapper,
	SearchInput,
	StyledLocationSearch,
	TemperatureButtons
} from "./MainWrapper/styled";
import { Button } from "./MainWrapper/Button";
import { DateContainer } from "./MainWrapper/DateContainer";
import { Forecast } from "./MainWrapper/Forecast";
import { PlaceWeatherInformation } from "./MainWrapper/PlaceInformation";

import { getLocationApi } from "./getLocationApi";


function App() {

	const [search, setSearch] = useState("");

	const onFormSubmit = (event) => {
		event.preventDefault();
		getLocationApi(search);
	};

	const onInputChange = (event) => {
		setSearch(event.target.value);
		console.log("trololo")
	};


	return (
		<div className="App">
			<MainWrapper>
				<HeaderWrapper>
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
						<StyledLocationSearch
							onSubmit={onFormSubmit}>
							<SearchInput
								value={search}
								onChange={onInputChange}
							/>
							<Button
								img={searchImage}
							/>
							<Button
								img={locationImage}
							/>
						</StyledLocationSearch>

						<TemperatureButtons>
							<Button
								content={"°C"}
							/>
							{"|"}
							<Button
								content={"°F"}
							/>
						</TemperatureButtons>
					</Container >

					<DateContainer />
				</HeaderWrapper>


				<PlaceWeatherInformation />
				<Forecast />

			</MainWrapper>
		</div>
	);
}

export default App;