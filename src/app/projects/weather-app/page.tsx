"use client";
import WeatherSearch from './components/WeatherSearch';
import WeatherResult from './components/WeatherResult';
import ForecastResult from './components/ForecastResult';
import { useWeather } from './hooks/useWeather';

export default function HomePage() {
  const { weather, forecast, error, searchWeather } = useWeather();

  return (
    <>
      <section className="flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4">Počasie</h1>
        <WeatherSearch onSearch={searchWeather} />
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {weather && <WeatherResult weather={weather} />}
        {forecast && <ForecastResult forecast={forecast} />}
      </section>
    </>
  );
}
