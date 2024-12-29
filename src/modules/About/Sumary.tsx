import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { DATA } from "../../../data.ts";
import BoxInfo from "../../components/common/BoxInfo.tsx";
export default function Sumary() {
  return (
    <div>
      <h1 className="relative text-primary text-20-20-600 py-4 pl-4 w-full ">
        About Me
      </h1>
      <div className="p-7 border-top-left ">
        <h1 className="text-16-28-400 text-primary ">
          <span className="font-bold"> Hello! I’m Donald Wellborn. </span>
          Back-end & Frond-end developer from UK, London. I have rich experience
          in wordpress, also I am good at Magento. I love to talk with you about
          our unique.
        </h1>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <h1>Age . . . . . . . . 24</h1>
          <h1>Residence . . . . . . . . VietNam</h1>
          <h1>Freelance . . . . . . . . Available</h1>
          <h1>Address . . . . . . . . HN, VietNam</h1>
        </div>
      </div>
    </div>
  );
}
