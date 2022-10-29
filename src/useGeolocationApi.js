
import axios from "axios";
import { useEffect, useState } from "react";

const GEO_API_BASE_URL = "http://api.openweathermap.org/geo/1.0/direct?";
const city = "London";

export const useGeolocation = () => {
    const [locationData, setApiData] = useState({
        state: "loading",
    });

    useEffect(() => {
        const getLocation = async () => {
            try {
                const response = await axios.get(`${GEO_API_BASE_URL}q=${city}&limit=5&appid=b6e7b5d1fcedf9104ebd545f76f2ffd6`);
                console.log(response.data);

                setApiData({
                    state: "succes",

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