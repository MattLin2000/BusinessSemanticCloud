import React from 'react';

const Contact = () => {
  return (
    <div className="text-white flex justify-center items-center flex-col gap-2">
      <div className="text-center">
        <h1 className="text-[38px] ">Contact</h1>
        <p className="text-[16px] font-sans">Like what you see? Get in touch to learn more.</p>
      </div>
      <div className="flex">
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
        <div className="p-5 flex-col flex">
          <h1 className="p-2">Message</h1>
          <textarea
            id="Message"
            name="Message"
            className="p-1 border border-white w-[316px] h-[197px] resize-none"
          ></textarea>
          <div className=" flex justify-end mt-6">
            <button className="text-[15px] border-1 border-[#00E8DA] bg-[#00E8DA] text-black py-1.5 px-15 hover:bg-black hover:text-[#00E8DA] hover:cursor-pointer transition-all duration-300">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
