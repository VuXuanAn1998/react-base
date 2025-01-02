import { useRef, useState } from "react";
import { FaUser } from "react-icons/fa6";
import { PiNotebookFill } from "react-icons/pi";
import { PiPaintBrushFill } from "react-icons/pi";
import { MdMail } from "react-icons/md";
import { IoMusicalNotes } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
const NavBar: React.FC<{ activeFeature: number; handleChange: () => void }> = ({
  activeFeature,
  handleChange,
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlay = () => {
    audioRef.current?.play();
  };

  const handlePause = () => {
    audioRef.current?.pause();
  };
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
      <audio
        ref={audioRef}
        autoPlay
        loop
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src="/song.m4a" type="audio/mpeg" />
      </audio>
      <div className="flex flex-col bg-white rounded-[4px] h-fit mt-4">
        {listFeature.map((item, index) => {
          return (
            <div
              key={item.value}
              className={`flex flex-col gap-1 px-2 py-5  cursor-pointer  ${
                activeFeature === item.value ? "text-secondary" : "text-primary"
              } relative ${index === 0 ? "" : "border-top-right"}`}
              onClick={() => handleChange(item.value)}
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
          <IoMusicalNotes
            className={`mx-auto ${
              isPlaying ? "text-secondary" : "text-primary"
            } `}
            onClick={handlePlay}
          />
        </div>
        <div className="border-left cursor-pointer">
          <MdDarkMode className="mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
