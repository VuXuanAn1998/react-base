import { FaCode } from "react-icons/fa6";
import { DATA } from "../../../data.ts";
import { FaBars } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import PieChart from "../../components/common/PieChart.tsx";
import { SiHyperskill } from "react-icons/si";
import { FaPaintBrush } from "react-icons/fa";
export default function SkillsBox() {
  return (
    <div>
      <h1 className="relative text-primary text-20-20-600 py-4 pl-4 w-full ">
        My Skills
      </h1>
      <div className="grid grid-cols-2  border-top-left">
        <div className="px-4">
          <div className="gap-3 flex flex-row py-4">
            <FaCode className="text-secondary w-7 h-7" />
            <span className="text-16-14-500 uppercase my-auto">Coding</span>
          </div>
          <PieChart />
        </div>
        <div className="border-left pl-4">
          <div className="gap-3 flex flex-row py-4 h-fit">
            <FaBars className="text-secondary w-7 h-7" />
            <span className="text-16-14-500 uppercase my-auto">Knowledge</span>
          </div>
          <ul className="flex gap-3 flex-col">
            {DATA.education.map((item) => {
              return (
                <li className="flex gap-2 ">
                  <TiTick className="my-auto text-secondary" />{" "}
                  <span>{item.companyName}</span>
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
          <div className="flex flex-col gap-8">
            <div>
              <p>Vue JS</p>
              <div className="h-[4px] w-full bg-[#D8DBE2] rounded-full relative before:absolute before:top-0 before:left-0 before:w-[80%] before:h-full before:bg-secondary "></div>
            </div>
            <div className="border-top-center">
              <p>Angular JS</p>
              <div className="h-[4px] w-full bg-[#D8DBE2] rounded-full relative before:absolute before:top-0 before:left-0 before:w-[20%] before:h-full before:bg-secondary "></div>
            </div>
            <div className="border-top-center">
              <p>React JS</p>
              <div className="h-[4px] w-full bg-[#D8DBE2] rounded-full relative before:absolute before:top-0 before:left-0 before:w-[30%] before:h-full before:bg-secondary "></div>
            </div>
            <div className="border-top-center">
              <p>Vue JS</p>
              <div className="h-[4px] w-full bg-[#D8DBE2] rounded-full relative before:absolute before:top-0 before:left-0 before:w-[90%] before:h-full before:bg-secondary "></div>
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
          <div className="flex flex-col gap-6 ">
            <div>
              <h1>English</h1>
              <div className="grid grid-cols-10 ">
                {[...Array(10)].map((_, index) => (
                  <span
                    key={index}
                    className="w-4 h-4 rounded-full bg-secondary"
                  ></span>
                ))}
              </div>
            </div>
            <div className="border-top-center">
              <h1>English</h1>
              <div className="grid grid-cols-10 ">
                {[...Array(10)].map((_, index) => (
                  <span
                    key={index}
                    className="w-4 h-4 rounded-full bg-secondary"
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
