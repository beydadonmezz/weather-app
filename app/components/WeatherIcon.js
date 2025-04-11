// components/WeatherIcon.js
const WeatherIcon = ({ code, isDay, size = 64 }) => {
    // Weather condition codes from API
    const getIcon = () => {
      // Sunny / Clear
      if (code === 1000) {
        return isDay 
          ? (
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          )
          : (
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          );
      }
      
      // Partly cloudy
      if (code === 1003) {
        return isDay 
          ? (
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
              <path d="M8 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Z"></path>
              <path d="M8 16a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1Z"></path>
              <path d="M2 8a1 1 0 0 1 1 1h1a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z"></path>
              <path d="M16 8a1 1 0 0 1 1 1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1Z"></path>
              <path d="M12.553 3.106a1 1 0 0 1 .224 1.313l-.5.866a1 1 0 0 1-1.732-1l.5-.866a1 1 0 0 1 1.508-.313Z"></path>
              <path d="M3.106 11.447a1 1 0 0 1 1.313.224l.5.866a1 1 0 1 1-1.732 1l-.5-.866a1 1 0 0 1 .419-1.224Z"></path>
              <path d="M3.106 4.553a1 1 0 0 1 1.224-.419l.866.5a1 1 0 1 1-1 1.732l-.866-.5a1 1 0 0 1-.224-1.313Z"></path>
              <path d="M11.447 20.894a1 1 0 0 1 .313-1.508l.866-.5a1 1 0 0 1 1 1.732l-.866.5a1 1 0 0 1-1.313-.224Z"></path>
              <path d="M10 8a2 2 0 1 1 4 0c0 .374-.103.72-.279 1.011a5.003 5.003 0 0 1 5.26 5.124 4.51 4.51 0 0 1-4.5 4.865H6a4 4 0 0 1-4-4c0-1.564.894-2.913 2.199-3.555C4.573 8.878 7.077 7 10 8Z"></path>
            </svg>
          )
          : (
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
              <path d="M9 13a3 3 0 1 0 0-6H4a4 4 0 0 0 0 8h9a3 3 0 1 0 0-6"></path>
              <path d="M12 5V3"></path>
              <path d="M12 21v-2"></path>
              <path d="m4.2 5.5 1.4 1.4"></path>
              <path d="m18.4 5.5-1.4 1.4"></path>
              <path d="M3 12h2"></path>
              <path d="M19 12h2"></path>
            </svg>
          );
      }
      
      // Cloudy
      if ([1006, 1009].includes(code)) {
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
            <path d="M17 5a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3Z"></path>
            <path d="M10 4v16"></path>
            <path d="M14 4v16"></path>
            <path d="M17 8H7"></path>
            <path d="M17 12H7"></path>
            <path d="M17 16H7"></path>
          </svg>
        );
      }
      
      // Rain
      if ([1063, 1180, 1183, 1186, 1189, 1192, 1195, 1240, 1243, 1246].includes(code)) {
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
            <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
            <path d="M16 14v6"></path>
            <path d="M8 14v6"></path>
            <path d="M12 16v6"></path>
          </svg>
        );
      }
      
      // Thunderstorm
      if ([1273, 1276, 1279, 1282].includes(code)) {
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500">
            <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"></path>
            <path d="m13 12-3 5h4l-3 5"></path>
          </svg>
        );
      }
      
      // Snow
      if ([1066, 1069, 1114, 1117, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258].includes(code)) {
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-200">
            <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
            <path d="M8 15h.01"></path>
            <path d="M8 19h.01"></path>
            <path d="M12 17h.01"></path>
            <path d="M12 21h.01"></path>
            <path d="M16 15h.01"></path>
            <path d="M16 19h.01"></path>
          </svg>
        );
      }
      
      // Fog
      if ([1030, 1135, 1147].includes(code)) {
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
            <path d="M3 10h18"></path>
            <path d="M3 14h18"></path>
            <path d="M3 6h18"></path>
            <path d="M3 18h18"></path>
          </svg>
        );
      }
      
      // Default
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
          <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
        </svg>
      );
    };
  
    return (
      <div className="animate-pulse">
        {getIcon()}
      </div>
    );
  };
  
  export default WeatherIcon;