import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { DATA } from "../../../data.ts";
import BoxInfo from "../../components/common/BoxInfo.tsx";
import { FaCode } from "react-icons/fa6";
import LayoutBox from "../../components/common/LayoutBox.tsx";
export default function Service() {
  return (
    <LayoutBox title="My Services">
      <div className="grid grid-cols-2  border-top-left ">
        <div className="pl-6 pr-4 border-left">
          <div className="py-8 ">
            <span className="bg-gradient-custom grid place-content-center w-[60px] h-[60px] rounded-full">
              <FaHtml5 className="w-7 h-7 text-secondary relative left-[-2px]" />
            </span>
            <h5 className="text-[18px] leading-5 mt-3 text-primary font-semibold">
              Front-End
            </h5>
            <p className="mt-4 text-primary text-16-24-400">
              Modern and mobile-ready website that will help you reach all of
              your marketing.
            </p>
          </div>
        </div>
        <div className="pl-6 pr-4 border-left">
          <div className="py-8">
            <span className="bg-gradient-custom grid place-content-center w-[60px] h-[60px] rounded-full">
              <FaCode className="w-7 h-7 text-secondary " />
            </span>
            <h5 className="text-[18px] leading-5 mt-3 text-primary font-semibold">
              Back-End
            </h5>
            <p className="mt-4 text-primary text-16-24-400">
              Modern and mobile-ready website that will help you reach all of
              your marketing.
            </p>
          </div>
        </div>
      </div>
    </LayoutBox>
  );
}
