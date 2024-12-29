import React from "react";

export default function BoxInfo({ info }) {
  return (
    <div className="py-8 border-top-center">
      <span className="border-[#4c7753] text-secondary border-[1px] border-solid rounded-[4px] text-12-14-500 px-1">
        {info.time}
      </span>
      <h5 className="text-16-14-500 mt-3 text-primary"> {info.position}</h5>
      <p className="text-14-20-400 text-[#999999] mt-1"> {info.companyName}</p>
      <p className="mt-4 text-primary text-16-24-400">{info.description}</p>
    </div>
  );
}
