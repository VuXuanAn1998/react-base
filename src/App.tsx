import { useState } from "react";
import "./App.css";
import BackgroundAnimation from "./components/BackgroundAnimation/BackgroundAnimation";
import InfoBox from "./components/InfoBox";
import NavBar from "./components/NavBar";
import Resume from "./modules/Resume";
import About from "./modules/About/About";
import Works from "./modules/Work/Works";
import Contact from "./modules/Contact/Contact";
function App() {
  const [activeFeature, setActiveFeature] = useState(1);
  return (
    <>
      {/* <BackgroundAnimation> */}

      <div className="container grid place-content-cente mx-auto min-h-screen w-full lg:px-[50px] xl:px-[150px]">
        <div className=" grid my-auto w-full grid-cols-[100px_1fr] lg:grid-cols-[fit-content(100%)_440px_auto] xl:grid-cols-[fit-content(100%)_480px_auto] h-[70vh]">
          <NavBar
            activeFeature={activeFeature}
            onChange={(e) => setActiveFeature(e)}
          />
          <div className="m-2 w-full">
            <InfoBox />
          </div>
          <div className="ml-2 overflow-scroll">
            {activeFeature === 1 ? (
              <About />
            ) : activeFeature === 2 ? (
              <Resume />
            ) : activeFeature === 3 ? (
              <Works />
            ) : (
              <Contact />
            )}
          </div>
        </div>
      </div>
      {/* </BackgroundAnimation> */}
    </>
  );
}

export default App;
