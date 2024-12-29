import React from "react";
import clsx from "clsx";
export default function Title({
  titleMsg,
  position,
  direction,
  icon = null,
  circleText = true,
}) {
  return (
    <div
      className={clsx(
        ` before:bg-[radial-gradient(ellipse_at_${direction},_#dddddd_0%,_rgba(255,255,255,0)_70%)] before:absolute before:${position}-0 before:left-0 before:h-[1px] before:w-full`,
        "py-4 flex flex-row gap-2 relative font-semibold text-primary",
        circleText
          ? "after:absolute after:top-4 after:left-0 after:w-[30px] after:h-[30px] after:rounded-full after:bg-[linear-gradient(135deg,_rgba(76,119,83,0.4)_0%,_rgba(76,119,83,0.01)_100%)]"
          : ""
      )}
    >
      <span>{icon}</span>
      {titleMsg}
    </div>
  );
}
