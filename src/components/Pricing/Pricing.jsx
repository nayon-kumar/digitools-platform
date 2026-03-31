import React, { use } from "react";
import PricingCard from "../PricingCard/PricingCard";

const Pricing = ({ pricingDataPromise }) => {
  const pricingData = use(pricingDataPromise);
  return (
    <div className="md:max-w-[80%] mx-auto mt-10 px-4">
      <div className="text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-[#101727]">
          Simple, Transparent Pricing
        </h3>
        <p className="text-[#627382] mt-4">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {pricingData.map((pricing, index) => (
          <PricingCard key={index} pricing={pricing} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
