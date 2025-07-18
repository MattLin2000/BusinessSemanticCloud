import React from 'react';

const ProfessionTeam = () => {
  return (
    <div className="text-white px-4 sm:px-6 lg:px-8 ">
      <div className="text-center">
        <h1 className="animate-slide-up text-[#00D8EA] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold my-8 sm:my-12 lg:my-16">
          只和真正有意願的客戶說話。
        </h1>
      </div>
      <div className="animate-show-toRight border-y-2 border-gray-300 py-4 text-center text-xl sm:text-2xl font-semibold">
        專業技術團隊
      </div>
      <div className="animate-slide-up flex flex-col md:flex-row justify-center items-center md:items-start gap-6 md:gap-8 lg:gap-12 py-8 md:py-12">
        <div className="max-w-full sm:max-w-md lg:max-w-lg text-base sm:text-lg lg:text-xl px-4 sm:px-6 py-6">
          如果你每天收到十組諮詢，卻只有一人真正下單， 那你需要的，不是更多流量，
          而是更聰明的篩選與回應。
        </div>
        <div className="max-w-full sm:max-w-md lg:max-w-lg px-4 sm:px-6 py-6">
          我們為律所、診所、美業打造一套自動化轉換引擎，整合
          <ul className="list-disc pl-6 sm:pl-8 mt-4 space-y-2 text-base sm:text-lg">
            <li>SLM 潛客預篩與管理：用自動表單＋標籤系統區分冷熱</li>
            <li>RAG 本地生成技術：打造你的私有 AI 助理，回應一致、不外洩、不失控</li>
            <li>SEO 精準導流：只曝光給搜尋你服務的人</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfessionTeam;
