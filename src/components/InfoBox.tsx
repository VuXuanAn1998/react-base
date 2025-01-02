import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { IoMdCloudDownload } from "react-icons/io";

const TypingEffect = ({ text = "", speed = 150 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      setIndex((prev) => prev + 1);
    }, speed);

    if (index === text.length) {
      clearInterval(interval);
      setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [index, text, speed]);

  return (
    <h1 className="text-center text-secondary mt-2 h-[20PX]">
      {displayedText}
    </h1>
  );
};
export default function InfoBox() {
  return (
    <div className="w-full before:absolute before:w-full md:h-[600px] lg:h-full z-negative before:h-full before:left-[-15px] before:top-[-15px] before:bg-[linear-gradient(135deg,_rgba(76,_119,_83,_0.4)_0%,_rgba(76,_119,_83,_0.01)_100%)] before:rounded-[4px] bg-white relative rounded-[4px] shadow-lg">
      <div className="flex flex-col">
        <>
          <div className="relative h-[300px] hexagon rounded-[4px] "></div>
          <h2 className="text-center text-34-32-400 mt-4">Vu Xuan An</h2>
          <TypingEffect text="Front-End Developer" speed={100} />

          <div className="flex gap-4 mx-auto text-primary w-fit mt-4">
            <FaGithub />
            <FaFacebook />
            <FaSpotify />
            <FaGithub />
            <FaFacebook />
          </div>
        </>

        <div className="py-4 relative top-0 left-0 w-full h-fit border-top-center mt-auto cursor-pointer">
          <div className="uppercase flex gap-2 w-fit mx-auto flex-row">
            <p className="text-14-32-500">download CV</p>
            <IoMdCloudDownload className="my-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
