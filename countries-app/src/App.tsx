import { useEffect, useState } from "react";
import AllCountries from "./components/AllCountries";
import SelectFilter from "./components/SelectFilter";
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

  if (isLoading) return <h1>Loading</h1>;
  if (error) return <h1>Error.. {error}</h1>;
  return (
    <main>
      <SelectFilter setSelectedFilter={setSelectedFilter} />
      {data && (
        <AllCountries selectedFilter={selectedFilter} countriesData={data} />
      )}
    </main>
  );
}
