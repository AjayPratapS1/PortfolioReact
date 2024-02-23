import React from "react";
import { IoIosSend } from "react-icons/io";
const Contact = () => {
  return (
    <div className="bg-faded w-full sm:pr-20 sm:pl-36 pt-10" id="Contact me">
      <h2 className="text-4xl sm:text-7xl text-orange font-semibold ml-10">
        Contact me
      </h2>
      <p className="text-3xl sm:text-5xl text-[#535C87] font-semibold ml-10 mt-4 opacity-80">
        Questions, Thoughts, Or Just Want To Say Hello?
      </p>
      <div className="max-w-[1200px] mx-auto p-10 mt-10 flex justify-center items-center">
        <form className="w-[900px] flex flex-col gap-8">
          <label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full py-2 rounded-lg text-xl font-medium px-5 shadow-[2px_2px_10px_#1f1f1f]"
            />
          </label>
          <label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full py-2 rounded-lg text-xl font-medium px-5 shadow-[2px_2px_10px_#1f1f1f]"
            />
          </label>
          <label>
            <input
              type="text"
              placeholder="Enter your subject"
              className="w-full py-2 rounded-lg text-xl font-medium px-5 shadow-[2px_2px_10px_#1f1f1f]"
            />
          </label>
          <label>
            <textarea
              rows={7}
              cols={10}
              placeholder="Enter your message"
              className="w-full py-2 rounded-lg text-xl font-medium px-5 shadow-[2px_2px_10px_#1f1f1f]"
            ></textarea>
          </label>

          <div
            className='bg-orange w-fit text-white shadow-[5px_5px_7px_0px_#0000003f] text-lg
     cursor-pointer transition-all duration-[0.5s]
      ease-[ease] delay-[0s] 
      font-medium relative z-[1] 
      px-8 py-3
       border-2 border-orange
       before:content-[""] before:absolute
        before:bg-white before:z-[-1] 
        before:origin-left before:transition-all
        before:duration-[0.8s] before:scale-x-0 
        before:inset-0 hover:before:scale-x-100
         hover:border-orange hover:text-[black]
          hover:border-4 group
  }'
          >
            <a
              href="#"
              className=" text-white text-xl group-hover:text-black flex gap-5 items-center"
            >
              Send Message
              <IoIosSend className="w-10 h-10" />
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
