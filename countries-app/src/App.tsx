import { useEffect, useState } from "react";
import AllCountries from "./components/allCountries";
import FilterCountries from "./components/filterCountries";

interface Country {
  name: {
    common: string;
  };
  population: number;
  region: string;
  capital: string[];
  flags: {
    png: string;
  };
}

export default function App() {
  const [data, setData] = useState<Country[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedFilter, setSelectedFilter] = useState<string>("population");

  //   Api Call
  useEffect(() => {
    async function getAllCountries() {
      try {
        setIsLoading(true);
        const res = await fetch(`https://restcountries.com/v3.1/all`);
        const resData: Country[] = await res.json();
        setData(resData);
        console.log(data);
        setIsLoading(false);
      } catch (e: any) {
        setIsLoading(false);
        setError(e.message);
      }
    }
    getAllCountries();
  }, []);

  function handleChange(e) {
    setSelectedFilter(e.target.value);
  }

  if (isLoading) return <h1>Loading</h1>;
  if (error) return <h1>Error.. {error}</h1>;

  return (
    <main>
      <select
        className="bg-zinc-800 text-zinc-200 mt-12 mb-4 px-2 py-1  rounded-md"
        onChange={handleChange}
      >
        <option value="population">Population</option>
        <option value="region">Region</option>
        <option value="capital">Capital</option>
      </select>
      {data && (
        <AllCountries selectedFilter={selectedFilter} countriesData={data} />
      )}
    </main>
  );
}
