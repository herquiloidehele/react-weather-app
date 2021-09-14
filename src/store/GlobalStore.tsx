import React, {useState} from "react";
import {UnitiMeasurement, Weather, WeatherForecast} from '../models'


//Initializing Instances
const _unitMeasurement: UnitiMeasurement = {name: 'metric', symbol: '°C'};
const _weather: Weather = {};
const _weatherForecast: WeatherForecast[] = [];
const _queryCity: string = "Maputo";


export const GlobalContext = React.createContext({
    unitMeasurement: _unitMeasurement,
    weather: _weather,
    weatherForecast: _weatherForecast,
    queryCity: _queryCity,
    setUnitMeasurement: (_: UnitiMeasurement) => {},
    setWeather: (_: Weather) => {},
    setWeatherForecast: (_: WeatherForecast[]) => {},
    setQueryCity: (_: string) => {}
});

export const GlobalStore: React.FC = ({children}) => {

    //States
    const [unitMeasurement, _setUnitMeasurement] = useState(_unitMeasurement);
    const [weather, _setWeather] = useState(_weather);
    const [weatherForecast, _setWeatherForecast] = useState(_weatherForecast);
    const [queryCity, _setQueryCity] = useState(_queryCity);


    //Setters
    function setUnitMeasurement(unit: UnitiMeasurement) {
        _setUnitMeasurement(unit)
    }

    function setWeather(weather: Weather){
        _setWeather(weather)
    }

    function setWeatherForecast(weatherForecast: WeatherForecast[]){
        _setWeatherForecast(weatherForecast)
    }

    function setQueryCity(queryCity: string){
        _setQueryCity(queryCity)
    }

    //wrapping all context together
    const allContext = {
        unitMeasurement,
        weather,
        weatherForecast,
        queryCity,
        setUnitMeasurement,
        setWeather,
        setWeatherForecast,
        setQueryCity
    };


    return (
        <GlobalContext.Provider value={allContext}>
            {children}
        </GlobalContext.Provider>
    )
}
