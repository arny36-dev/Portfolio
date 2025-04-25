'use client';

import { useState } from 'react';
import { fetchWeather } from '../lib/fetchWeather';
import { WeatherData } from '../types/weather';

export function useWeather() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState('');

  const searchWeather = async (city: string) => {
    try {
      setError('');
      const data = await fetchWeather(city);
      setWeather(data);
    } catch {
      setWeather(null);
      setError('Mesto sa nenašlo');
    }
  };

  return {
    weather,
    error,
    searchWeather,
  };
}
