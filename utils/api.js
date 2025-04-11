// utils/api.js
import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
const BASE_URL = 'https://api.weatherapi.com/v1';

export const fetchWeatherByCity = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast.json`, {
      params: {
        key: API_KEY,
        q: city,
        days: 7,
        aqi: 'yes',
        alerts: 'yes',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Hava durumu verileri alınırken hata oluştu:', error);
    throw error;
  }
};

export const fetchWeatherByCoords = async (lat, lon) => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast.json`, {
      params: {
        key: API_KEY,
        q: `${lat},${lon}`,
        days: 7,
        aqi: 'yes',
        alerts: 'yes',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Konum bazlı hava durumu verileri alınırken hata oluştu:', error);
    throw error;
  }
};