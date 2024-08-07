import React from "react";
import Button from "./Button";
import { useForm } from "react-hook-form";
import { IoIosSend } from "react-icons/io";
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState:{errors},
  } = useForm();

  const onSubmitForm = (data)=>{
      // console.log("This is form data",data)
  }
  return (
    <div className="bg-faded w-full sm:pr-20 sm:pl-36 pt-10" id="Contact me">
      <h2 className="text-4xl sm:text-7xl text-orange font-semibold ml-10">
        Contact me
      </h2>
      <p className="text-3xl sm:text-5xl text-[#535C87] font-semibold ml-10 mt-4 opacity-80">
        Questions, Thoughts, Or Just Want To Say Hello?
      </p>
      <div className="max-w-[1200px] mx-auto p-10 mt-10 flex justify-center items-center">
        <form onSubmit={handleSubmit(onSubmitForm)} className="max-w-[900px] w-full flex flex-col gap-8">
          <label htmlFor="fullName">
            <input
              id="fullName"
              type="text"
              placeholder="Enter your name"
              className="w-full outline-none py-2 rounded-lg text-xl font-medium px-5 shadow-[2px_2px_10px_#1f1f1f]"
              {...register('fullName',{required:true})}
            />
            {errors.fullName && (<span className="text-orange text-sm font-semibold">Please enter your name.</span>)}
          </label>
          <label htmlFor="Email">
            <input
              id="Email"
              type="email"
              placeholder="Enter your email address"
              className="w-full outline-none py-2 rounded-lg text-xl font-medium px-5 shadow-[2px_2px_10px_#1f1f1f]"
              {...register('Email',{required:true})}
            />
            {errors.Email && (<span className="text-orange text-sm font-semibold">Please enter your email.</span>)}
          </label>
          <label htmlFor="Subject">
            <input
              id="Subject"
              type="text"
              placeholder="Enter your subject"
              className="w-full outline-none py-2 rounded-lg text-xl font-medium px-5 shadow-[2px_2px_10px_#1f1f1f]"
              {...register('Subject',{required:true})}
            />
             {errors.Subject && (<span className="text-orange text-sm font-semibold">Please enter your Subject.</span>)}
          </label>
          <label htmlFor="Message">
            <textarea
              id="Message"
              rows={7}
              cols={10}
              placeholder="Enter your message"
              className="w-full outline-none py-2 rounded-lg text-xl font-medium px-5 shadow-[2px_2px_10px_#1f1f1f]"
              {...register('Message',{required:true})}
            ></textarea>
            {errors.Message && (<span className="text-orange text-sm font-semibold">Please enter your Message.</span>)}
          </label>
          <button type="submit" className="btn-pink flex items-center gap-3">
            <p>Send Message</p>
            <IoIosSend className="text-4xl"/>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
