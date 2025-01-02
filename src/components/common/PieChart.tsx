import React from "react";

export default function PieChart({ percentage, title }) {
  return (
    <div className="lg:w-[110px] xl:w-[130px] mx-auto mt-2">
      <svg viewBox="0 0 36 36" className="circular-chart green">
        <path
          className="circle-bg"
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="circle"
          stroke-dasharray={`${percentage}, 100`}
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <text x="18" y="20.35" className="percentage">
          {`${percentage}%`}
        </text>
      </svg>

      <p className="text-14-20-400 text-primary text-center">{title}</p>
    </div>
  );
}
