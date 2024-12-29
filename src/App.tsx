import { useState } from "react";
import "./App.css";
import BackgroundAnimation from "./components/BackgroundAnimation/BackgroundAnimation";
import InfoBox from "./components/InfoBox";
import NavBar from "./components/NavBar";
import Resume from "./modules/Resume";
import About from "./modules/About/About";

function App() {
  const [activeFeature, setActiveFeature] = useState(-1);
  return (
    <>
      {/* <BackgroundAnimation> */}
      <div className="container mx-auto h-[84vh] w-full my-auto px-[6vh] py-[8vh] ">
        <div className=" h-full grid grid-cols-[fit-content(100%)_480px_auto] py-24">
          <NavBar
            activeFeature={activeFeature}
            onChange={(e) => setActiveFeature(e)}
          />
          <div className="ml-2">
            <InfoBox />
          </div>
          {activeFeature === 1 ? (
            <About />
          ) : activeFeature === 2 ? (
            <Resume />
          ) : null}
        </div>
      </div>
      {/* </BackgroundAnimation> */}
    </>
  );
}

export default App;
