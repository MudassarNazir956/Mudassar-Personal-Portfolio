import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="bg-[#0a192f] text-gray-300 h-screen w-full flex justify-center items-center p-4 pt-28"
    >
      <form
        method="POST"
        action="https://getform.io/f/QdJOpJeO"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Contact
          </p>
          <p className="py-3">
            Submit the Form below or Shoot me an Email ---
            <span className=" italic text-lg tracking-wider">
              {" "}
              mudassarnazir137@gmail.com
            </span>
          </p>
        </div>
        <input
          className="p-2 bg-[#ccd6f6] text-black rounded"
          type="text"
          placeholder="Full Name"
          name="name"
        />
        <input
          className="my-3 p-2 bg-[#ccd6f6] text-black rounded"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="p-2 bg-[#ccd6f6] text-black rounded"
          name="message"
          rows="10"
          placeholder="Message For Me"
        ></textarea>
        <button
          className="text-white border-2 px-4 py-2 my-4 mx-auto flex items-center hover:bg-pink-600 hover:border-pink-600 
        duration-300 rounded"
        >
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
