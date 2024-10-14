interface SearchCountriesProps {
  searchCountry: string;
  setSearchCountry: React.Dispatch<React.SetStateAction<string>>;
}
export default function SearchCountries({
  searchCountry,
  setSearchCountry,
}: SearchCountriesProps) {
  function searchCountryHandler(e) {
    setSearchCountry(() => e.target.value);
  }

  return (
    <input
      className="w-full flex-1 bg-zinc-800 p-2 text-zinc-200"
      placeholder="Search a country"
      value={searchCountry}
      onChange={searchCountryHandler}
    />
  );
}
