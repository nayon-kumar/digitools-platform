import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#101727] text-white">
      <div className="md:max-w-[80%] mx-auto px-4 pt-15">
        <div className="grid grid-cols-1 sm:grid-col-6 gap-7 md:grid-cols-6 text-center sm:text-left">
          <div className="sm:col-span-2">
            <h3 className="text-2xl font-bold mb-4">DigiTools</h3>
            <p className="opacity-80">
              Premium digital tools for creators,
              <br />
              professionals, and businesses. Work smarter <br />
              with our suite of powerful tools.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <p className="opacity-80 cursor-pointer mb-3 hover:opacity-100 transition-all duration-300 ease-in-out">
              Features
            </p>
            <p className="opacity-80 cursor-pointer mb-3 hover:opacity-100 transition-all duration-300 ease-in-out">
              Pricing
            </p>
            <p className="opacity-80 cursor-pointer mb-3 hover:opacity-100 transition-all duration-300 ease-in-out">
              Templates
            </p>
            <p className="opacity-80 cursor-pointer mb-3 hover:opacity-100 transition-all duration-300 ease-in-out">
              Integrations
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <p className="opacity-80 cursor-pointer mb-3 hover:opacity-100 transition-all duration-300 ease-in-out">
              About
            </p>
            <p className="opacity-80 cursor-pointer mb-3 hover:opacity-100 transition-all duration-300 ease-in-out">
              Blog
            </p>
            <p className="opacity-80 cursor-pointer mb-3 hover:opacity-100 transition-all duration-300 ease-in-out">
              Careers
            </p>
            <p className="opacity-80 cursor-pointer mb-3 hover:opacity-100 transition-all duration-300 ease-in-out">
              Press
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <p className="opacity-80 cursor-pointer mb-3 hover:opacity-100 transition-all duration-300 ease-in-out">
              Documentation
            </p>
            <p className="opacity-80 cursor-pointer mb-3 hover:opacity-100 transition-all duration-300 ease-in-out">
              Help Center
            </p>
            <p className="opacity-80 cursor-pointer mb-3 hover:opacity-100 transition-all duration-300 ease-in-out">
              Community
            </p>
            <p className="opacity-80 cursor-pointer mb-3 hover:opacity-100 transition-all duration-300 ease-in-out">
              Contact
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Social Links</h4>
            <div className="flex gap-3 mt-4 items-center justify-center sm:justify-normal">
              <FaFacebook
                size={30}
                className="cursor-pointer hover:text-[#4F39F6] transition-all duration-300 ease-in-out"
              />
              <FaInstagram
                size={30}
                className="cursor-pointer hover:text-[#4F39F6] transition-all duration-300 ease-in-out"
              />
              <FaXTwitter
                size={30}
                className="cursor-pointer hover:text-[#4F39F6] transition-all duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="md:max-w-[80%] mx-auto px-4 py-5">
        <hr className="text-gray-300" />
        <div className="flex flex-wrap gap-5 items-center justify-center md:justify-between mt-5 text-center">
          <div>© 2026 Digitools. All rights reserved.</div>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
