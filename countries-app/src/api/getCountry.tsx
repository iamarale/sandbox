export async function getCountry(countryName: string) {
  try {
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}`,
    );
    if (!res.ok) {
      throw new Error("Error fetching data. Please refresh or wait a while.");
    }

    return res.json();
  } catch (e) {
    console.log(e);
  }
}
