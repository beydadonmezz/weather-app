// components/ForecastList.js
import WeatherIcon from './WeatherIcon';

const ForecastList = ({ forecast }) => {
  if (!forecast || !forecast.forecastday) return null;

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Haftalık Tahmin</h2>
      
      <div className="overflow-x-auto pb-4">
        <div className="flex space-x-4 min-w-max">
          {forecast.forecastday.map((day) => {
            const date = new Date(day.date);
            const dayName = date.toLocaleDateString('tr-TR', { weekday: 'long' });
            const formattedDate = date.toLocaleDateString('tr-TR', { day: 'numeric', month: 'short' });
            
            return (
              <div 
                key={day.date} 
                className="bg-white rounded-xl shadow-md p-4 w-40 flex-shrink-0 transition-transform hover:scale-105"
              >
                <p className="text-center font-medium text-gray-800">{dayName}</p>
                <p className="text-center text-xs text-gray-500">{formattedDate}</p>
                
                <div className="flex justify-center my-2">
                  <WeatherIcon 
                    code={day.day.condition.code} 
                    isDay={true} 
                    size={48} 
                  />
                </div>
                
                <p className="text-center text-sm mt-1 mb-2 text-gray-700">{day.day.condition.text}</p>
                
                <div className="flex justify-between items-center text-sm">
                  <span className="font-bold text-red-500">{Math.round(day.day.maxtemp_c)}°</span>
                  <span className="text-blue-500">{Math.round(day.day.mintemp_c)}°</span>
                </div>
                
                <div className="mt-2 pt-2 border-t text-xs text-gray-500">
                  <div className="flex justify-between">
                    <span>Yağış:</span>
                    <span>%{day.day.daily_chance_of_rain}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ForecastList;