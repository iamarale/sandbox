import { createFileRoute } from "@tanstack/react-router";
import { getStarwarsChar } from "../../api/starwars";

export const Route = createFileRoute("/starwars/$id")({
  component: Pokemon,
  loader: async ({ params }) => getStarwarsChar(params.id),
});

function Pokemon() {
  const { id } = Route.useParams();
  const starwarsChar = Route.useLoaderData();
  console.log(starwarsChar);
  return (
    <div className="border-2 border-neutral-400 rounded flex h-full">
      <div className="p-2">
        <h1>{starwarsChar.name}</h1>
      </div>
      <div className="p-2">
        <p>{starwarsChar.height}</p>
      </div>
    </div>
  );
}
