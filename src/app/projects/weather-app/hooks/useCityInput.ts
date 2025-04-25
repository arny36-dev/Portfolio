import { useState } from 'react';

export function useCityInput(onSearch: (city: string) => void) {
  const [city, setCity] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
    }
  };

  return { city, setCity, handleSubmit };
}
