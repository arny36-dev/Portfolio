'use client';

import WeatherSearch from './components/WeatherSearch';
import WeatherResult from './components/WeatherResult';
import { useWeather } from './hooks/useWeather';

export default function HomePage() {
  const { weather, error, searchWeather } = useWeather();

  return (
    <main className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Počasie</h1>
      <WeatherSearch onSearch={searchWeather} />
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {weather && <WeatherResult weather={weather} />}
    </main>
  );
}
