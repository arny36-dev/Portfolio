export type WeatherData = {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
  };
  weather: {
    main: string;
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
  clouds: {
    all: number;
  };
  visibility: number;
  sys: {
    sunrise: number;
    sunset: number;
  };
};

export type ForecastItem = {
  dt: number;
  main: {
    temp: number;
  };
  weather: {
    main: string; 
    description: string;
    icon: string;
  }[];
  dt_txt: string;
};

export type ForecastData = {
  list: ForecastItem[];
};
