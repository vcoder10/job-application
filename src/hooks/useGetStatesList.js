import { useEffect, useState } from "react";

const useGetStatesList = () => {
  const [states, setStates] = useState([]);
  const getStatesList = async () => {
    // fetch("https://api.india.in/v1/states")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => setStates(data));
    // //   .catch((err) => console.log(err
    const res = await fetch("https://api.india.in/v1/states");
    const data = await res.json();
    console.log("hi");
    console.log(data);
  };

  useEffect(() => {
    getStatesList();
  }, []);

  return states;
};

export default useGetStatesList;
