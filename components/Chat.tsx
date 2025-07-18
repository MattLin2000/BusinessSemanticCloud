'use client';
import React, { useEffect, useRef, useState } from 'react';
const Chat = () => {
  type Message = { type: string; content: string };
  const [messageList, setMessageList] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messageList]);
  const sendMessage = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && e.currentTarget.value !== '') {
      const input = e.target as HTMLInputElement;
      const sendedMessage = input.value;
      setMessageList(prevMessages => [...prevMessages, { type: 'user', content: sendedMessage }]);
      fetch('http://localhost:8080/Bsc/chat/temp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          //      Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          //        model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: sendedMessage }],
        }),
      })
        .then(response => response.json())
        .then(data => {
          console.log(data.response);
          setMessageList(prevMessages => [...prevMessages, { type: 'Ai', content: data.response }]);
        })
        .catch(error => {
          console.error('Error:', error);
        });
      input.value = '';
    }
  };
  const openChat = () => {
    setIsOpen(!isOpen);
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed bottom-0 right-0 z-50">
      {' '}
      <button
        onClick={openChat}
        id="chat-button"
        className={` ${isOpen ? 'hidden' : ''} py-2 px-4 m-2  flex rounded-4xl bg-[#00E8DA] p-2 shadow-lg justify-items-center text-center cursor-pointer`}
      >
        {' '}
        <img src="/svg/comments-solid.svg" alt="Headset Icon" className="w-8 h-8 m-2" />{' '}
        <h1 className="text-lg text-black mt-2">立即展開交談！</h1>{' '}
      </button>{' '}
      <div
        className={`${!isOpen ? 'hidden' : ''} rounded-2xl w-[80vw] md:w-[400px]  text-white m-4`}
      >
        <div className="flex justify-between h-[80px] bg-black rounded-t-2xl items-center px-10">
          <div>
            <h1 className="text-2xl">CFlux.tech</h1>{' '}
            <div className="flex items-center gap-2">
              <div className="rounded-4xl w-2 h-2 bg-green-400"></div>我們會盡快回覆
            </div>
          </div>
          <div className="cursor-pointer" onClick={openChat}>
            X
          </div>
        </div>
        <div className="min-h-[45vh] bg-[rgb(51,51,51)] overflow-y-scroll max-h-[70vh]">
          <div className="flex justify-center">
            <span className="text-center rounded-4xl bg-[rgb(75,75,75)] p-1 m-1">
              May 18 , 12:28 PM
            </span>
          </div>
          <div>
            <div className="flex justify-start">
              <span className="bg-black py-2 px-4 rounded-2xl mx-5 my-2 max-w-[50%]">
                Hi, 我是CFlux的客服小助手，請問有什麼可以幫助你的嗎？
              </span>
            </div>
          </div>
          {messageList.length > 0 &&
            messageList.map((message, index) => (
              <div key={index}>
                {message.type === 'user' ? (
                  <div className="flex justify-end">
                    <div className="flex flex-col items-end justify-end ">
                      <div className="bg-[#00E8DA] py-2 px-4 rounded-2xl mx-5  max-w-[70%] break-words">
                        <span> {message.content}</span>
                      </div>
                      <div className="bg-[#fff] p-1 rounded-lg mx-5 text-[#595D70] text-[10px] m-1 ">
                        已寄出
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="flex justify-start">
                      <span className="bg-black py-2 px-4 rounded-2xl mx-5 my-2 max-w-[50%]">
                        {message.content}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="flex min-h-15 text-black border-0 ">
          <input
            className="bg-white flex-1 rounded-b-2xl p-4 "
            placeholder="撰寫訊息..."
            type="text"
            onKeyDown={e => {
              sendMessage(e);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
