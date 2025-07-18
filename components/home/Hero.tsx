'use client';
import React from 'react';
const Hero = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-[400px] h-[50vh] md:h-[60vh] lg:h-[684px] flex flex-col justify-center items-center  bg-[url('/images/hero.png')] bg-cover bg-center bg-no-repeat relative">
      {/* 內容區域 */}
      <div className="relative z-5 text-center px-4 max-w-4xl mx-auto">
        {/* 主標題 */}
        <h1 className="animate-slide-up text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-bold text-white mb-4 leading-tight">
          探索未來科技
        </h1>

        {/* 副標題 */}
        <p className="animate-slide-up text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-white mb-6 md:mb-8 opacity-90 leading-relaxed">
          引領創新科技，改變未來
        </p>

        {/* CTA 按鈕 */}
        <button className="animate-slide-up border-2 border-white mt-2 md:mt-4 px-6 md:px-8 py-3 md:py-4 rounded-full shadow-lg cursor-pointer bg-transparent hover:bg-white transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50">
          <div className="flex items-center justify-center text-white hover:text-black transition-colors duration-300">
            <p className="text-[16px] md:text-[18px] lg:text-[20px] font-medium">瀏覽更多</p>
          </div>
        </button>
      </div>

      {/* 向下滾動提示箭頭 */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div
          className="w-6 h-6 border-r-2 border-b-2 border-white transform rotate-45 opacity-60 cursor-pointer"
          onClick={handleScroll}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
