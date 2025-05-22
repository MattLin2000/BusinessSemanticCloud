import Link from 'next/link';
import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-black p-10 text-white ">
      <div className="flex border-b-1 border-b-white">
        <div className=" border-t-2 w-1/2 border-t-white border-r-2 border-r-white py-4">
          <div className="text-[28px] py-10">CFlux.tech</div>
          <div className="py-10">
            <div className="text-[38px] py-2">聯絡方式</div>
            <p>Email*</p>
            <input
              type="email"
              name="email"
              id=""
              className="border-b-1 min-w-[500px] min-h-10 py-2"
            />

            <div className="flex justify-start items-center py-2 ">
              <img src="/svg/circle-exclamation-solid.svg" alt="" className="w-3 h-3 mx-2" />
              <p className="text-sm">請輸入電子郵件地址，例如 example@mysite.com。</p>
            </div>
            <div className="flex py-2">
              <input type="checkbox" className="w-5 h-5 mr-2 " />
              <p>Yes, subscribe me to your newsletter.</p>
            </div>
            <div className="flex justify-start items-center py-2 ">
              <img src="/svg/circle-exclamation-solid.svg" alt="" className="w-3 h-3 mx-2" />
              <p className="text-sm">勾選方塊以繼續。</p>
            </div>
            <button className="transition-all duration-500 hover:bg-black hover:text-white border-1 hover:cursor-pointer border-white  bg-white text-black flex justify-center items-center min-w-[500px] min-h-10  my-2">
              <p>Subscribe</p>
            </button>
          </div>
        </div>

        <div className="border-t-2 w-1/2 border-t-white flex items-end justify-end py-20 px-25">
          <div className="flex justify-end ">
            <div className="text-lg  px-25">
              <p>123-456-7890</p>
              <p>info@mysite.com</p>
              <br />
              <p>
                500 Terry Francine Street,
                <br /> 6th Floor,
                <br /> San Francisco,
                <br />
                CA 94158
              </p>

              <div className="flex justify-start">
                {/* <img src="images/fb.webp" alt="" className="px-1" />
                <img src="images/ig.webp" alt="" className="px-1" />
                <img src="images/x.webp" alt="" className="px-1" />
                <img src="images/tiktok.webp" alt="" className="px-1" /> */}
              </div>
            </div>
            <div className="text-lg underline">
              <Link href="#">隱私權政策</Link>
              <br />
              <Link href="#">無障礙聲明</Link>
              <br />
              <Link href="#">條款與條件</Link>
              <br />
              <Link href="#">退款政策</Link>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
