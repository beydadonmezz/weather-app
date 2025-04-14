# Weather App

A modern weather application that provides real-time weather data, forecasts, and location-based information. Built with Next.js and styled with Tailwind CSS.


## Features

- **Current Weather Conditions**: View real-time temperature, feels like, wind, humidity, and pressure.
- **Location-based Search**: Find weather information for any city or location.
- **Geolocation Support**: Get weather data for your current location with one click.
- **Hourly Forecast**: Detailed hour-by-hour weather forecast for the next 24 hours.
- **7-Day Forecast**: Extended weekly weather outlook with high/low temperatures and precipitation chance.
- **Animated Weather Icons**: Dynamic icons that represent different weather conditions.
- **Dark/Light Theme**: Toggle between dark and light modes for comfortable viewing.
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices.

## Technologies Used

- **Next.js**: React framework for production with App Router
- **Tailwind CSS**: Utility-first CSS framework
- **WeatherAPI**: Third-party API for accurate weather data
- **Context API**: For state management (theme toggle)
- **Axios**: For API requests
- **React Icons**: For UI icons

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/beydadonmezz/weather-app.git
   cd weather-app

Install dependencies:
bashnpm install
# or
yarn install

Create a .env.local file in the root directory and add your WeatherAPI key:
NEXT_PUBLIC_WEATHER_API_KEY=your_api_key_here
You can get a free API key from WeatherAPI.com
Start the development server:
bashnpm run dev
# or
yarn dev

Open http://localhost:3000 in your browser to see the application.

Usage

Search for a Location: Enter a city name or location in the search bar and press Enter or click the search button.
Get Your Location's Weather: Click the "Use My Location" button to get weather data for your current location.
Toggle Dark/Light Mode: Click the theme toggle button in the header to switch between dark and light themes.
View Forecast Details: Scroll horizontally to see more hourly or weekly forecast data.

Project Structure
weather-app/
├── app/                  # Next.js App Router
├── components/           # React components
│   ├── ErrorMessage.js
│   ├── ForecastList.js
│   ├── HourlyForecast.js
│   ├── Layout.js
│   ├── LoadingSpinner.js
│   ├── SearchBar.js
│   ├── WeatherCard.js
│   └── WeatherIcon.js
├── contexts/             # React context providers
│   └── ThemeContext.js
├── utils/                # Utility functions
│   └── api.js
├── public/               # Static assets
├── styles/               # Global styles
└── .env.local            # Environment variables (not in repo)
Future Improvements

Add weather alerts and notifications
Implement air quality index indicators
Add temperature and precipitation charts
Add multi-language support
Save favorite locations

License
This project is licensed under the MIT License - see the LICENSE file for details.
Acknowledgments

Weather data provided by WeatherAPI.com
Icons used from React Icons

Author
Beyda - https://github.com/beydadonmezz

Feel free to use this project as a starting point for your own weather application or as a portfolio piece to showcase your front-end development skills.