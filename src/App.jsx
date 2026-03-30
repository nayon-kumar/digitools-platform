import "./App.css";
import Banner from "./components/Banner/Banner";
import DigitalTools from "./components/DigitalTools/DigitalTools";
import Navbar from "./components/Navbar/Navbar";
import Performance from "./components/Performance/Performance";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Performance />
      <DigitalTools />
    </>
  );
}

export default App;
