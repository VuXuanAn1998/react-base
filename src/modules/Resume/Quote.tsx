import React from "react";
import LayoutBox from "../../components/common/LayoutBox";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
const Quote: React.FC = () => {
  return (
    <LayoutBox title="Quote">
      <div className="p-[30px] grid grid-cols-[fit-content(100%)_1fr_fit-content(100%)]">
        <RiDoubleQuotesL className="mb-auto opacity-55 w-16" />
        <h1 className=" relative opacity-55 font-light text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </h1>
        <RiDoubleQuotesR className="mt-auto opacity-55 w-16" />
      </div>
      <div className="w-full">
        <img
          src="https://th.bing.com/th/id/R.d92d713fa3b6ed3e989bc3f083a44003?rik=ZFejMIon4WKC9w&pid=ImgRaw&r=0"
          alt=""
          className="mx-auto w-[60px] h-[60px] rounded-full"
        />
        <div className="mt-4 text-center mb-6">
          <h6 className="text-center text-16-14-500 text-primary">
            Ryan Adlard
          </h6>
          <p className="mt-1 text-14-20-400 text-primary">Web Designer</p>
        </div>
      </div>
    </LayoutBox>
  );
};

export default Quote;
