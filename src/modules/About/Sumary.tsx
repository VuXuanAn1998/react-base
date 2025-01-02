import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { DATA } from "../../../data.ts";
import BoxInfo from "../../components/common/BoxInfo.tsx";
import LayoutBox from "../../components/common/LayoutBox.tsx";
export default function Sumary() {
  return (
    <LayoutBox title="About Me">
      <div className="p-7 border-top-left ">
        <h1 className="text-16-28-400 text-primary ">
          <span className="font-bold"> Hello! I’m {DATA.name}. </span>
          {DATA.desc}
        </h1>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <h1 className="font-normal">
            <span className="font-medium uppercase"> Age . . . . . . . . </span>
            {DATA.adb}
          </h1>
          <h1 className="font-normal">
            <span className="font-medium uppercase">
              Residence . . . . . . . .
            </span>
            {DATA.residence}
          </h1>
          <h1 className="font-normal">
            <span className="font-medium uppercase">
              Freelance . . . . . . . .
            </span>
            {DATA.isAvailableFreelance ? "Available" : "Unavailable"}
          </h1>
          <h1 className="font-normal">
            <span className="font-medium uppercase">
              Address . . . . . . . .
            </span>
            {DATA.address}
          </h1>
        </div>
      </div>
    </LayoutBox>
  );
}
