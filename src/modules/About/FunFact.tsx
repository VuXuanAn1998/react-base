import React from "react";
import { FaAward } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { FaMugSaucer } from "react-icons/fa6";
import { BsFlagFill } from "react-icons/bs";
export default function FunFact() {
  return (
    <div>
      <h1 className="relative text-primary text-20-20-600 py-4 pl-4 w-full mt-4">
        Fun Fact
      </h1>
      <div className="border-top-left grid grid-cols-4 gap-2">
        <div className="w-full flex gap-4 flex-col p-4 border-left">
          <FaAward className="mx-auto w-8 h-8 text-secondary" />
          <h1 className="text-center text-16-28-400 text-primary">
            80 Albumes Listened
          </h1>
        </div>
        <div className="w-full flex gap-4 flex-col p-4 border-left">
          <FaTrophy className="mx-auto w-8 h-8 text-secondary" />
          <h1 className="text-center text-16-28-400 text-primary">
            15 Awards Won
          </h1>
        </div>{" "}
        <div className="w-full flex gap-4 flex-col p-4 border-left">
          <FaMugSaucer className="mx-auto w-8 h-8 text-secondary" />
          <h1 className="text-center text-16-28-400 text-primary">
            1 000 Cups of coffee
          </h1>
        </div>{" "}
        <div className="w-full flex gap-4 flex-col p-4 border-left">
          <BsFlagFill className="mx-auto w-8 h-8 text-secondary " />
          <h1 className="text-center text-16-28-400 text-primary">
            10 Countries Visited
          </h1>
        </div>
      </div>
    </div>
  );
}
