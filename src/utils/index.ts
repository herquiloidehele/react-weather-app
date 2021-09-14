import {City, Weather} from "../models";
import * as _ from 'underscore';

export const convertResponse = (responseData: any) => {
    let forecastWeather: Weather[] = [];

    const city: City = {
        id: responseData.city.id,
        name: responseData.city.name,
        coord: responseData.city.coord,
        country: responseData.city.country,
        timezone: responseData.city.timezone
    };

    for (const forecastItem of responseData.list){
        const currentWeather: Weather = {
            timestamp: forecastItem.dt,
            max: forecastItem.main.temp_max,
            min: forecastItem.main.temp_max,
            condition: _.first(forecastItem.weather).description,
            icon: _.first(forecastItem.weather).icon,
            humidity: forecastItem.main.humidity,
            pressure: forecastItem.main.pressure,
            wind: forecastItem.wind.speed,
            cityId: responseData.city.id,
            sunrise: responseData.city.sunrise,
            sunset: responseData.city.sunset
        }

        forecastWeather.push(currentWeather);
    }

    return {currentWeather: forecastWeather[0], forecastWeather, city};
}

