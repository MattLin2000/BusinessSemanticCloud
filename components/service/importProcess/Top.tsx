import React from 'react';

const Top = () => {
  return (
    <div>
      <div
        className=" w-full h-64 bg-cover bg-no-repeat relative"
        style={{ backgroundImage: "url('/images/rock-background.jpg')" }}
      >
        {/* 中心區塊 */}
        <div className="absolute inset-0 flex justify-center items-center ">
          <div className=" flex justify-center items-center bg-black text-white text-4xl w-[45vw] min-w-[500px] h-40 px-10">
            <h1 className="w-100">​導入流程</h1>
          </div>
          <div className="hidden md:flex justify-center items-center bg-black text-white text-md w-[45vw] h-40 px-10 ">
            <h1>
              This is a Paragraph. Click on "Edit Text" or double click on the text box to start
              editing the content.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
