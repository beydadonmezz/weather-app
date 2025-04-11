"use client";

import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ForecastList from './components/ForecastList';
import HourlyForecast from './components/HourlyForecast';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import { fetchWeatherByCity, fetchWeatherByCoords } from '../utils/api';

export default function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchWeather = async (searchQuery) => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await fetchWeatherByCity(searchQuery);
      setWeatherData(data);
      setLocation(`${data.location.name}, ${data.location.country}`);
    } catch (err) {
      setError('Hava durumu bilgileri alınamadı. Lütfen tekrar deneyin.');
      console.error('API Hatası:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (query) => {
    searchWeather(query);
  };

  // Kullanıcının konumuna göre hava durumu al
  const getWeatherByUserLocation = () => {
    if (navigator.geolocation) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            const data = await fetchWeatherByCoords(latitude, longitude);
            setWeatherData(data);
            setLocation(`${data.location.name}, ${data.location.country}`);
            setError(null);
          } catch (err) {
            setError('Konumunuza göre hava durumu alınamadı. Lütfen manuel arama yapın.');
            console.error('Konum API Hatası:', err);
          } finally {
            setLoading(false);
          }
        },
        (err) => {
          setLoading(false);
          setError('Konum erişimi sağlanamadı. Lütfen manuel arama yapın.');
          console.error("Konum erişim hatası:", err);
        }
      );
    }
  };

  // Sayfa yüklendiğinde kullanıcının konumunu al
  useEffect(() => {
    getWeatherByUserLocation();
  }, []);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Hava Durumu</h1>
        <SearchBar onSearch={handleSearch} />
        
        {loading && <LoadingSpinner />}
        
        {error && <ErrorMessage message={error} />}
        
        {!loading && !error && weatherData && (
          <div className="space-y-6">
            <WeatherCard 
              current={weatherData.current} 
              location={weatherData.location} 
            />
            
            <HourlyForecast 
              hourData={weatherData.forecast.forecastday[0].hour} 
            />
            
            <ForecastList 
              forecast={weatherData.forecast} 
            />
          </div>
        )}
        
        {!loading && !error && !weatherData && (
          <div className="text-center p-10 bg-white rounded-lg shadow">
            <p className="mb-4">Hava durumu bilgilerini görmek için bir konum arayın</p>
            <p className="text-sm text-gray-500">
              Veya konum izninizi vererek bulunduğunuz yerin hava durumunu öğrenin
            </p>
            <button 
              onClick={getWeatherByUserLocation}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors"
            >
              Konumumu Kullan
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
}