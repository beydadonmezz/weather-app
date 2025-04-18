"use client";

import { useTheme } from '@/contexts/ThemeContext';

const LoadingSpinner = () => {
  const { darkMode } = useTheme();
  
  return (
    <div className="flex justify-center items-center py-12">
      <div className={`animate-spin rounded-full h-12 w-12 border-b-2 ${
        darkMode ? 'border-blue-400' : 'border-blue-700'
      }`}></div>
    </div>
  );
};

export default LoadingSpinner;