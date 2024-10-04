interface CountriesDataProps {
  countriesData: Country[];
  selectedFilter: string;
}
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

export default function AllCountries({
  countriesData,
  selectedFilter,
}: CountriesDataProps) {
  // sorts depending on selected filter value
  if (selectedFilter === "population") {
    countriesData = countriesData.sort((a, b) => b.population - a.population);
  } else if (selectedFilter === "region") {
    countriesData = countriesData.sort((a, b) =>
      a.region.localeCompare(b.region),
    );
  } else if (selectedFilter === "capital") {
    countriesData = countriesData.sort((a, b) => {
      // checks if a or b exists
      const capitalA = a.capital?.[0] || "";
      const capitalB = b.capital?.[0] || "";
      return capitalA.localeCompare(capitalB);
    });
  }

  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4">
      {countriesData?.map((country) => (
        <div key={country.name.common} className="flex flex-col">
          <img
            className="min-h-64 rounded-t-md"
            src={country.flags.png}
            alt=""
          />
          <div className="rounded-b-md bg-zinc-800 p-3">
            <h1 className="mb-2 text-xl font-bold underline">
              {country.name.common}
            </h1>
            <p>
              <span className="font-bold">Population: </span>
              {country.population.toLocaleString()}
            </p>
            <p>
              <span className="font-bold">Region: </span>
              {country.region}
            </p>
            <p>
              <span className="font-bold">Capital: </span>
              {country.capital ? country.capital[0] : "N/A"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
