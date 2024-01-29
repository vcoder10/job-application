import { useEffect, useState } from "react";

const useGetCountriesList = () => {
  const [countries, setCountries] = useState([]);
  const getCountriesList = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    // countries = data;
    const cnt = data.map((c) => c.name.common);
    cnt.sort();
    setCountries(cnt);
    // console.log(data);
  };

  useEffect(() => {
    getCountriesList();
  }, []);
  return countries;
};
export default useGetCountriesList;
