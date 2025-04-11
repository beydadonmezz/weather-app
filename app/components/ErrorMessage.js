"use client";

import { useTheme } from '@/contexts/ThemeContext';

const ErrorMessage = ({ message }) => {
  const { darkMode } = useTheme();
  
  return (
    <div className={`${
      darkMode ? 'bg-red-900/20 border-red-800 text-red-100' : 'bg-red-100 border-red-500 text-red-700'
    } border-l-4 p-4 mb-6 rounded`} role="alert">
      <p className="font-bold">Hata</p>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;