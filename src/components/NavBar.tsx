import { useState } from "react";
import { FaUser } from "react-icons/fa6";
import { PiNotebookFill } from "react-icons/pi";
import { PiPaintBrushFill } from "react-icons/pi";
import { MdMail } from "react-icons/md";
import { FaMusic } from "react-icons/fa";
import { IoMusicalNotes } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
export default function NavBar({ activeFeature, onChange }) {
  const [listFeature] = useState([
    {
      value: 1,
      label: "About",
      icon: () => <FaUser className="mx-auto" />,
    },
    {
      value: 2,
      label: "Resume",
      icon: () => <PiNotebookFill className="mx-auto" />,
    },
    {
      value: 3,
      label: "Works",
      icon: () => <PiPaintBrushFill className="mx-auto" />,
    },
    {
      value: 4,
      label: "Contact",
      icon: () => <MdMail className="mx-auto" />,
    },
  ]);
  return (
    <div>
      <div className="flex flex-col bg-white rounded-[4px] h-fit mt-4">
        {listFeature.map((item) => {
          return (
            <div
              key={item.value}
              className={`flex flex-col gap-1 px-2 py-5  cursor-pointer  ${
                activeFeature === item.value ? "text-secondary" : "text-primary"
              } relative before:bg-[radial-gradient(ellipse_at_right,_#dddddd_0%,_rgba(255,255,255,0)_70%)] before:absolute before:top-0 before:left-0 before:h-[1px] before:w-full `}
              onClick={() => onChange(item.value)}
            >
              {item.icon()}
              <p className="text-12-14-500  uppercase text-center">
                {item.label}
              </p>
            </div>
          );
        })}
      </div>
      <div className="mt-4 w-full  bg-white rounded-[4px] p-3 grid grid-cols-2">
        <div className="cursor-pointer">
          <IoMusicalNotes className="mx-auto" />
        </div>
        <div className="border-left cursor-pointer">
          <MdDarkMode className="mx-auto" />
        </div>
      </div>
    </div>
  );
}
