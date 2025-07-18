import React from 'react';

const Hero = () => {
  return (
    <div>
      <div className="text-white  bg-[#333333CC]  min-h-[850px]">
        <div className="md:position  md:relative md:p-20">
          <div className="w-full md:w-[60vw] h-[362px] bg-[#333333CC] flex items-center justify-center ">
            <img src="/images/work1.webp" alt="展示圖片" className="w-full h-full object-cover" />
          </div>

          <div className=" h-[626px] bg-black md:position md:absolute md:top-[150px] md:left-[35vw] z-1">
            <div className="px-[15vw] flex-col ">
              <div className=" text-2xl md:text-5xl pt-20  md:w-[560px] text-[#00D8EA] font-bold">
                <h1>「我們明明寫了那麼多內容，為什麼客戶還是搞不懂？」</h1>
              </div>
              <div className="text-16px font-bold md:w-[560px] py-6">
                <p>這是多數高知識產業的共同困境。</p>
                <p>你有詳盡的服務說明、技術文章、FAQ 回覆，但潛在客戶卻在第一秒就流失，</p>
                <p className="text-[#00D8EA]">
                  只因 他們找不到答案、聽不懂專業語言，甚至根本沒被觸及 !
                </p>
                <p>
                  我們整合 SLM 與 RAG
                  技術，讓你的內容不再只是靜態頁面，而是能對話、能學習、能轉單的智慧入口。從網站問答、搜尋曝光、潛客追蹤到轉化優化，為高知識型服務打造一套真正有效的內容商業化流程。
                </p>
              </div>
              <button className="hover:cursor-pointer border-1 border-[#00D8EA] px-8 py-2 text-[#00D8EA]  hover:bg-[#00D8EA] hover:text-black transition duration-300">
                <p>Read More ^</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
