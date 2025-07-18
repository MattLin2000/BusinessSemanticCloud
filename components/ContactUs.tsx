import Link from 'next/link';
import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-black text-white px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 ">
      <div className="flex flex-col lg:flex-row border-b border-gray-300">
        {/* Left Section: Contact Form */}
        <div className="w-full lg:w-1/2 border-t-2 border-t-gray-300 lg:border-r-2 lg:border-r-gray-300 py-6 sm:py-8">
          <div className="text-2xl sm:text-3xl font-bold py-4 sm:py-6">CFlux.tech</div>
          <div className="py-4 sm:py-6">
            <div className="text-3xl sm:text-4xl font-semibold py-2">聯絡方式</div>
            <label htmlFor="email" className="block text-sm sm:text-base py-2">
              Email*
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full sm:w-3/4 lg:w-2/3 border-b border-gray-300 bg-transparent text-white py-2 focus:outline-none focus:border-[#00D8EA]"
              placeholder="example@mysite.com"
            />
            <div className="flex items-center py-2 text-sm sm:text-base text-gray-400">
              <img
                src="/svg/circle-exclamation-solid.svg"
                alt="Exclamation"
                className="w-4 h-4 mx-2"
              />
              <p>請輸入電子郵件地址，例如 example@mysite.com。</p>
            </div>
            <div className="flex items-center py-2">
              <input type="checkbox" className="w-5 h-5 mr-2 accent-[#00D8EA] cursor-pointer" />
              <p className="text-sm sm:text-base">Yes, subscribe me to your newsletter.</p>
            </div>
            <div className="flex items-center py-2 text-sm sm:text-base text-gray-400">
              <img
                src="/svg/circle-exclamation-solid.svg"
                alt="Exclamation"
                className="w-4 h-4 mx-2"
              />
              <p>勾選方塊以繼續。</p>
            </div>
            <button className="w-full sm:w-3/4 lg:w-2/3 bg-white text-black font-medium py-2 px-4 mt-4 hover:bg-[#00D8EA] hover:text-white transition-all duration-300 border border-gray-300 cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>

        {/* Right Section: Contact Info & Links */}
        <div className="w-full lg:w-1/2 border-t-2 border-t-gray-300 py-6 sm:py-8 lg:py-12 flex items-end justify-center lg:justify-end">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 text-center sm:text-left">
            <div className="text-sm sm:text-base">
              <p>123-456-7890</p>
              <p>info@mysite.com</p>
              <p className="mt-4">
                500 Terry Francine Street,
                <br /> 6th Floor,
                <br /> San Francisco,
                <br /> CA 94158
              </p>
              {/* Social Media Icons (Uncomment when ready) */}
              {/* <div className="flex justify-center sm:justify-start mt-4 gap-2">
                <img src="/images/fb.webp" alt="Facebook" className="w-6 h-6" />
                <img src="/images/ig.webp" alt="Instagram" className="w-6 h-6" />
                <img src="/images/x.webp" alt="X" className="w-6 h-6" />
                <img src="/images/tiktok.webp" alt="TikTok" className="w-6 h-6" />
              </div> */}
            </div>
            <div className="text-sm sm:text-base underline">
              <Link href="#" className="block py-1 hover:text-[#00D8EA]">
                隱私權政策
              </Link>
              <Link href="#" className="block py-1 hover:text-[#00D8EA]">
                無障礙聲明
              </Link>
              <Link href="#" className="block py-1 hover:text-[#00D8EA]">
                條款與條件
              </Link>
              <Link href="#" className="block py-1 hover:text-[#00D8EA]">
                退款政策
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
