import React from "react";
import ResumeBox from "./ResumeBox";
import SkillsBox from "./SkillsBox";
import Quote from "./Quote";

export default function Resume() {
  return (
    <div className="bg-white py-6 rounded-r-[4px] w-full overflow-scroll">
      <ResumeBox />
      <SkillsBox />
      <Quote />
    </div>
  );
}
