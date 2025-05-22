import React from 'react';

const Hero = () => {
  return (
    <div className="h-[684px] flex flex-col justify-center items-center bg-[url('/images/dog.jpg')] bg-cover bg-no-repeat">
      <h1 className="text-[56px]">探索未來科技</h1>
      <p className="text-[20px]">引領創新科技，改變未來</p>
      <button className="border-2 border-cyan-50 mt-4 px-6 py-2  rounded-full shadow cursor-pointer bg-opacity-0 hover:bg-opacity-100 hover:bg-white  transition duration-300">
        <div className="flex items-center text-white  hover:text-black transition duration-300">
          <p className="text-[20px]">瀏覽更多</p>
        </div>
      </button>
    </div>
  );
};

export default Hero;
