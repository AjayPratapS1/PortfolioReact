import React from "react";
import Button from "./Button";
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
        <form className="max-w-[900px] w-full flex flex-col gap-8">
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
          <Button text={"Send Message"} linkTo={"#"} flag={true} />
        </form>
      </div>
    </div>
  );
};

export default Contact;
