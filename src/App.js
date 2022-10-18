import { Header } from "./MainWrapper/Header";
import { PlaceWeatherInformation } from "./MainWrapper/PlaceInformation";
import { MainWrapper } from "./MainWrapper/styled";

function App() {
	return (
		<div className="App">
			<MainWrapper>
				<Header />
				<PlaceWeatherInformation />
			</MainWrapper>
		</div>
	);
}

export default App;