import { createFileRoute } from "@tanstack/react-router";
import { getStarwarsData } from "../../api/starwars";

export const Route = createFileRoute("/starwars/$id")({
  component: Starwars,
  loader: async ({ params }) => getStarwarsData("people", params.id),
});

function Starwars() {
  const { id } = Route.useParams();
  const starwarsChar = Route.useLoaderData();
  console.log(starwarsChar);
  return (
    <div className="container mx-auto h-96 mt-12 border-2 border-neutral-400 rounded flex ">
      <div className="p-2 flex-2">
        <h1 className="text-2xl font-bold uppercase">{starwarsChar.name}</h1>
      </div>
      <div className="p-2 flex-1">
        <h3 className="text-lg font-bold mb-1">Biology</h3>
        <p className="font-light">
          <span className="font-semibold">DOB</span>: {starwarsChar.birth_year}
        </p>

        <p className="font-light">
          <span className="font-semibold">Eye color:</span>{" "}
          {starwarsChar.eye_color}
        </p>

        <p className="font-light">
          <span className="font-semibold">Hair Color:</span>{" "}
          {starwarsChar.hair_color}
        </p>

        <p className="font-light">
          <span className="font-semibold">Height:</span> {starwarsChar.height}
        </p>

        <p className="font-light">
          <span className="font-semibold">Gender:</span> {starwarsChar.gender}
        </p>

        <h3 className="text-lg font-bold mb-1">Biology</h3>
      </div>
    </div>
  );
}
