"use client";

import WeatherIcon from './WeatherIcon';
import { useTheme } from '@/contexts/ThemeContext';

const HourlyForecast = ({ hourData }) => {
  const { darkMode } = useTheme();
  
  if (!hourData || !hourData.length) return null;

  // Şu anki saatten sonraki 24 saati göster
  const currentHourIndex = new Date().getHours();
  const nextHours = [...hourData.slice(currentHourIndex), ...hourData.slice(0, currentHourIndex)].slice(0, 24);

  return (
    <div className="mt-8 mb-8">
      <h2 className="text-xl font-bold mb-4">Saatlik Tahmin</h2>
      
      <div className="overflow-auto pb-4">
        <div className="flex space-x-4 min-w-max">
          {nextHours.map((hour) => {
            const hourTime = new Date(hour.time);
            const displayHour = hourTime.getHours() === 0 ? '00:00' : `${hourTime.getHours()}:00`;
            
            return (
              <div
                key={hour.time}
                className={`${
                  darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
                } rounded-xl shadow-md p-3 w-24 flex-shrink-0 transition-all hover:shadow-lg`}
              >
                <p className="text-center text-sm font-medium">{displayHour}</p>
                
                <div className="flex justify-center my-2">
                  <WeatherIcon 
                    code={hour.condition.code} 
                    isDay={hour.is_day === 1} 
                    size={36} 
                  />
                </div>
                
                <p className="text-center font-bold">{Math.round(hour.temp_c)}°C</p>
                
                <div className={`mt-1 text-center text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {hour.chance_of_rain > 0 && (
                    <span className="flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                      {hour.chance_of_rain}%
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HourlyForecast;