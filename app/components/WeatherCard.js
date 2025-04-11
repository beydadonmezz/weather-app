"use client";

import WeatherIcon from './WeatherIcon';

const WeatherCard = ({ current, location }) => {
  if (!current || !location) return null;

  const formattedDate = new Date().toLocaleDateString('tr-TR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl text-white shadow-lg p-6 mb-8 transition-transform hover:scale-[1.01]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">{location.name}</h2>
          <p className="text-blue-100">{location.country}</p>
          <p className="text-blue-100 text-sm">{formattedDate}</p>
        </div>
        
        <div className="text-center">
          <div className="text-6xl font-bold">{current.temp_c}°C</div>
          <p className="text-xl capitalize">{current.condition.text}</p>
        </div>
        
        <div className="text-center">
          <WeatherIcon code={current.condition.code} isDay={current.is_day} size={80} />
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p className="text-xs text-blue-100">Hissedilen</p>
            <p className="font-bold">{current.feelslike_c}°C</p>
          </div>
        </div>
        
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
          <div>
            <p className="text-xs text-blue-100">Rüzgar</p>
            <p className="font-bold">{current.wind_kph} km/s</p>
          </div>
        </div>
        
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          <div>
            <p className="text-xs text-blue-100">Nem</p>
            <p className="font-bold">%{current.humidity}</p>
          </div>
        </div>
        
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          <div>
            <p className="text-xs text-blue-100">Basınç</p>
            <p className="font-bold">{current.pressure_mb} mb</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;