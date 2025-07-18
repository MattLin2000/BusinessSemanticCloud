import React from 'react';

const AboutUs = () => {
  return (
    <div className="p-4 md:p-10 text-white">
      {/* 標題 */}
      <div className="animate-slide-up text-[32px] md:text-[56px] p-2 md:p-5 text-center md:text-left">
        關於我們
      </div>

      {/* 主要內容區域 */}
      <div className="flex flex-col lg:flex-row">
        {/* 左側內容區 */}
        <div className=" w-full lg:w-1/2 border-t-2 border-t-white lg:border-r-2 lg:border-r-white py-4 lg:py-4">
          <div className="max-w-none lg:max-w-md px-2 lg:px-0 animate-slide-up">
            {/* 標題區塊 */}
            <div className="py-4 lg:py-6 ">
              <h1 className="text-[18px] md:text-[24px] leading-relaxed">從精準諮詢到安全交付，</h1>
              <h1 className="text-[#00D8EA] text-[18px] md:text-[24px] leading-relaxed">
                SLM 為你打造高效的陌開系統
              </h1>
            </div>

            {/* 內容段落 */}
            <p className="pb-6 lg:pb-10 text-sm md:text-base leading-relaxed">
              市面多數聊天機器人只能「回應」，而 SLM
              專注於「過濾、追蹤、轉換」。我們結合專業顧問諮詢、敏捷導入流程與完整資料架構，協助企業快速啟動陌生開發，精準辨識高潛力名單。SLM
              內建互動分析模組與 SEO
              流量整合機制，導入即能產出追蹤數據。更重要的是，我們以企業級資訊安全標準保障每一筆名單資產，讓你在擴展客源的同時，穩健營運、安心成長。
            </p>

            {/* 按鈕 */}
            <div className="flex justify-center lg:justify-start">
              <button className="transition-all duration-300 cursor-pointer hover:bg-[#5BFFBE] hover:text-white hover:border-[#5BFFBE] text-[#00D8EA] flex justify-center items-center border-2 border-[#00D8EA] rounded-xl py-3 md:py-4 px-6 md:px-13 text-[12px] md:text-[13px] font-medium">
                瞭解更多
              </button>
            </div>
          </div>
        </div>

        {/* 右側圖片區 */}
        <div className="w-full lg:w-1/2 border-t-2 lg:border-t-2 border-t-white mt-6 lg:mt-0">
          <div className="flex justify-center lg:justify-start animate-slide-up">
            <img
              src="images/macbook.jpg"
              alt="SLM 系統展示"
              className="w-full max-w-[300px] md:max-w-[400px] h-auto lg:w-[400px] lg:h-[456px] m-4 lg:m-10 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
