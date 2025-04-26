"use client";

import { useState } from "react";
import { WeatherData } from "../types/weather";
import { getWeatherImage } from "../lib/getWeatherImage";

type Props = {
  weather: WeatherData;
};

const formatTime = (timestamp: number) =>
  new Date(timestamp * 1000).toLocaleTimeString("sk-SK", { hour: "2-digit", minute: "2-digit" });

export default function WeatherResult({ weather }: Props) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const backgroundImage = getWeatherImage(weather.weather[0].main);
  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <section className="relative w-full max-w-md mx-auto mt-6 min-h-[460px] rounded-xl shadow-lg overflow-hidden">
      <img
        src={`/images/projects/weather-app/${backgroundImage}`}
        alt=""
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setImageLoaded(true)}
      />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-10" />

      <div className="relative z-20 flex flex-col items-center gap-4 text-white p-6">
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/60">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-white border-opacity-50" />
          </div>
        )}

        <h2 className="text-3xl font-bold text-center">{weather.name}</h2>

        <img src={iconUrl} alt={weather.weather[0].description} className="w-24 h-24 object-contain" />

        <div className="text-center">
          <p className="text-4xl font-extrabold">{weather.main.temp}°C</p>
          <p className="text-lg capitalize">{weather.weather[0].description}</p>
          <p className="text-sm text-gray-300">Pocitová: {weather.main.feels_like}°C</p>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm text-gray-200 w-full">
          <p>💧 Vlhkosť: {weather.main.humidity}%</p>
          <p>🧭 Tlak: {weather.main.pressure} hPa</p>
          <p>💨 Vietor: {weather.wind.speed} m/s</p>
          <p>☁️ Oblačnosť: {weather.clouds.all}%</p>
          <p>👁️ Viditeľnosť: {(weather.visibility / 1000).toFixed(1)} km</p>
          <div className="col-span-2 flex justify-between">
            <p>🌅 Východ: {formatTime(weather.sys.sunrise)}</p>
            <p>🌇 Západ: {formatTime(weather.sys.sunset)}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
