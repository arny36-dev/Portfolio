import { useState } from 'react';

export type CitySuggestion = {
  name: string;
  country: string;
  state?: string;
};

export function useCitySuggestions() {
  const [suggestions, setSuggestions] = useState<CitySuggestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchSuggestions = async (query: string) => {
    if (!query || query.length < 2) {
      setSuggestions([]);
      return;
    }

    try {
      setIsLoading(true);
      const res = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(
          query
        )}&limit=5&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}`
      );
      const data = await res.json();

      const cities = data.map((item: any) => ({
        name: item.name,
        country: item.country,
        state: item.state,
      }));

      setSuggestions(cities);
    } catch (error) {
      console.error('Nepodarilo sa načítať návrhy miest', error);
      setSuggestions([]);
    } finally {
      setIsLoading(false);
    }
  };

  return { suggestions, isLoading, fetchSuggestions };
}
