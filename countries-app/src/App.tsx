import { useEffect, useState } from "react";
import AllCountries from "./components/AllCountries";
import SelectFilter from "./components/SelectFilter";
import SearchInput from "./components/SearchInput";
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
  // states
  const [data, setData] = useState<Country[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedFilter, setSelectedFilter] = useState<string>("population");
  const [searchCountry, setSearchCountry] = useState<string>("all");

  //   Api Call
  useEffect(() => {
    async function getAllCountries() {
      try {
        setIsLoading(true);

        // fetches data from api
        const res = await fetch(`https://restcountries.com/v3.1/all`);
        // const res = await fetch(`https://restcountries.com/v3.1/name/${searchCountry}`);

        // checks of ok is false
        if (!res.ok) {
          setIsLoading(false);
          throw new Error("Something went wrong");
        }

        // parses data to json
        const resData: Country[] = await res.json();

        // sets data to state
        setData(resData);
        console.log(data);

        //resets state
        setIsLoading(false);
      } catch (e: any) {
        // Stop loading and set error message
        setIsLoading(false);
        setError(e.message);
      }
    }
    getAllCountries();
  }, []);

  // if there is an error
  if (error)
    return (
      <div className="flex h-screen items-center justify-center">
        <h1>Error: {error}</h1>
      </div>
    );

  // while loading data...
  if (isLoading)
    return (
      <div className="flex h-screen items-center justify-center">
        <h1>Loading... this will only take a few seconds</h1>
      </div>
    );

  // renders data
  return (
    <main>
      {/* Search and filter */}
      <header className="mb-4 mt-12 flex items-center justify-between">
        <SearchInput
          searchCountry={searchCountry}
          setSearchCountry={setSearchCountry}
          countriesData={data}
        />
        <SelectFilter setSelectedFilter={setSelectedFilter} />
      </header>

      {/* All Countries */}
      {data && (
        <AllCountries selectedFilter={selectedFilter} countriesData={data} />
      )}
    </main>
  );
}
