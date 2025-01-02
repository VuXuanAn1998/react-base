import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { DATA } from "../../../data.ts";
import BoxInfo from "../../components/common/BoxInfo.tsx";
import LayoutBox from "../../components/common/LayoutBox.tsx";
export default function ResumeBox() {
  return (
    <LayoutBox title="Resume">
      <div className="grid grid-cols-2  border-top-left ">
        <div className="px-4">
          <div className="gap-3 flex flex-row py-4">
            <FaBriefcase className="text-secondary w-7 h-7" />
            <span className="text-16-14-500 uppercase my-auto">
              Experiences
            </span>
          </div>
          {DATA.experiences.map((item) => {
            return <BoxInfo info={item} />;
          })}
        </div>
        <div className="border-left pl-4">
          <div className="gap-3 flex flex-row py-4 h-fit">
            <FaUniversity className="text-secondary w-7 h-7" />
            <span className="text-16-14-500 uppercase my-auto">Educations</span>
          </div>
          {DATA.education.map((item) => {
            return <BoxInfo info={item} />;
          })}
        </div>
      </div>
    </LayoutBox>
  );
}
