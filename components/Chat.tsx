'use client';
import React, { useState } from 'react';
const Chat = () => {
  const openChat = () => {
    setIsOpen(!isOpen);
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {' '}
      <button
        onClick={openChat}
        id="chat-button"
        className=" fixed bottom-0 right-0 m-4 z-50 flex rounded-4xl bg-[#00E8DA] p-2 shadow-lg  items-center text-center cursor-pointer"
      >
        {' '}
        <img src="/svg/comments-solid.svg" alt="Headset Icon" className="w-8 h-8 m-2" />{' '}
        <h1 className="text-lg text-black mt-2">立即展開交談！</h1>{' '}
      </button>{' '}
    </div>
  );
};
export default Chat;
