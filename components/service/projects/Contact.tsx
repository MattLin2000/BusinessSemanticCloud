import React from 'react';

const Contact = () => {
  return (
    <div className="text-white flex justify-center items-center flex-col gap-4 sm:gap-6 ">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl ">Contact</h1>
        <p className="text-sm sm:text-base md:text-lg font-bold">
          Like what you see? Get in touch to learn more.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-6 sm:gap-8 w-full max-w-4xl">
        <div className="p-5">
          <div className="p-2 flex flex-col">
            <label htmlFor="FirstName">FirstName</label>
            <input
              type="text"
              id="FirstName"
              name="FirstName"
              className="border-1 border-white w-[300px] h-[40px]"
            />
          </div>

          <div className="p-2 flex flex-col">
            <label htmlFor="LastName">LastName</label>
            <input
              type="text"
              id="LastName"
              name="LastName"
              className="w-[300px] h-[40px] border-1 border-white"
            />{' '}
          </div>

          <div className="p-2 flex flex-col">
            <label htmlFor="Email">Email*</label>
            <input
              type="email"
              id="Email"
              name="Email"
              required
              className="border-1 border-white w-[300px] h-[40px]"
            />{' '}
          </div>
        </div>
        <div className="p-5 flex-col flex w-full">
          <h1 className="p-2">Message</h1>
          <textarea
            id="Message"
            name="Message"
            className="w-full h-32 sm:h-40 md:h-48 border border-gray-300 bg-transparent text-white p-2 focus:outline-none focus:border-[#00E8DA] resize-none"
            placeholder="Type your message here"
          />
          <div className=" flex justify-end mt-6">
            <button className="text-sm sm:text-base border-1 border-[#00E8DA] bg-[#00E8DA] text-black py-1.5 px-15 hover:bg-black hover:text-[#00E8DA] hover:cursor-pointer  transition-all duration-300 ">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
