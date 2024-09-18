export async function getStarwarsChar(id: string) {
  const res = await fetch(`https://swapi.dev/api/people/${id}`);
  return await res.json();
}
