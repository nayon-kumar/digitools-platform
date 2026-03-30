import React from "react";

const DigitalTools = () => {
  return (
    <div>
      <div className="md:max-w-[80%] mx-auto mt-15 px-4">
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-[#101727]">
            Premium Digital Tools
          </h3>
          <p className="text-[#627382] mt-4">
            Choose from our curated collection of premium digital products
            designed <br />
            to boost your productivity and creativity.
          </p>
        </div>
        <div className="text-center mt-5">
          <button className="btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">
            Products
          </button>
          <button className="btn rounded-full">Cart (2)</button>
        </div>
      </div>
    </div>
  );
};

export default DigitalTools;
