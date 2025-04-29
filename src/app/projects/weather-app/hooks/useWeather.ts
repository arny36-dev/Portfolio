"use client";

import { useState } from 'react';
import { fetchCurrentWeather, fetchForecastWeather } from '../api/fetchWeather';
import { WeatherData, ForecastData } from '../types/weather';

export function useWeather() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastData | null>(null);
  const [error, setError] = useState('');

  const searchCurrentWeather = async (city: string) => {
    try {
      const currentWeather = await fetchCurrentWeather(city);
      setWeather(currentWeather);
    } catch (err) {
      setWeather(null);
      setError('Nepodarilo sa načítať aktuálne počasie.');
      throw err; 
    }
  };

  const searchForecastWeather = async (city: string) => {
    try {
      const forecastWeather = await fetchForecastWeather(city);
      setForecast(forecastWeather);
    } catch (err) {
      setForecast(null);
      setError('Nepodarilo sa načítať predpoveď počasia.');
      throw err; 
    }
  };

  const searchWeather = async (city: string) => {
    try {
      setError('');
      await Promise.all([
        searchCurrentWeather(city),
        searchForecastWeather(city),
      ]);
    } catch (err) {
      setError('Mesto sa nenašlo alebo nastala chyba.');
    }
  };

  return { weather, forecast, error, searchWeather };
}
