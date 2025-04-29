"use client";

import { ForecastData, ForecastItem } from "../types/weather";
import { getWeatherImage } from "../lib/getWeatherImage";

type Props = {
  forecast: ForecastData;
};

function groupByDay(list: ForecastItem[]) {
  return list.reduce<Record<string, ForecastItem[]>>((acc, item) => {
    const date = item.dt_txt.split(" ")[0];
    (acc[date] ||= []).push(item);
    return acc;
  }, {});
}

function ForecastCard({ item }: { item: ForecastItem }) {
  const time = new Date(item.dt_txt).toLocaleTimeString("sk-SK", { hour: "2-digit", minute: "2-digit" });
  const icon = getWeatherImage(item.weather[0].main);

  return (
    <div className="relative w-[100px] h-[150px] rounded-lg overflow-hidden shadow-md">
      <img
        src={`/images/projects/weather-app/${icon}`}
        alt={item.weather[0].description}
        className="absolute inset-0 w-full h-full object-cover object-top object-right"
      />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white p-2 text-center">
        <p className="text-xs">{time}</p>
        <p className="text-sm font-bold">{Math.round(item.main.temp)}°C</p>
        <p className="text-[10px]">{item.weather[0].description}</p>
      </div>
    </div>
  );
}

export default function ForecastResult({ forecast }: Props) {
  const grouped = groupByDay(forecast.list);

  return (
    <section className="w-full max-w-5xl mx-auto mt-10">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-xl p-4 text-white">
        {Object.entries(grouped).map(([date, items]) => (
          <div key={date} className="mb-10">
            <h3 className="text-lg font-semibold mb-6 text-center">
              {new Date(date).toLocaleDateString("sk-SK", { weekday: "long", day: "2-digit", month: "2-digit" })}
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {items.map((item) => (
                <ForecastCard key={item.dt} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
  
  
}
