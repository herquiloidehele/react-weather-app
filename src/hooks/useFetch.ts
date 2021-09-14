import {openWeatherApi} from '../api/httpClient'
import {useContext, useEffect, useState} from "react";
import {AxiosResponse} from "axios";
import {GlobalContext} from "../store/GlobalStore";
import {convertResponse} from '../utils'

export const useFetchForecast = (days: number) => {

    const {unitMeasurement, queryCity, setWeather, setWeatherForecast} = useContext(GlobalContext);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getDaysForecast(queryCity, days)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [queryCity, days, unitMeasurement, queryCity])


    const getDaysForecast = (cityName: string, days: number) => {
        setLoading(true);
        openWeatherApi.get(`forecast/?q=${cityName}&cnt=${days}&units=${unitMeasurement.name}`).then((response: AxiosResponse) => {
            console.log({response});
            const {todayWeather, forecastWeather} = convertResponse(response.data);

            setWeather(todayWeather);
            setWeatherForecast(forecastWeather)
        }).catch(error => {
            setError(error);
        }).finally(() => {
            setLoading(false);
        });
    }

    return {loading, error};

}
