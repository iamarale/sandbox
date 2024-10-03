import { useEffect, useState } from "react";
import AllCountries from "./components/allCountries";

export default function App() {
  const [data, setData] = useState<Array>();
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //   Api Call
  useEffect(() => {
    async function getAllCountries() {
      try {
        setIsLoading(true);
        const res = await fetch(`https://restcountries.com/v3.1/all`);
        const resData = await res.json();
        setData(resData);
        console.log(data);
        setIsLoading(false);
      } catch (e) {
        setError(e);
      }
    }
    getAllCountries();
  }, []);

  if (isLoading) return <h1>Loading</h1>;
  if (error) return <h1>Error.. {error}</h1>;

  return (
    <main>
      <AllCountries countriesData={data} />
    </main>
  );
}
