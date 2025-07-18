import React from 'react';

const Section = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center  gap-4">
        <div className="text-center text-white w-[312px] h-[410px] bg-black flex flex-col items-center justify-center">
          <img src="images/product-1.png" alt="" className=" rounded-2xl m-4 w-[61px] h-[61px]" />
          <h1 className="text-[#00D8EA] text-[16px] m-4  ">
            業務語意雲
            <br />
            （Intent Cloud）
          </h1>
          <p className="w-[270px]">
            整合 SLM 語意理解引擎，動態解析訪客問題與需求脈絡，建構即時語意分群模型。Intent Cloud:
            Real-time semantic parsing of user inquiries using SLM, clustering conversation topics
            to uncover business intent fast.
          </p>
        </div>
        <div className="text-center text-white w-[312px] h-[410px] bg-black flex flex-col items-center justify-center">
          <img src="images/product-2.png" alt="" className=" rounded-2xl m-4 w-[61px] h-[61px]" />
          <h1 className="text-[#00D8EA] text-[16px] m-4  ">
            品牌對話生成器
            <br />
            （BrandTalk RAG）
          </h1>
          <p className="w-[270px]">
            結合企業知識庫與語言模型，提供符合品牌語氣的準確回應，塑造一致專業形象。BrandTalk RAG:
            Delivers brand-aligned, accurate responses by retrieving from your proprietary knowledge
            base via RAG.
          </p>
        </div>
        <div className="text-center text-white w-[312px] h-[410px] bg-black flex flex-col items-center justify-center">
          <img src="images/product-3.png" alt="" className=" rounded-2xl m-4 w-[61px] h-[61px]" />
          <h1 className="text-[#00D8EA] text-[16px] m-4  ">
            跨域潛客雷達
            <br />
            （Lead Radar）
          </h1>
          <p className="w-[270px]">
            整合多平台訊息來源，自動比對潛客軌跡與關鍵語意，辨識具商機潛力者。 Lead Radar:
            Aggregates cross-channel signals and semantically matches visitor profiles to identify
            high-intent leads.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center  gap-2">
        <div className="text-center text-white w-[312px] h-[410px] bg-black flex flex-col items-center justify-center">
          <img src="images/product-4.png" alt="" className=" rounded-2xl m-4 w-[61px] h-[61px]" />
          <h1 className="text-[#00D8EA] text-[16px] m-4  ">
            自動客戶分級引擎
            <br />
            （Lead Tiering Engine）
          </h1>
          <p className="w-[270px]">
            根據互動深度與資料完整性，進行自動分級標註，提升跟進精準度與效率。 Lead Tiering Engine:
            Scores and ranks leads based on behavioral depth and semantic cues, enabling smarter
            follow-ups.
          </p>
        </div>
        <div className="text-center text-white w-[312px] h-[410px] bg-black flex flex-col items-center justify-center">
          <img src="images/product-5.png" alt="" className=" rounded-2xl m-4 w-[61px] h-[61px]" />
          <h1 className="text-[#00D8EA] text-[16px] m-4  ">
            潛客畫像生成器
            <br />
            （Persona Builder）
          </h1>
          <p className="w-[270px]">
            依據歷史對話與語意標籤生成客戶輪廓，有效優化銷售策略與再互動話術。 Persona Builder:
            Creates dynamic lead personas using historical dialogues and tags to enhance targeting
            and personalization.
          </p>
        </div>
        <div className="text-center text-white w-[312px] h-[410px] bg-black flex flex-col items-center justify-center">
          <img src="images/product-6.png" alt="" className=" rounded-2xl m-4 w-[61px] h-[61px]" />
          <h1 className="text-[#00D8EA] text-[16px] m-4  ">
            行銷再投模組
            <br />
            （Retarget Loop）
          </h1>
          <p className="w-[270px]">
            串接 CRM 與廣告系統，將潛客名單自動導入再行銷流程，追蹤轉換與優化成本。Retarget Loop:
            Connects lead data to CRM and ad platforms, automating retargeting workflows with
            performance tracking
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section;
