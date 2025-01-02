import React from "react";
import LayoutBox from "../../components/common/LayoutBox";
import { FaArrowRight } from "react-icons/fa";
export default function Contact() {
  return (
    <div className="bg-white my-6 rounded-r-[4px] w-full overflow-scroll">
      <LayoutBox title="Get In Touch">
        <div className="p-6">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29793.98845886377!2d105.8163641260629!3d21.022738359983986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2zSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1735532802340!5m2!1svi!2s"
              style={{ border: 0 }}
              allowFullScreen=""
              className="w-full h-[250px] rounded-lg"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map Embed"
            ></iframe>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2">
            <h1>Age . . . . . . . . 24</h1>
            <h1>Residence . . . . . . . . VietNam</h1>
            <h1>Freelance . . . . . . . . Available</h1>
            <h1>Address . . . . . . . . HN, VietNam</h1>
          </div>
        </div>
      </LayoutBox>

      <LayoutBox title="Contact Form">
        <div className="p-6 grid grid-cols-2 gap-6">
          <input
            type="text"
            className="border-primary border-b-[2px] border-solid px-2 py-4  focus:border-secondary focus:outline-none"
            placeholder="Full Name"
          />
          <input
            type="text"
            className=" border-primary border-b-[2px] border-solid px-2 py-4  focus:border-secondary focus:outline-none"
            placeholder="Email Address"
          />{" "}
          <textarea
            rows={3}
            className="col-span-2 border-primary border-b-[2px] border-solid px-2 py-4  focus:border-secondary focus:outline-none"
            placeholder="Your Message"
          />
          <div className="flex gap-4 mt-6 cursor-pointer">
            <h1 className="text-16-24-400 uppercase">Send Message</h1>
            <FaArrowRight className="w-4 h-4 text-primary my-auto" />
          </div>
        </div>
      </LayoutBox>
    </div>
  );
}
