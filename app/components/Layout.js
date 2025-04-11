"use client";

import { useTheme } from '@/contexts/ThemeContext';
import Head from 'next/head';

const Layout = ({ children }) => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'dark bg-gray-900 text-white' 
        : 'bg-gray-50 text-gray-900'
    }`}>
      <header className={`py-4 shadow-md ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">
            <span className="text-blue-500">Weather</span>App
          </h1>
          <button 
            onClick={toggleDarkMode} 
            className={`p-2 rounded-full ${
              darkMode 
                ? 'bg-gray-700 hover:bg-gray-600' 
                : 'bg-gray-100 hover:bg-gray-200'
            } transition-colors`}
            aria-label={darkMode ? 'Açık Temaya Geç' : 'Koyu Temaya Geç'}
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </div>
      </header>

      <main className="container mx-auto py-6 px-4">
        {children}
      </main>

      <footer className={`py-4 mt-8 ${
        darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-700'
      }`}>
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} WeatherApp - GitHub Portfolyo Projesi</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;