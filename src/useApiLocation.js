import axios from "axios";
import { useEffect, useState } from "react";

export const useApiLocationData = () => {

    const [apiLocationData, setApiLocationData] = useState({
        state: "loading"
    });

    useEffect(() => {
        const getLocationApi = async () => {
            try {
                const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=131dcfb91d6d4b0da9d123040220511&q=Warsaw&aqi=no`);

                const { current, location } = response.data;

                setApiLocationData({
                    state: "succes",
                    current: current,
                    location: location,
                });

            } catch {
                setApiLocationData({
                    state: "error",
                })
            }
        };

        setTimeout(getLocationApi, 1 * 1000);
    }, []);

    return apiLocationData;
};