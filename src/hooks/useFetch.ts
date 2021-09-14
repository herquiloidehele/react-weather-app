import {openWeatherApi} from '../api/httpClient'
import {useContext, useEffect, useState} from "react";
import {AxiosResponse} from "axios";
import {GlobalContext} from "../store/GlobalStore";
import {convertResponse} from '../utils'

export const useFetchForecast = (cityName: string, days: number) => {

    const context = useContext(GlobalContext);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getDaysForecast(cityName, days)
    }, [cityName, days])


    const getDaysForecast = (cityName: string, days: number) => {
        setLoading(true);
        openWeatherApi.get(`forecast/?q=${cityName}&cnt=${days}`).then((response: AxiosResponse) => {
            console.log({response});
            const {currentWeather, city} = convertResponse(response.data);
            context.setWeather(currentWeather);
            context.setCity(city);
        }).catch(error => {
            setError(error);
        }).finally(() => {
            setLoading(false);
        });
    }

    console.log({loading, error});
    return {loading, error};

}

