import { Link } from "@tanstack/react-router";
import { CountryTypes } from "../App"; // Assuming CountryTypes is exported from App.tsx

interface DisplayCountryProps {
  data: CountryTypes[];
  setCountryOnClick: React.Dispatch<React.SetStateAction<CountryTypes | null>>;
  searchCountry: string;
}

export default function DisplayCountry({
  data,
  searchCountry,
  setCountryOnClick,
}: DisplayCountryProps) {
  console.log(searchCountry);

  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-4">
      {data.map((country) => (
        <Link
          to={`/country/${country.name.common}`} // Use curly braces with expressions
          params={{ countryName: country.name.common }}
          key={country.name.common}
        >
          <div
            onClick={() => setCountryOnClick(country)}
            className="rounded-sm border-[1px]"
            key={country.name.common}
          >
            <img
              src={country.flags.png}
              alt={`Flag of ${country.name.common}`}
              className="h-48 w-full md:h-64"
            />
            <div className="p-2">
              <h1 className="text-xl font-bold">{country.name.common}</h1>
              <p>
                <span className="font-semibold">Population</span>:{" "}
                {country.population.toLocaleString()}
              </p>
              <p>
                <span className="font-semibold">Region</span>: {country.region}
              </p>
              <p>
                <span className="font-semibold">Capital</span>:{" "}
                {country.capital ? country.capital[0] : "N/A"}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
