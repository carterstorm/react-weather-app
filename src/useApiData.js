import axios from "axios";
import { useEffect, useState } from "react";

export const useApiData = (search) => {

    const GEO_API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather?";

    const [apiData, setApiData] = useState({
        state: "loading"
    });

    useEffect(() => {
        const getLocationApi = async () => {
            try {
                const response = await axios.get(`${GEO_API_BASE_URL}q=${search}&appid=b6e7b5d1fcedf9104ebd545f76f2ffd6`);

                const {
                    coord: { lat, lon },
                    main: { temp, feels_like, temp_min, temp_max, humidity },
                    name,
                    sys: { country, sunrise, sunset },
                    weather,
                    wind: { speed },
                } = response.data;

                const { main, icon } = weather[0];

                setApiData({
                    state: "succes",
                    lat, lon, temp, feels_like, temp_min, temp_max, humidity, name, country, sunrise, sunset, main, icon, speed,
                });

            } catch {
                setApiData({
                    state: "error",
                })
            }
        };

        setTimeout(getLocationApi, 1 * 1000);
    }, [search]);

    return apiData;
};