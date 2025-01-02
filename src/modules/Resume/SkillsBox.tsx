import { FaCode } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import PieChart from "../../components/common/PieChart.tsx";
import { SiHyperskill } from "react-icons/si";
import { FaPaintBrush } from "react-icons/fa";
import LayoutBox from "../../components/common/LayoutBox.tsx";
import { DATA } from "../../../data.ts";
export default function SkillsBox() {
  return (
    <LayoutBox title="My Skills">
      <div className="grid grid-cols-2  border-top-left">
        <div className="px-4">
          <div className="gap-3 flex flex-row py-4">
            <FaCode className="text-secondary w-7 h-7" />
            <span className="text-16-14-500 uppercase my-auto">Coding</span>
          </div>
          <div className="grid grid-cols-2 ">
            <PieChart percentage={80} title={"JS - TS"} />
            <PieChart percentage={60} title={"Vue JS"} />
            <PieChart percentage={90} title={"Agile & Scrum"} />
            <PieChart percentage={90} title={"Restful API"} />
          </div>
        </div>
        <div className="border-left pl-4">
          <div className="gap-3 flex flex-row py-4 h-fit">
            <FaBars className="text-secondary w-7 h-7" />
            <span className="text-16-14-500 uppercase my-auto">Knowledge</span>
          </div>
          <ul className="flex gap-3 flex-col">
            {DATA.knowledge.map((_, index) => {
              return (
                <li className="flex gap-2 " key={index}>
                  <TiTick className="my-auto text-secondary" /> <span>{_}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-2  border-top-left mt-8">
        <div className="px-4">
          <div className="gap-3 flex flex-row py-4">
            <FaPaintBrush className="text-secondary w-7 h-7" />
            <span className="text-16-14-500 uppercase my-auto">Front-end</span>
          </div>
          <div className="flex flex-col  px-4">
            <div className="py-5">
              <p>Vue JS</p>
              <div className="h-[4px] w-full bg-[#D8DBE2] rounded-full relative before:absolute before:top-0 before:left-0 before:w-[80%] before:h-full before:bg-secondary "></div>
            </div>
            <div className="border-top-center py-5">
              <div className="my-auto">
                <p>Angular JS</p>
                <div className="h-[4px] w-full bg-[#D8DBE2] rounded-full relative before:absolute before:top-0 before:left-0 before:w-[20%] before:h-full before:bg-secondary "></div>
              </div>
            </div>
            <div className="border-top-center py-5">
              <p>React JS</p>
              <div className="h-[4px] w-full bg-[#D8DBE2] rounded-full relative before:absolute before:top-0 before:left-0 before:w-[30%] before:h-full before:bg-secondary "></div>
            </div>
          </div>
        </div>
        <div className="border-left pl-4">
          <div className="gap-3 flex flex-row py-4 h-fit">
            <SiHyperskill className="text-secondary w-7 h-7" />
            <span className="text-16-14-500 uppercase my-auto">
              Soft Skills
            </span>
          </div>
          <div className="flex flex-col  px-4">
            {[...Array(3)].map((item) => {
              return (
                <div className="border-top-center py-3" key={item}>
                  <h1>English</h1>
                  <div className="grid grid-cols-10 mt-1">
                    {[...Array(10)].map((_, index) => (
                      <span
                        key={index}
                        className={`w-4 h-4 rounded-full  ${
                          index < 7 ? "bg-secondary" : "bg-[#D8DBE2]"
                        }`}
                      ></span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </LayoutBox>
  );
}
