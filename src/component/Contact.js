import React, { useState } from "react";
import codes from "country-calling-code";
const Contact = () => {
  const [code, setCode] = useState();
  console.log(codes);

  return (
    <div className="flex flex-col my-3">
      <h2>Phone</h2>
      <div className="flex">
        <div className="flex p-3">
          <select
            className="border border-black w-[200px] p-2"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          >
            {codes.map((c, index) => (
              <option key={index} value={c.countryCodes}>
                {c.country + " " + c.countryCodes}
              </option>
            ))}
          </select>
        </div>
        <input className="border border-black" placeholder="MObile no" />
      </div>
      <div className="flex my-3">
        <div className="mr-3">
          <h3>Email</h3>
          <input className="border border-black" placeholder="Email" />
        </div>
        <div>
          <h3>Gender</h3>
          <input className="border border-black" placeholder="Gender" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
