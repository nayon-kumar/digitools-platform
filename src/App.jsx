import { Suspense } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import DigitalTools from "./components/DigitalTools/DigitalTools";
import Navbar from "./components/Navbar/Navbar";
import Performance from "./components/Performance/Performance";

const fetchToolsData = async () => {
  const res = await fetch("/toolsData.json");
  return res.json();
};

function App() {
  const toolsDataPromise = fetchToolsData();
  return (
    <>
      <Navbar />
      <Banner />
      <Performance />
      <Suspense
        fallback={
          <div className="flex items-center justify-center mt-10">
            <span className="loading loading-spinner loading-xl mx-auto"></span>
          </div>
        }
      >
        <DigitalTools toolsDataPromise={toolsDataPromise} />
      </Suspense>
    </>
  );
}

export default App;
