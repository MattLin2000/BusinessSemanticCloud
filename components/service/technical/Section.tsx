import React from 'react';

const Section = () => {
  return (
    <div className="flex justify-center py-2 ">
      <div className=" flex justify-center items-start bg-[rgba(51,51,51,0.8)]  w-11/12 gap-15 py-15 flex-wrap">
        <div className="relative min-h-[600px]">
          <img src="/images/sandRock-1.png" alt="" className="w-[295px] h-[323px]" />
          <div className="w-[295px]  bg-black  absolute top-[40%] left-[20px] p-5">
            <h1 className="text-[#00E8DA] text-xl py-5 font-bold">SLM 潛在客戶管理系統</h1>

            <p className="text-white text-[16px]">
              <span className="text-[#00E8DA] ">
                每一位點擊，都是成交的機會——我們幫你撐住轉化前最後一哩！
                <br />
              </span>
              SLM
              串聯搜尋與轉單之間的斷點，透過智能表單、預約流程優化、顧客標籤與自動分群工具，協助律所快速分類案件類型、美業掌握客戶週期、診所精準追蹤回診與諮詢進度。你不需要再手動整理每位來客，我們讓流程自動、追蹤持續、溝通不流失。
            </p>
          </div>
        </div>
        <div className="relative min-h-[600px]">
          <img src="/images/sandRock-2.png" alt="" className="w-[295px] h-[323px]" />
          <div className="w-[295px]  bg-black  absolute top-[40%] left-[20px] p-5">
            <h1 className="text-[#00E8DA] text-xl py-5 font-bold">RAG 檢索增強生成技術</h1>

            <p className="text-white text-[16px]">
              <span className="text-[#00E8DA] ">比問答機器人更強的，是懂你專業的 AI 生成引擎</span>
              <br />
              我們整合你的知識庫（如法律條文、療程說明、醫療Q&A），建構專屬語意模型，讓顧客無論透過LINE或網頁聊天，都能獲得即時、準確、有邏輯的回應。這不只是客服外包，而是一次將你的專業智慧自動擴散，打造能說話的線上接待員，節省大量重複諮詢時間。{' '}
            </p>
          </div>
        </div>
        <div className="relative min-h-[600px]">
          <img src="/images/sandRock-3.png" alt="" className="w-[295px] h-[323px]" />
          <div className="w-[295px]  bg-black  absolute top-[40%] left-[20px] p-5 ">
            <h1 className="text-[#00E8DA] text-xl py-5 font-bold">SEO 搜尋引擎最佳化</h1>

            <p className="text-white text-[16px]">
              <span className="text-[#00E8DA] ">
                SEO 搜尋引擎最佳化 讓潛在客戶主動找上門，而不是你疲於找客戶
                <br />
              </span>
              我們專注於打造能真正「上首頁又能轉換」的搜尋策略。從高意圖關鍵字分析、在地化優化、專業內容鋪排，到技術型
              SEO
              架構配置，協助律師、醫師、美業主攻占關鍵搜尋入口，建立權威與曝光主場，解決「明明專業卻被冷落」的痛點。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
