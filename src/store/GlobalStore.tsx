import React, {useState} from "react";
import {UnitiMeasurement, Weather, WeatherForecast} from '../models'


//Initializing Instances
const _unitMeasurement: UnitiMeasurement = {}
const _weather: Weather = {};
const _weatherForecast: WeatherForecast[] = []


export const GlobalContext = React.createContext({
        unitMeasurement: _unitMeasurement,
        weather: _weather,
        weatherForecast: _weatherForecast,
        setUnitMeasurement: (_: UnitiMeasurement) => {},
        setWeather: (_: Weather) => {},
        setWeatherForecast: (_: WeatherForecast[]) => {}
    }
);

export const GlobalStore: React.FC = ({children}) => {

    //States
    const [unitMeasurement, _setUnitMeasurement] = useState(_unitMeasurement);
    const [weather, _setWeather] = useState(_weather);
    const [weatherForecast, _setWeatherForecast] = useState(_weatherForecast);


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

    //wrapping all context together
    const allContext = {
        unitMeasurement,
        weather,
        weatherForecast,
        setUnitMeasurement,
        setWeather,
        setWeatherForecast
    };


    return (
        <GlobalContext.Provider value={allContext}>
            {children}
        </GlobalContext.Provider>
    )
}
