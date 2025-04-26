"use client";

import { useState } from 'react';
import { fetchCurrentWeather, fetchForecastWeather } from '../api/fetchWeather';
import { WeatherData, ForecastData } from '../types/weather';

export function useWeather() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastData | null>(null);
  const [error, setError] = useState('');

  const searchWeather = async (city: string) => {
    try {
      setError('');
      const [currentWeather, forecastWeather] = await Promise.all([
        fetchCurrentWeather(city),
        fetchForecastWeather(city),
      ]);

      setWeather(currentWeather);
      setForecast(forecastWeather);
    } catch (err) {
      setWeather(null);
      setForecast(null);
      setError('Mesto sa nenašlo alebo nastala chyba.');
    }
  };

  return { weather, forecast, error, searchWeather };
}
