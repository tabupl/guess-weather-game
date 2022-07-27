import { apiGet } from '../general'
import { CityData } from './types'

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather'

export const getCity = (cityName: string) =>
  apiGet<CityData>(`${weatherUrl}?q=${cityName}&appid=${API_KEY}`)
