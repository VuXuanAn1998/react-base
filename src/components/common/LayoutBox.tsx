import React from "react";

const LayoutBox: React.FC<{ children: React.ReactNode; title: string }> = ({
  children,
  title,
}) => {
  return (
    <div>
      <h1 className=" relative before:bg-gradient-custom  before:absolute before:top-[20px] before:left-[5px]  before:w-10 before:h-10 before:rounded-full  text-primary text-20-20-600 py-7 pl-4 w-full ">
        <span className="text-secondary">{title.slice(0, 2)}</span>
        <span className="text-primary">{title.slice(2)}</span>
      </h1>
      <div className="border-top-left">{children}</div>
    </div>
  );
};

export default LayoutBox;
