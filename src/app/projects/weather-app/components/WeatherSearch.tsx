import { useCityInput } from '../hooks/useCityInput';
import { useCitySuggestions } from '../hooks/useCitySuggestions';

type Props = {
  onSearch: (city: string) => Promise<void>;
};

export default function WeatherSearch({ onSearch }: Props) {
  const { city, setCity, handleSubmit } = useCityInput(onSearch);
  const { suggestions, fetchSuggestions, isLoading } = useCitySuggestions();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCity(value);
    fetchSuggestions(value);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setCity(suggestion);
  };

  const clearInput = () => {
    setCity('');
    fetchSuggestions('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center w-full gap-2 max-w-md">
      <div className="relative w-full">
        <input
          type="text"
          value={city}
          onChange={handleChange}
          placeholder="Zadaj mesto"
          className="basic-input w-full pr-10"
        />
        {city.length > 0 && (
          <button
            type="button"
            onClick={clearInput}
            className="absolute text-2xl right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
            aria-label="Vymazať"
          >
            ×
          </button>
        )}
      </div>
      {isLoading && <p>Hľadám mestá...</p>}
      {!isLoading && suggestions.length > 0 && (
        <ul className="border w-full rounded shadow max-h-60 overflow-y-auto">
          {suggestions.map((s, i) => (
            <li
              key={i}
              className="p-2 hover:bg-blue-400 cursor-pointer"
              onClick={() => handleSuggestionClick(s.name)}
            >
              {s.name}, {s.state ? s.state + ', ' : ''}{s.country}
            </li>
          ))}
        </ul>
      )}
      <button type="submit" className="bg-blue-500 p-2 rounded w-full text-white">
        Hľadať
      </button>
    </form>
  );
}
