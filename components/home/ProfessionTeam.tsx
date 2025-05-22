import React from 'react';

const ProfessionTeam = () => {
  return (
    <div className="text-white px-5">
      <div>
        <h1 className="text-[#00D8EA] flex justify-center text-[56px] m-[75px]">
          只和真正有意願的客戶說話。
        </h1>
      </div>
      <div className="border-y-2 flex justify-center ">專業技術團隊</div>
      <div className="flex justify-center ">
        <div className="max-w-[560px] text-[24px] p-10">
          如果你每天收到十組諮詢，卻只有一人真正下單， 那你需要的，不是更多流量，
          而是更聰明的篩選與回應。
        </div>
        <div className="max-w-[540px] p-20">
          我們為律所、診所、美業打造一套自動化轉換引擎，整合 ​​
          <ul className="list-disc p-5">
            <li>SLM 潛客預篩與管理：用自動表單＋標籤系統區分冷熱</li>
            <li>RAG 本地生成技術：打造你的私有 AI 助理，回應一致、不外洩、不失控</li>
            <li> SEO 精準導流：只曝光給搜尋你服務的人</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfessionTeam;
