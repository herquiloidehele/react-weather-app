
export interface UnitiMeasurement{
    name?: string,
    symbol?: string
}

export enum UnitNames{
    CELSIUS = 'metric',
    FAHRENHEIT = 'imperial'
}

export interface City{
    id?: string,
    name?: string,
    coord?: {
        lon: number,
        lat: number
    },
    country?: string,
    timezone?: number
}

export interface Weather{
    date?: Date,
    max?: number,
    min?: number
    condition?: string,
    icon?: string,
    humidity?: number,
    pressure?: number,
    wind?: number,
    sunrise?: number,
    sunset?: number,
    rain?: number,
    city?: City,
}


export interface WeatherForecast {
    max?: number,
    min?: number,
    icon?: string,
    date?: Date
}

export interface CityResults {
    countryCode: string,
    name: string
}
