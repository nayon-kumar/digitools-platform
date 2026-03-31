import React from "react";

const StepCard = ({ step, index }) => {
  return (
    <div className="border-2 border-[#F1F1F1] text-center p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out">
      <div className="text-right">
        <p className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full px-2 py-1 inline-block ">
          0{index + 1}
        </p>
      </div>
      <div className="bg-[#F1F1F1] inline-block rounded-full p-4 mt-4">
        <img className="mx-auto" src={step.image} alt="" />
      </div>
      <h4 className="font-bold py-4 text-[#101727] md:text-xl">{step.name}</h4>
      <p className="text-[#627382]">{step.description}</p>
    </div>
  );
};

export default StepCard;
