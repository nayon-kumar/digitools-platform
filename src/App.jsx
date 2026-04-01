import { Suspense, useMemo, useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import DigitalTools from "./components/DigitalTools/DigitalTools";
import Navbar from "./components/Navbar/Navbar";
import Performance from "./components/Performance/Performance";
import ThreeStep from "./components/ThreeStep/ThreeStep";
import Pricing from "./components/Pricing/Pricing";
import WorkFlow from "./components/WorkFlow/WorkFlow";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";

const fetchToolsData = async () => {
  const res = await fetch("/toolsData.json");
  return res.json();
};

const fetchThreeStepData = async () => {
  const res = await fetch("/threeStepData.json");
  return res.json();
};

const fetchPricingData = async () => {
  const res = await fetch("/pricingData.json");
  return res.json();
};

function App() {
  const toolsDataPromise = useMemo(() => fetchToolsData(), []);
  const threeStepDataPromise = useMemo(() => fetchThreeStepData(), []);
  const pricingDataPromise = useMemo(() => fetchPricingData(), []);

  const [cart, setCart] = useState([]);
  return (
    <>
      <Navbar cart={cart} />
      <Banner />
      <Performance />
      <Suspense
        fallback={
          <div className="flex items-center justify-center mt-10">
            <span className="loading loading-spinner loading-xl mx-auto"></span>
          </div>
        }
      >
        <DigitalTools
          toolsDataPromise={toolsDataPromise}
          cart={cart}
          setCart={setCart}
        />
      </Suspense>
      <Suspense
        fallback={
          <div className="flex items-center justify-center mt-10">
            <span className="loading loading-spinner loading-xl mx-auto"></span>
          </div>
        }
      >
        <ThreeStep threeStepDataPromise={threeStepDataPromise} />
      </Suspense>
      <Suspense
        fallback={
          <div className="flex items-center justify-center mt-10">
            <span className="loading loading-spinner loading-xl mx-auto"></span>
          </div>
        }
      >
        <Pricing pricingDataPromise={pricingDataPromise} />
      </Suspense>
      <WorkFlow />
      <Footer />
      {/* React toastify */}
      <ToastContainer />
    </>
  );
}

export default App;
