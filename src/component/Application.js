import Address from "./Address";
import Contact from "./Contact";
import Education from "./Education";
import FullName from "./FullName";
import Resume from "./Resume";
import Skills from "./Skills";

const Application = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <div>
        <h1 className="text-blue-600">JOb Application Form</h1>
        <div className="border border-black"></div>
      </div>
      <FullName />
      <Address />
      <Contact />
      <Education />
      <Skills />
      <Resume />
      <div>
        <button className="p-2 bg-blue-500">Submit</button>
      </div>
    </div>
  );
};
export default Application;
