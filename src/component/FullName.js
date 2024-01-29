const FullName = () => {
  return (
    <div className="flex flex-col">
      <h3>Full Name</h3>
      <div className="flex ">
        <input
          className="border border-black p-2 mr-6"
          placeholder="First Name"
        />
        <input className="border border-black p-2" placeholder="Last Nmae" />
      </div>
    </div>
  );
};

export default FullName;
