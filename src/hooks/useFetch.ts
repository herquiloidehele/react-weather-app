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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cityName, days, context.unitMeasurement])


    const getDaysForecast = (cityName: string, days: number) => {
        setLoading(true);
        openWeatherApi.get(`forecast/?q=${cityName}&cnt=${days}&units=${context.unitMeasurement.name}`).then((response: AxiosResponse) => {
            console.log({response});
            const {todayWeather, forecastWeather} = convertResponse(response.data);

            context.setWeather(todayWeather);
            context.setWeatherForecast(forecastWeather)
        }).catch(error => {
            setError(error);
        }).finally(() => {
            setLoading(false);
        });
    }

    return {loading, error};

}
