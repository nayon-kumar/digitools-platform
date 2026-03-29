import React from "react";

const Performance = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-5 mt-12">
      <div className="py-10 md:max-w-[80%] mx-auto grid grid-cols-3">
        <div className="text-white text-center">
          <h2 className="text-xl md:text-3xl font-bold">50K+</h2>
          <p>Active Users</p>
        </div>
        <div className="text-white border-r-2 border-l-2 text-center">
          <h2 className="text-xl md:text-3xl font-bold">200+</h2>
          <p>Premium Tools</p>
        </div>
        <div className="text-white text-center">
          <h2 className="text-xl md:text-3xl font-bold">4.9</h2>
          <p>Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Performance;
