import React, { useState } from "react";

const DigitalTools = () => {
  const [selectedBtn, setSelectedBtn] = useState("products");
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
        <div className="text-center mt-5 ">
          <div className="border-2 border-gray-200 px-3 py-2 rounded-full inline-block">
            <button
              onClick={() => setSelectedBtn("products")}
              className={`btn rounded-full ${selectedBtn === "products" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : ""} `}
            >
              Products
            </button>
            <button
              onClick={() => setSelectedBtn("cart")}
              className={`btn rounded-full ${selectedBtn === "cart" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : ""} `}
            >
              Cart (2)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalTools;
