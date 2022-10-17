import { MainWrapper } from "./MainWrapper/styled";

function App() {
	return (
		<div className="App">
			<MainWrapper>
				<header className="finderSection">
					<div className="userCities">
						<ul className="citiesList">
							<li className="citiesItem">
								Londyn
							</li>
							<li className="citiesItem">
								Paryz
							</li>
						</ul>
					</div>
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
				</header>
			</MainWrapper>
		</div>
	);
}

export default App;