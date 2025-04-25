import { useCityInput } from '../hooks/useCityInput';
type Props = {
  onSearch: (city: string) => Promise<void>;
};

export default function WeatherSearch({ onSearch }: Props) {
  const { city, setCity, handleSubmit } = useCityInput(onSearch);

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Zadaj mesto"
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Hľadať
      </button>
    </form>
  );
}
