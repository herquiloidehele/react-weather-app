import axios, {AxiosRequestConfig} from "axios";

const openWeatherApi = axios.create({
    timeout: 60000,
    baseURL: 'https://api.openweathermap.org/data/2.5/'
});

const placesApi = axios.create({
    timeout: 60000,
    baseURL: 'http://localhost:8000/api/'
});

openWeatherApi.interceptors.request.use(function (config:AxiosRequestConfig) {
    const urlWithApiKey = `${config.url}&lang=pt_br&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`;
    return {...config, url: urlWithApiKey}
})

export {openWeatherApi, placesApi};
