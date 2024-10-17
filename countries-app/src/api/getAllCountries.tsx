export const getAllCountries = async function () {
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