import React from "react";

const WorkFlow = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
      <div className="md:max-w-[80%] mx-auto mt-20 px-4 py-15 ">
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Ready to Transform Your Workflow?
          </h3>
          <p className="text-white mt-4 opacity-80">
            Join thousands of professionals who are already using Digitools to
            work smarter. <br />
            Start your free trial today.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 items-center justify-center">
            <button className="btn rounded-full bg-white shadow-none ">
              <p className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                Explore Products
              </p>
            </button>
            <button className="btn rounded-full hover:bg-white hover:text-[#4F39F6] text-white bg-transparent shadow-none">
              View Pricing
            </button>
          </div>
          <p className="mt-4 text-white opacity-80">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
