
import axios from "axios";
import { useEffect, useState } from "react";
import { API_KEY } from "./apiKey";

const GEO_API_BASE_URL = "http://api.openweathermap.org/geo/1.0/direct?";
const city = "Warsaw"

export const useGeolocation = () => {
    const [locationData, setApiData] = useState({
        state: "loading",
    });

    useEffect(() => {
        const getLocation = async () => {
            try {
                const response = await axios.get(`${GEO_API_BASE_URL}q=${city}&limit=5&appid=${API_KEY}`);
                const lat = response.data[0].lat;
                const lon = response.data[0].lon;

                setApiData({
                    state: "succes",
                    latitude: lat,
                    longitude: lon,
                });
            } catch {
                setApiData({
                    state: "error",
                });
            }
        };

        setTimeout(getLocation, 2 * 1000);
    }, []);

    return locationData;
};