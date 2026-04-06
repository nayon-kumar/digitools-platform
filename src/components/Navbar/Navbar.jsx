import React from "react";
import { ShoppingCart } from "lucide-react";

const Navbar = ({ cart }) => {
  return (
    <div className="fixed top-0 left-0 w-full z-25 bg-white">
      <div className="md:max-w-[80%] mx-auto">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Products</a>
                </li>
                <li>
                  <a>Features</a>
                </li>
                <li>
                  <a>Pricing</a>
                </li>
                <li>
                  <a>Testimonials</a>
                </li>
                <li>
                  <a>FAQ</a>
                </li>
                <li>
                  <a className="flex sm:hidden btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">
                    Get Started
                  </a>
                </li>
              </ul>
            </div>
            <p className="text-xl font-semibold cursor-pointer bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              DigiTools
            </p>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Products</a>
              </li>
              <li>
                <a>Features</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Testimonials</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="pr-1 flex items-center">
              {/* Shopping Cart */}
              <div className="relative hover:bg-neutral-content p-2 rounded-full">
                <ShoppingCart className="cursor-pointer" />
                {cart.length > 0 ? (
                  <>
                    <p className="absolute top-1 left-4 text-white bg-red-500 px-1.25  text-[10px] rounded-full">
                      {cart.length}
                    </p>
                  </>
                ) : (
                  <></>
                )}
              </div>
              <p className="cursor-pointer hover:bg-neutral-content px-3 py-1 rounded-sm">
                Login
              </p>
            </div>
            <a className="hidden sm:flex btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">
              Get Started
            </a>
          </div>
        </div>
      </div>
      <hr className="text-gray-300" />
    </div>
  );
};

export default Navbar;
