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
      <BackgroundAnimation>
        <div className="container grid place-content-cente mx-auto min-h-screen w-full lg:px-[50px] xl:px-[150px] relative z-50">
          <div className="flex md:flex-col lg:flex-row  md:h-full lg:h-[550px] xl:h-[750px] my-auto xl:px-[100px]">
            <div className="md:mx-auto flex md:mt-8 lg:mt-0 ">
              <NavBar
                activeFeature={activeFeature}
                handleChange={(e: number) => setActiveFeature(e)}
              />

              <div className="ml-2 md:w-[600px] lg:w-[400px] xl:w-[500px]">
                <InfoBox />
              </div>
            </div>
            <div className="flex-1 flex flex-col bg-white my-6 rounded-r-[4px] w-full overflow-scroll">
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
      </BackgroundAnimation>
    </>
  );
}

export default App;
