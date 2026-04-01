import { Check } from "lucide-react";

const PricingCard = ({ pricing }) => {
  return (
    <div
      className={`relative border-2 p-5 border-[#F2F2F2] rounded-2xl shadow-lg hover:shadow-xl hover:scale-103 transition-all duration-300 ease-in-out flex flex-col h-full ${pricing.tag === "Most Popular" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "bg-[#F9FAFC]"}`}
    >
      {pricing.tag === "Most Popular" ? (
        <>
          <div className="text-[#BB4D00] bg-[#FEF3C6] rounded-full px-3 py-1.5 left-1/2 -translate-x-1/2 absolute -top-4">
            <p>Most Popular</p>
          </div>
        </>
      ) : (
        <></>
      )}
      <h3 className="font-bold text-xl">{pricing.name}</h3>

      <p
        className={`mt-2 mb-4 ${pricing.tag === "Most Popular" ? "text-white" : "text-[#627382]"}`}
      >
        {pricing.description}
      </p>

      <p className="mb-4">
        <span className="font-bold text-xl">${pricing.price}</span>
        <span
          className={`capitalize ${pricing.tag === "Most Popular" ? "text-white" : "text-[#627382]"}`}
        >
          /{pricing.period}
        </span>
      </p>
      <div className="flex-1 mb-6">
        {pricing.features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2 mb-2">
            <Check className="text-green-500 shrink-0" />
            <p
              className={`${pricing.tag === "Most Popular" ? "text-white" : "text-[#627382]"}`}
            >
              {feature}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-auto">
        <button
          className={`btn w-full rounded-full  py-3 font-medium ${pricing.tag === "Most Popular" ? "" : "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"}`}
        >
          {pricing.btn}
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
