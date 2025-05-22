import React from 'react';

const AboutUs = () => {
  return (
    <div className="p-10 text-white">
      <div className="text-[56px] p-5">關於我們</div>
      <div className="flex">
        <div className="border-t-2 w-1/2 border-t-white border-r-2 border-r-white py-4">
          <div className="max-w-md">
            <div className="py-6">
              <h1 className="text-[24px] ">從精準諮詢到安全交付， </h1>
              <h1 className="text-[#00D8EA] text-[24px]">SLM 為你打造高效的陌開系統</h1>
            </div>
            <p className="pb-10 ">
              市面多數聊天機器人只能「回應」，而 SLM
              專注於「過濾、追蹤、轉換」。我們結合專業顧問諮詢、敏捷導入流程與完整資料架構，協助企業快速啟動陌生開發，精準辨識高潛力名單。SLM
              內建互動分析模組與 SEO
              流量整合機制，導入即能產出追蹤數據。更重要的是，我們以企業級資訊安全標準保障每一筆名單資產，讓你在擴展客源的同時，穩健營運、安心成長。
            </p>
            <button className="transition-all duration-300 cursor-pointer hover:bg-[#5BFFBE] hover:text-white hover:border-[#5BFFBE] text-[#00D8EA] flex justify-center items-center border-2 border-[#00D8EA] rounded-xl py-4 px-13 text-[13px]">
              瞭解更多
            </button>
          </div>
        </div>
        <div className="border-t-2 w-1/2 border-t-white ">
          <img src="images/macbook.jpg" alt="" className="w-[400] h-[456] m-10" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
