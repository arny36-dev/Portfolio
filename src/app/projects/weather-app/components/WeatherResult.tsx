import { WeatherData } from "../types/weather";

type Props = {
    weather: WeatherData;
  };
  
  export default function WeatherResult({ weather }: Props) {
    return (
      <div className="mt-4">
        <h2 className="text-xl font-bold">{weather.name}</h2>
        <p>Teplota: {weather.main.temp}°C</p>
        <p>Počasie: {weather.weather[0].description}</p>
        <p>Vietor: {weather.wind.speed} m/s</p>
      </div>
    );
  }
  