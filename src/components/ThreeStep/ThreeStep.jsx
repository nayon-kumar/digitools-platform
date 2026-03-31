import React, { use } from "react";
import StepCard from "../StepCard/StepCard";

const ThreeStep = ({ threeStepDataPromise }) => {
  const threeStepData = use(threeStepDataPromise);
  return (
    <div className="bg-[#F9FAFC] py-10 mt-20 px-4">
      <div className="md:max-w-[80%] mx-auto">
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-[#101727]">
            Get Started in 3 Steps
          </h3>
          <p className="text-[#627382] mt-4">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {threeStepData.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThreeStep;
