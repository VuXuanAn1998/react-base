import React from "react";
import LayoutBox from "../../components/common/LayoutBox";
import BoxWork from "../../components/common/BoxWork";

export default function Works() {
  return (
    <LayoutBox title="My Projects">
      <div className="grid grid-cols-2">
        <BoxWork />
        <BoxWork />
        <BoxWork />
        <BoxWork />
        <BoxWork />
        <BoxWork />
      </div>
    </LayoutBox>
  );
}
