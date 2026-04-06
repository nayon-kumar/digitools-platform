import React from "react";
import bannerImg from "../../assets/banner.png";
import focueImg from "../../assets/focus.png";
import playImg from "../../assets/Play.png";

const Banner = () => {
  return (
    <div className="mt-25">
      <div className="md:max-w-[80%] mx-auto mt-10 px-4">
        <div className="flex flex-col-reverse md:flex-row gap-5 items-center justify-center md:justify-between">
          <div className="md:flex-1 text-center md:text-left">
            <div className="bg-[#4F39F6]/30 inline-flex items-center gap-3 rounded-full px-4 py-1">
              <img src={focueImg} alt="" />
              <p className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                New: AI-Powered Tools Available
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold my-4 text-[#101727]">
              Supercharge Your Digital Workflow
            </h2>
            <p className="text-[#627382] mb-8">
              Access premium AI tools, design assets, templates, and
              productivity software - all in one place. Start creating faster
              today. Explore Products
            </p>
            <div className="flex gap-3 flex-wrap items-center justify-center md:justify-normal">
              <button className="btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">
                Explore Products
              </button>
              <button className="btn btn-outline btn-primary rounded-full">
                <img src={playImg} alt="" />
                <p>Watch Demo</p>
              </button>
            </div>
          </div>
          <div className="md:flex-1 w-full md:flex md:justify-end">
            <img className="w-full md:w-auto" src={bannerImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
