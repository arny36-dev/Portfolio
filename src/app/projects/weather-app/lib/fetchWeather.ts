export const fetchWeather = async (city: string) => {
    const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
  
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=sk&units=metric`
    );
  
    if (!res.ok) {
      throw new Error('Mesto sa nenašlo');
    }
  
    const data = await res.json();  
    console.log(data);              
  
    return data;
  };
  