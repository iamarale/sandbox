import { createFileRoute, Link } from "@tanstack/react-router";
import { getCountry } from "../../api/getCountry";

export const Route = createFileRoute("/country/$id")({
  component: Country,
  loader: async ({ params }) => getCountry(params.id),
});

function Country() {
  const countryData = Route.useLoaderData();
  console.log(countryData[0]);

  return (
    <main className="h-full">
      <Link
        className="mb-2 mt-6 block w-max rounded-sm bg-zinc-800 px-6 py-1 hover:bg-zinc-700"
        to="/"
      >
        Back
      </Link>
      <div className="l:gap-4 grid grid-cols-1 gap-2 md:grid-cols-2">
        <img
          className="w-full"
          src={countryData[0].flags.png}
          alt={`Flag of ${countryData[0].name?.common}`}
        />
        <article>
          <h1 className="text-4xl font-semibold sm:mb-6">
            <small className="text-sm">{countryData[0].name?.official}</small>{" "}
            <br></br>
            {countryData[0].name.common}
          </h1>
          <div className="flex flex-col gap-2 md:flex-row">
            <div>
              <p>Native Name: {countryData[0]?.nativeLanugage}</p>
              <p>Population: {countryData[0].population.toLocaleString()}</p>
              <p>
                Region: {countryData[0].region} ({countryData[0]?.subregion})
              </p>
              <p>Capital: {countryData[0].capital}</p>
            </div>
            <div>
              <p>Currencies: {countryData[0].currencies?.SSL?.name}</p>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
