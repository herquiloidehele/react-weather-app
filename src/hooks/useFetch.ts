import {openWeatherApi, placesApi} from '../api/httpClient'
import {useContext, useEffect, useState} from "react";
import {AxiosResponse} from "axios";
import {GlobalContext} from "../store/GlobalStore";
import {convertResponse} from '../utils'
import {CityResults} from "../models";

export const useFetchForecast = (days: number) => {

    const {unitMeasurement, queryCity, setWeather, setWeatherForecast} = useContext(GlobalContext);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getDaysForecast(queryCity, days)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [queryCity, unitMeasurement])

    const getDaysForecast = (cityName: string, days: number) => {
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

    return {loading, error};

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

        placesApi.get('cities/?searchCity='+ searchCityText).then((response: AxiosResponse) => {
            const formatResult: CityResults[] = response.data.map((dataItem: any) => {
                const result: CityResults = {
                    name: dataItem.name,
                    countryCode: dataItem.country
                }

                return result;
            });

            setSearchResult(formatResult);
        }).catch(error => {
            console.log(error);
            setSearchResult([]);
        }).finally(() => {
            setLoading(false)
        })
    }

    return {loading, searchResults, setSearchText}
}
