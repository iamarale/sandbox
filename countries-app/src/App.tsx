import { useEffect, useState } from "react";
import DisplayCountry from "./components/DisplayCountry";
import SearchCountries from "./components/SearchCountries";
import CountryFilter from "./components/CountryFilter";

// types
export interface CountryTypes {
  name: { common: string; official: string };
  capital: string;
  currencies: { code: string; name: string }[];
  callingCodes: string[];
  region: string;
  subregion: string;
  borders: string[];
  population: number;
  languages: { code: string; name: string }[];
  nativeName: { common: string; official: string };
  translations: { common: string; official: string }[];
  timezones: string[];
  flags: { png: string };
}

export default function App() {
  // state
  const [data, setData] = useState<CountryTypes[] | null>(null);
  const [searchCountry, setSearchCountry] = useState<string>("");
  const [countryOnClick, setCountryOnClick] = useState<CountryTypes | null>(
    null,
  );
  const [selectFilter, setSelectFilter] = useState<string>("all");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // data fetching
  useEffect(() => {
    async function getAllCountries() {
      try {
        setIsLoading(true);
        setError(null); // Reset the error state before fetching
        let res;

        if (searchCountry === "all" || searchCountry === "") {
          res = await fetch(`https://restcountries.com/v3.1/all`);
        } else {
          res = await fetch(
            `https://restcountries.com/v3.1/name/${searchCountry}`,
          );
        }

        // Error Handling
        if (!res.ok) {
          throw new Error(
            "Error fetching data. Please refresh or wait a while.",
          );
        }

        const resData = await res.json();
        setData(resData);
        console.log(resData[0]);
      } catch (e: any) {
        console.error(e);
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    }

    getAllCountries();
  }, [searchCountry]);

  // filter data by region
  const filteredData = data?.filter((country) => {
    if (selectFilter === "all") return true;
    return country.region.toLowerCase() === selectFilter;
  });

  return (
    <main>
      <header className="mb-4 mt-12 flex items-center gap-2">
        <SearchCountries
          searchCountry={searchCountry}
          setSearchCountry={setSearchCountry}
        />
        <CountryFilter
          selectFilter={selectFilter}
          setSelectFilter={setSelectFilter}
        />
      </header>

      {/* Error handling */}
      {error && <div className="text-red-500">{error}</div>}

      {/* Loading and Data Display */}
      {isLoading ? (
        <h1 className="text-2xl font-bold uppercase">
          Loading data... Please be patient{" "}
        </h1>
      ) : (
        data && (
          <DisplayCountry
            setCountryOnClick={setCountryOnClick}
            data={filteredData!}
            searchCountry={searchCountry}
          />
        )
      )}
    </main>
  );
}
