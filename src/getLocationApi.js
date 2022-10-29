import axios from "axios";

const GEO_API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather?";

export const getLocationApi = async (search) => {
    try {
        const response = await axios.get(`${GEO_API_BASE_URL}q=${search}&appid=b6e7b5d1fcedf9104ebd545f76f2ffd6`);
        console.log(response.data);

    } catch {

    }
};