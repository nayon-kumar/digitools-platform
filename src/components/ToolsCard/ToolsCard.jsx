import React from "react";
import { Check } from "lucide-react";

const ToolsCard = ({ tool }) => {
  return (
    <div className="border-2 p-5 border-[#F2F2F2] rounded-2xl shadow-lg hover:shadow-xl hover:scale-103 transition-all duration-300 relative">
      <div className="absolute top-5 right-5">
        <span className="text-[#BB4D00] bg-[#FEF3C6] px-4 py-1.5 rounded-full ">
          Best Seller
        </span>
      </div>
      <img
        className="h-15 border-2 border-[#F2F2F2] rounded-full p-2"
        src="https://i.ibb.co.com/fYcjBMzw/operation.png"
        alt=""
      />
      <h3 className="font-bold text-xl mt-4">AI Writing Pro</h3>
      <p className="text-[#627382] py-4">
        Generate high-quality content, blogs, and marketing copy in seconds with
        advanced AI.
      </p>
      <p className="mb-4">
        <span className="font-bold text-xl">$29</span>
        <span className="text-[#627382]">/mo</span>
      </p>
      <div>
        <div className="flex items-center gap-2">
          <Check className="text-green-500" />
          <p className="text-[#627382]">Unlimited AI generations</p>
        </div>
        <div className="flex items-center gap-2">
          <Check className="text-green-500" />
          <p className="text-[#627382]">Unlimited AI generations</p>
        </div>
        <div className="flex items-center gap-2">
          <Check className="text-green-500" />
          <p className="text-[#627382]">Unlimited AI generations</p>
        </div>
      </div>
      <div className="mt-4">
        <button className="btn w-full rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white ">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ToolsCard;
