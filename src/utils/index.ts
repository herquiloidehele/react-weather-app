import {City, Weather, WeatherForecast} from "../models";
import moment from "moment";
import {Dictionary} from "underscore";
import _ from 'lodash'

export const convertResponse = (responseData: any) => {
    let forecastWeather = formatForecastWeather(responseData);
    let todayWeather = formatCurrentDayWeather(responseData);

    return {forecastWeather, todayWeather};
}


function formatCurrentDayWeather(responseData: any){

    const forecastItem: any = getCurrentDayWeatherMetadata(responseData);

    const currentWeather: Weather = {
        timestamp: forecastItem.dt,
        max: forecastItem.main.temp_max,
        min: forecastItem.main.temp_max,
        condition: _.first([...forecastItem.weather]).description,
        icon: _.first([...forecastItem.weather]).icon,
        humidity: forecastItem.main.humidity,
        pressure: forecastItem.main.pressure,
        wind: forecastItem.wind.speed,
        city: getCity(responseData.city),
        sunrise: responseData.city.sunrise,
        sunset: responseData.city.sunset
    }

    return currentWeather;
}


/**
 * Format City Response Object
 * @param city
 */
function getCity(city: any): City{
    return {
        id: city.id,
        name: city.name,
        coord: city.coord,
        country: city.country,
        timezone: city.timezone
    };
}


/**
 * Returns the information corresponding to the weather os the current day
 * @param responseData
 */
export function getCurrentDayWeatherMetadata(responseData: any){
    try {

        const groupedTimestamps: Dictionary<any>  = groupTimestampsIntoDays(responseData.list);

        const currentDate = moment(new Date()).format('YYYY-MM-DD');
        const currentDayTimestamps = groupedTimestamps[currentDate];
        const closestTimestamp = _.first(currentDayTimestamps);

        console.log({closestTimestamp});
        return closestTimestamp;

    }catch (error){
        console.log(error);
        return null;
    }
}


/**
 * Format the output of forecast wether for the next 5 days
 * @param responseData
 */
export function formatForecastWeather(responseData: any){
    try{
        const groupedTimestamps: Dictionary<any>  = groupTimestampsIntoDays(responseData.list);
        const forecastTimestamps: WeatherForecast[] = [];

        for (const date of Object.keys(groupedTimestamps)){
            const dateTimestamps = groupedTimestamps[date];

            const temp_max = _.maxBy(dateTimestamps.map((timestamps: any) => timestamps.main.temp_max));
            const temp_min = _.maxBy(dateTimestamps.map((timestamp: any) => timestamp.main.temp_max));
            const icon = _.first([...dateTimestamps.find((timestamp: any) => timestamp.main.temp_max === temp_max).weather])?.icon;

            const forecast: WeatherForecast = {
                max: Number(temp_max),
                min: Number(temp_min),
                icon: String(icon),
                date: new Date(date)
            }

            console.log(forecast);
            forecastTimestamps.push(forecast);
        }

        return forecastTimestamps;
    }catch (error){
        console.log(error);
        return [];
    }
}

/**
 * Group the timestamps that corresponds to the same days
 * Normally the api returns 8 timestamps per day
 * @param _timestampDays
 */
export function groupTimestampsIntoDays(_timestampDays: any[]) {
    try {
        const timestampDays = _timestampDays.map(timestamp => {
            return {
                ...timestamp,
                data: String(timestamp.dt_txt).substr(0, 10)
            }
        })

        const groups = _.groupBy(timestampDays, 'data');
        console.log(groups);

        return groups;
    }catch (error){
        return [];
    }
}
