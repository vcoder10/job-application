import { useState } from "react";
import { Country, State } from "country-state-city";

const Address = () => {
  const [country, setCountry] = useState("IN"); // Default to India's country code
  const [states, setStates] = useState([]);
  const [state, setState] = useState("");

  const countries = Country.getAllCountries();

  return (
    <div className="my-3">
      <h2>Address</h2>
      <input className="w-full border border-black" placeholder="Address" />
      <div className="flex my-2">
        <div className="flex items-center justify-center p-3">
          <select
            className="border border-black w-[400px] p-2"
            value={country}
            onChange={(e) => {
              const selectedCountryCode = e.target.value;
              setCountry(selectedCountryCode);
              setStates(State.getStatesOfCountry(selectedCountryCode));
            }}
          >
            {countries.length > 0 &&
              countries.map((c, index) => (
                <option key={index} value={c.isoCode}>
                  {c.name}
                </option>
              ))}
          </select>
        </div>
        <div className="flex p-3">
          <select
            className="border border-black w-[400px] p-2"
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
            {states.length > 0 &&
              states.map((s, index) => (
                <option key={index} value={s.isoCode}>
                  {s.name}
                </option>
              ))}
          </select>
        </div>
        <div className="mt-3">
          <input className="h-10 px-2 border border-black" placeholder="City" />
        </div>
      </div>
    </div>
  );
};

export default Address;
