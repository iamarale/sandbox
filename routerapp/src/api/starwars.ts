export async function getStarwarsData(category: string, id: string) {
  const res = await fetch(`https://swapi.dev/api/${category}/${id}`);
  const data = await res.json();
  return data;
}
