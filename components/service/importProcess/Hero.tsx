import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-start text-white py-20 ">
      {/* 左側標語區塊 */}
      <div className="md:px-20 md:max-w-[560px]">
        <h1 className=" text-4xl md:text-5xl font-bold leading-tight md:max-w-[400px]">
          為什麼導入智能內容系統，
          <br />
          <span className="text-[#00D8EA]">已成為轉單關鍵？</span>
        </h1>
        <p className="text-2xl font-medium leading-[1.8em] py-6 md:max-w-[400px]">
          多數企業都有豐富的產品說明、客服話術與服務資料，卻總是無法真正「讓客戶看見」。
          網站訪客提問重複、潛在客戶無人追蹤、內容曝光卻沒有轉換…… <br />
          我們整合 <strong>SLM × RAG</strong>{' '}
          技術，幫您把這些零散資訊變成會說話的助理、懂數據的內容、能優化的商機。
          從網站接觸、問題引導、關鍵字驗證到實際追單，我們打造一套真正能落地的智能內容導入流程，讓知識變成交付、讓內容變成轉單。
        </p>
      </div>

      {/* 右側三步驟區塊 */}
      <div className="block md:mt-[15vh] md:flex flex-1  flex-col space-y-10 md:max-w-[500px]  md:px-15">
        {/* Step 1 */}
        <div>
          <h2 className="text-[28px] font-bold">1｜內部知識部署（SLM 部署）</h2>
          <p className="text-[#3462FA] underline mb-2">從內容到顧問：3分鐘導入自家專屬智能客服</p>
          <ul className="list-disc list-inside space-y-1 text-[16px]">
            <li>將企業現有文檔（如產品手冊、服務 FAQ、銷售話術）導入小型語言模型（SLM）</li>
            <li>由 CFlux 協助本地化部署，並嵌入至客戶官網與站內客服模組中</li>
            <li>實現自動應答、知識型內容回覆、訪客導引</li>
          </ul>
        </div>

        {/* Step 2 */}
        <div>
          <h2 className="text-[28px] font-bold">2｜關鍵字分析與市場驗證</h2>
          <p className="text-[#3462FA] underline mb-2">讓每篇內容都精準命中搜尋需求</p>
          <ul className="list-disc list-inside space-y-1 text-[16px]">
            <li>根據 SLM 初步生成的內容（標題、段落、QA），匯出潛在關鍵詞語意</li>
            <li>
              以 SEO 工具（如 Google Keyword
              Planner、Ahrefs、Ubersuggest）對照查詢量、競爭程度與價值
            </li>
            <li>篩選出高價值關鍵詞作為優化重點，回饋給 SLM 作為語意修正素材</li>
          </ul>
        </div>

        {/* Step 3 */}
        <div>
          <h2 className="text-[28px] font-bold">3｜實戰追蹤與成效反饋</h2>
          <p className="text-[#3462FA] underline mb-2">每一次互動都是優化模型的養分</p>
          <ul className="list-disc list-inside space-y-1 text-[16px]">
            <li>觀察站內互動紀錄（例如對話紀錄、點擊熱區、詢問問題）</li>
            <li>匯整轉單情況與潛在需求（例如：詢問特定功能或價格時轉換率高）</li>
            <li>將這些回饋持續導入語料庫與模型微調，進行語意再訓練或 prompt 修正</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
