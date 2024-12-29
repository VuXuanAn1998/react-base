import React from "react";
import ResumeBox from "./ResumeBox";
import SkillsBox from "./SkillsBox";

export default function Resume() {
  return (
    <div className="bg-white my-6 rounded-r-[4px] w-full overflow-scroll">
      <ResumeBox />
      <SkillsBox />
    </div>
  );
}
