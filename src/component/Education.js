import React from "react";

const Education = () => {
  return (
    <div className="flex flex-col">
      <h2>Education</h2>
      <div className="flex">
        <div className="mr-3">
          <h4>Colllege/University</h4>
          <input className="border border-black" placeholder="College" />
        </div>
        <div className="mr-3">
          <h4>Degree</h4>
          <input className="border border-black" placeholder="Degree" />
        </div>
        <div>
          <h4>Courses</h4>
          <input className="border border-black" placeholder="Coursed" />
        </div>
      </div>
      <div className="flex">
        <div className="mr-3">
          <h4>From</h4>
          <input
            className="border border-black"
            placeholder="from"
            type="date"
          />
        </div>
        <div>
          <h4>To</h4>
          <input className="border border-black" placeholder="to" type="date" />
        </div>
      </div>
    </div>
  );
};

export default Education;
