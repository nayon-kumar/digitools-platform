import React from "react";
import { toast } from "react-toastify";

const Cart = ({ singleCart, cart, setCart, totalPrice, setTotalPrice }) => {
  const deleteItem = (item) => {
    toast.success(`${item.name} Deleted!`);
    const filteredCard = cart.filter((single) => single.id !== item.id);
    setCart(filteredCard);
    setTotalPrice(totalPrice - item.price);
  };

  return (
    <div className="bg-[#F9FAFC] flex gap-3 items-center justify-between mb-4 p-5 rounded-2xl">
      <div className="flex flex-wrap gap-5 items-center">
        <div className="border-2 p-3 rounded-full bg-white border-[#F2F2F2]">
          <img src={singleCart.icon} alt={singleCart.name} />
        </div>
        <div>
          <h4 className="text-[#101727] font-bold">{singleCart.name}</h4>
          <p className="text-[#627382] mt-2">${singleCart.price}</p>
        </div>
      </div>
      <div>
        <p
          className="text-[#FF3980] font-bold cursor-pointer"
          onClick={() => deleteItem(singleCart)}
        >
          Remove
        </p>
      </div>
    </div>
  );
};

export default Cart;
