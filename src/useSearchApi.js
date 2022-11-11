import axios from "axios";
import { useState, useEffect } from "react";

export const useApiSearch = () => {
    const [apiSearch, setApiSearch] = useState({
        state: "loading",
    });

    useEffect(() => {
        const getSearchData = async () => {
            try {
                const response = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=Warszawa&appid=b6e7b5d1fcedf9104ebd545f76f2ffd6");
                console.log(response);
                setApiSearch({
                    state: "success",

                });

            } catch {
                setApiSearch({
                    state: "error"
                });
            }
        };
        setTimeout(getSearchData, 1 * 1000);
    }, []);

    return apiSearch;
};