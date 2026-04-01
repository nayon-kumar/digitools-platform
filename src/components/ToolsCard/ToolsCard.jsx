import React from "react";
import { Check } from "lucide-react";
import { toast } from "react-toastify";

const ToolsCard = ({ tool, cart, setCart, totalPrice, setTotalPrice }) => {
  const handleClick = (item) => {
    const isExist = cart.find((cartItem) => cartItem.id === item.id);
    if (!isExist) {
      toast.success(`${item.name} Added!`);
      setCart([...cart, item]);
      setTotalPrice(totalPrice + item.price);
    }
  };

  const isSelected = cart.some((cartItem) => cartItem.id === tool.id);

  return (
    <div className="border-2 p-5 border-[#F2F2F2] rounded-2xl shadow-lg hover:shadow-xl hover:scale-103 transition-all duration-300 ease-in-out flex flex-col h-full relative">
      <div className="absolute top-5 right-5">
        <span
          className={`px-4 py-1.5 rounded-full ${tool.tag == "Best Seller" ? "text-[#BB4D00] bg-[#FEF3C6]" : tool.tag == "New" ? "text-[#0A883E] bg-[#DBFCE7]" : "text-[#4F39F6] bg-[#E1E7FF]"}`}
        >
          {tool.tag}
        </span>
      </div>
      <div className="border-2 border-[#F2F2F2] rounded-full inline-max p-3">
        <img className="h-7" src={tool.icon} alt={tool.name} />
      </div>
      <h3
        className="font-bold text-xl mt-4"
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {tool.name}
      </h3>

      <p
        className="text-[#627382] mt-2 mb-4"
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {tool.description}
      </p>

      <p className="mb-4">
        <span className="font-bold text-xl">${tool.price}</span>
        <span className="text-[#627382] capitalize">/{tool.period}</span>
      </p>
      <div className="flex-1 mb-6">
        {tool.features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2 mb-2">
            <Check className="text-green-500 shrink-0" />
            <p className="text-[#627382]">{feature}</p>
          </div>
        ))}
      </div>
      <div className="mt-auto">
        <button
          type="button"
          onClick={() => handleClick(tool)}
          disabled={isSelected}
          className={`btn w-full rounded-full  py-3 font-medium ${isSelected ? "" : "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"}`}
        >
          {isSelected ? "Added To Cart" : "Buy Now"}
        </button>
      </div>
    </div>
  );
};

export default ToolsCard;
