export const fetchCurrentWeather = async (city: string) => {
  const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=sk&units=metric`
  );

  if (!res.ok) {
    throw new Error('Nepodarilo sa načítať aktuálne počasie.');
  }

  return res.json();
};

export const fetchForecastWeather = async (city: string) => {
  const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&lang=sk&units=metric`
  );

  if (!res.ok) {
    throw new Error('Nepodarilo sa načítať predpoveď počasia.');
  }

  return res.json();
};
