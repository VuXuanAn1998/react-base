import React, { useState } from "react";
import { SiGoogledocs } from "react-icons/si";
import * as Dialog from "@radix-ui/react-dialog";
import { IoCloseSharp } from "react-icons/io5";
const BoxWork: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="grid grid-flow-row gap-4 p-8 border-left">
        <div className="overflow-hidden w-full h-full relative group ">
          <img
            src="https://i.pinimg.com/originals/37/41/97/374197e848818ab9b642852057619921.jpg"
            className="w-full object-cover cursor-pointer group-hover:scale-125 overflow-hidden rounded-[4px] duration-500"
            alt=""
          />
          <div className="grid place-content-center w-full h-full bg-secondary absolute top-0 left-0 rounded-[4px] opacity-0  group-hover:opacity-40 duration-500">
            <SiGoogledocs
              className="w-8 h-8 text-white cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          </div>
        </div>
        <div className="border-secondary w-fit mx-auto px-2 border-[1px] py-1 border-solid text-secondary uppercase text-12-14-500 ">
          april 28, 2000 - april 28, 2002
        </div>
        <h1 className="text-17-20-500 text-primary text-center">
          Lorem ipsum dolor sit amet consectetur.
        </h1>
        <p className="text-16-24-400 text-center text-[#646464]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro,
          facere.
        </p>
      </div>
      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50" />
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded shadow-lg w-[700px] focus:outline-none">
            <Dialog.Description className="">
              <img
                src="https://i.pinimg.com/originals/37/41/97/374197e848818ab9b642852057619921.jpg"
                alt=""
                className="rounded-[4px] w-full object-cover"
              />
              <div className="flex flex-col gap-2 p-8">
                <h1 className="text-[28px] leading-8 font-medium text-primary">
                  Mobile Application
                </h1>
                <p className="text-14-20-400 text-primary">FPT Software</p>
                <p className="text-14-20-400 text-primary">
                  April, 20 2022 - April, 20 2022
                </p>
                <p className="text-16-24-400 mt-4 text-primary border-l-[2px] border-solid border-secondary pl-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Alias, vel quia. Aliquid quos ut ad quasi repellendus
                  architecto a exercitationem.
                </p>
              </div>
            </Dialog.Description>
            <Dialog.Close asChild>
              <button
                className="absolute top-2 right-2 focus:outline-none"
                aria-label="Close"
              >
                <IoCloseSharp className="w-6 h-6 opacity-70" />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default BoxWork;
