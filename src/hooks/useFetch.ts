import {openWeatherApi} from '../api/httpClient'
import {useContext, useEffect, useState} from "react";
import {AxiosResponse} from "axios";
import {GlobalContext} from "../store/GlobalStore";
import {convertResponse} from '../utils'
import {CityResults} from "../models";
import Cities from "../data/citites.json";
import {fetchPlaces} from "../utils/functions";

export const useFetchForecast = (days?: number) => {

    const {unitMeasurement, queryCity, setWeather, setWeatherForecast, setLoading} = useContext(GlobalContext);
    const [error, setError] = useState(null);

    useEffect(() => {
        getDaysForecast(queryCity, days)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [queryCity, unitMeasurement])

    const getDaysForecast = (cityName: string, days?: number) => {
        setLoading(true);
        openWeatherApi.get(`forecast/?q=${cityName}&cnt=${days}&units=${unitMeasurement.name}`).then((response: AxiosResponse) => {
            console.log({response});
            const {todayWeather, forecastWeather} = convertResponse(response.data);

            setWeather(todayWeather);
            setWeatherForecast(forecastWeather)
        }).catch(error => {
            console.log(error);
            setError(error);
        }).finally(() => {
            setLoading(false);
        });
    }

    return {error};

}


const _cityResults: CityResults[] = []

export const useFetchPlaces = () => {

    const [searchResults, setSearchResult] = useState(_cityResults);
    const [loading, setLoading] = useState(false);
    const [searchCityText, setSearchText] = useState('');

    useEffect(() => {
        if (searchCityText){
            searchPlaces(searchCityText);
        }
    }, [searchCityText]);


    function searchPlaces(searchCityText: string){
        setLoading(true);
        const searchResults = fetchPlaces(searchCityText, Cities.data);
        setSearchResult(searchResults);
        setLoading(false);
    }

    return {loading, searchResults, setSearchText}
}
