'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <div className=" bg-black">
      <div className="relative">
        {/* Logo */}
        <div className="absolute top-4 left-4 md:left-10 z-10">
          <div className="text-white text-base font-medium">
            <Link href={'/'}>Cflux.tech</Link>
          </div>
        </div>

        {/* 漢堡選單按鈕 (手機版) */}
        <div className="md:hidden absolute top-4 right-4 z-51">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl focus:outline-none"
            aria-label="切換選單"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* 桌面版選單 */}
        <div className="hidden md:flex justify-center p-4">
          <div className="flex gap-6 lg:gap-10 text-white">
            <div>
              <Link
                href={'/'}
                className={`text-base hover:text-[#00D8EA] transition duration-300 ${
                  pathname === '/' ? 'text-[#00D8EA]' : ''
                }`}
              >
                Home
              </Link>
            </div>

            {/* 服務項目與下拉菜單 */}
            <div className="relative group">
              <Link
                href={'/services'}
                className={`text-base hover:text-[#00D8EA] transition duration-300 ${
                  pathname === '/services' ||
                  pathname === '/services/importProcess' ||
                  pathname === '/services/technical'
                    ? 'text-[#00D8EA]'
                    : 'text-white'
                }`}
              >
                服務項目
              </Link>
              <div className="hidden group-hover:block absolute top-full left-[-15px] pt-2 min-w-[100px] bg-black z-10 rounded shadow-lg">
                <div className="py-2">
                  <Link
                    href={'/services/importProcess'}
                    className={`block px-4 py-2 text-base hover:text-[#00D8EA] transition duration-300 ${
                      pathname === '/services/importProcess' ? 'text-[#00D8EA]' : 'text-white'
                    }`}
                  >
                    導入流程
                  </Link>
                  <Link
                    href={'/services/technical'}
                    className={`block px-4 py-2 text-base hover:text-[#00D8EA] transition duration-300 ${
                      pathname === '/services/technical' ? 'text-[#00D8EA]' : 'text-white'
                    }`}
                  >
                    核心技術
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <Link
                href={'/blogs'}
                className={`text-base hover:text-[#00D8EA] transition duration-300 ${
                  pathname === '/blogs' ? 'text-[#00D8EA]' : ''
                }`}
              >
                部落格
              </Link>
            </div>

            <div>
              <Link
                href={'/cases'}
                className={`text-base hover:text-[#00D8EA] transition duration-300 ${
                  pathname === '/cases' ? 'text-[#00D8EA]' : ''
                }`}
              >
                成功案例
              </Link>
            </div>

            <div>
              <Link
                href={'/members'}
                className={`text-base hover:text-[#00D8EA] transition duration-300 ${
                  pathname === '/members' ? 'text-[#00D8EA]' : ''
                }`}
              >
                Members
              </Link>
            </div>
          </div>
        </div>

        {/* 手機版選單 */}
        <div
          className={`md:hidden fixed top-0 left-0 w-full h-full bg-black z-10 transform transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="pt-20 px-6">
            <div className="flex flex-col space-y-6 text-white">
              <Link
                href={'/'}
                onClick={closeMenu}
                className={`text-lg hover:text-[#00D8EA] transition duration-300 ${
                  pathname === '/' ? 'text-[#00D8EA]' : ''
                }`}
              >
                Home
              </Link>

              {/* 手機版服務項目 */}
              <div>
                <div className="flex justify-between items-center">
                  <Link
                    href={'/services'}
                    onClick={closeMenu}
                    className={`text-lg hover:text-[#00D8EA] transition duration-300 ${
                      pathname === '/services' ||
                      pathname === '/services/importProcess' ||
                      pathname === '/services/technical'
                        ? 'text-[#00D8EA]'
                        : 'text-white'
                    }`}
                  >
                    服務項目
                  </Link>
                  <button onClick={toggleServices} className="text-white ml-2 focus:outline-none">
                    {isServicesOpen ? '−' : '+'}
                  </button>
                </div>

                {isServicesOpen && (
                  <div className="ml-4 mt-3 space-y-3">
                    <Link
                      href={'/services/importProcess'}
                      onClick={closeMenu}
                      className={`block text-base hover:text-[#00D8EA] transition duration-300 ${
                        pathname === '/services/importProcess' ? 'text-[#00D8EA]' : 'text-white'
                      }`}
                    >
                      導入流程
                    </Link>
                    <Link
                      href={'/services/technical'}
                      onClick={closeMenu}
                      className={`block text-base hover:text-[#00D8EA] transition duration-300 ${
                        pathname === '/services/technical' ? 'text-[#00D8EA]' : 'text-white'
                      }`}
                    >
                      核心技術
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href={'/blogs'}
                onClick={closeMenu}
                className={`text-lg hover:text-[#00D8EA] transition duration-300 ${
                  pathname === '/blogs' ? 'text-[#00D8EA]' : ''
                }`}
              >
                部落格
              </Link>

              <Link
                href={'/cases'}
                onClick={closeMenu}
                className={`text-lg hover:text-[#00D8EA] transition duration-300 ${
                  pathname === '/cases' ? 'text-[#00D8EA]' : ''
                }`}
              >
                成功案例
              </Link>

              <Link
                href={'/members'}
                onClick={closeMenu}
                className={`text-lg hover:text-[#00D8EA] transition duration-300 ${
                  pathname === '/members' ? 'text-[#00D8EA]' : ''
                }`}
              >
                Members
              </Link>
            </div>
          </div>
        </div>

        {/* 手機版的 padding */}
        <div className="md:hidden h-16"></div>
      </div>
    </div>
  );
};

export default Navbar;
