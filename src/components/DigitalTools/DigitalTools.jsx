import React, { use, useState } from "react";
import { ShoppingCart } from "lucide-react";
import ToolsCard from "../ToolsCard/ToolsCard";
import Cart from "../Cart/Cart";
import { toast } from "react-toastify";

const DigitalTools = ({ toolsDataPromise, cart, setCart }) => {
  const toolsData = use(toolsDataPromise);

  const [selectedBtn, setSelectedBtn] = useState("products");
  const [totalPrice, setTotalPrice] = useState(0);

  const deleteAll = () => {
    toast.success("Checkout Successfully!");
    setCart([]);
    setTotalPrice(0);
  };

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
        {/* Toggle btn */}
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
              Cart ({cart.length})
            </button>
          </div>
        </div>
        {/* Content */}
        {selectedBtn === "products" ? (
          <>
            <div className="mt-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {toolsData.map((tool) => (
                  <ToolsCard
                    key={tool.id}
                    tool={tool}
                    cart={cart}
                    setCart={setCart}
                    totalPrice={totalPrice}
                    setTotalPrice={setTotalPrice}
                  />
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="mt-10">
              <div className="border-2 border-[#F2F2F2] px-4 py-4 rounded-2xl">
                <h4 className="text-xl font-bold text-[#101727] mb-6">
                  Your Cart
                </h4>
                {cart.length > 0 ? (
                  <>
                    <div>
                      <div>
                        {cart.map((singleCart, index) => (
                          <Cart
                            key={index}
                            singleCart={singleCart}
                            cart={cart}
                            setCart={setCart}
                            totalPrice={totalPrice}
                            setTotalPrice={setTotalPrice}
                          />
                        ))}
                      </div>
                      <div className="flex items-center justify-between mt-5">
                        <p>Total:</p>
                        <p className="font-bold text-[#101727]">
                          ${totalPrice}
                        </p>
                      </div>
                      <button
                        className="btn w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full mt-5 "
                        onClick={deleteAll}
                      >
                        Proceed to Checkout
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center justify-center">
                      <ShoppingCart size={100} className="text-gray-300" />
                    </div>
                    <p className="text-center mt-4 text-gray-400">
                      Your cart is empty
                    </p>
                  </>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DigitalTools;
