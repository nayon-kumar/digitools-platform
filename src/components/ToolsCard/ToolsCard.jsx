import React from "react";
import { Check } from "lucide-react";

const ToolsCard = ({ tool }) => {
  console.log(tool.features);
  return (
    <div className="border-2 p-5 border-[#F2F2F2] rounded-2xl shadow-lg hover:shadow-xl hover:scale-103 transition-all duration-300 relative">
      <div className="absolute top-5 right-5">
        <span className="text-[#BB4D00] bg-[#FEF3C6] px-4 py-1.5 rounded-full ">
          {tool.tag}
        </span>
      </div>
      <img
        className="h-15 border-2 border-[#F2F2F2] rounded-full p-2"
        src={tool.icon}
        alt={tool.name}
      />
      <h3 className="font-bold text-xl mt-4">{tool.name}</h3>
      <p className="text-[#627382] py-4">{tool.description}</p>
      <p className="mb-4">
        <span className="font-bold text-xl">${tool.price}</span>
        <span className="text-[#627382]">/{tool.period}</span>
      </p>
      <div>
        {tool.features.map((feature) => {
          return (
            <div className="flex items-center gap-2">
              <Check className="text-green-500" />
              <p className="text-[#627382]">{feature}</p>
            </div>
          );
        })}
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
