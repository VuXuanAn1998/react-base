import React from "react";
import Sumary from "./Sumary";
import Service from "./Service";
import FunFact from "./FunFact";

export default function About() {
  return (
    <div className="bg-white my-6 rounded-r-[4px] w-full overflow-scroll">
      <Sumary />
      <Service />
      <FunFact />
    </div>
  );
}
