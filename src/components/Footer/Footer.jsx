import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#101727] text-white">
      <div className="md:max-w-[80%] mx-auto px-4 pt-15">
        <div className="grid grid-cols-5">
          <div>
            <h3>DigiTools</h3>
            <p>
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>
          <div>
            <h4>Product</h4>
            <p>Features</p>
            <p>Pricing</p>
            <p>Templates</p>
            <p>Integrations</p>
          </div>
          <div>
            <h4>Company</h4>
            <p>About</p>
            <p>Blog</p>
            <p>Careers</p>
            <p>Press</p>
          </div>
          <div>
            <h4>Resources</h4>
            <p>Documentation</p>
            <p>Help Center</p>
            <p>Community</p>
            <p>Contact</p>
          </div>
          <div>
            <h4>Social Links</h4>
            <div>
              <FaFacebook />
              <FaInstagram />
              <FaXTwitter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
