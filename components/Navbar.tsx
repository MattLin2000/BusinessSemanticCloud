'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="pb-4 bg-black">
      <div className="text-3xl gap-2 p-4 flex justify-center bg-black text-white">
        <div className="logo flex position absolute top-4 left-10">
          <div className="mr-10 text-base">Cflux.tech</div>
        </div>
        <div className="justify-center flex gap-10 ">
          <div>
            <Link
              href={'/'}
              className={`text-base hover:text-[#00D8EA] transition duration-300 ${pathname === '/' ? 'text-[#00D8EA]' : ''} `}
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
            <div className="hidden group-hover:block absolute top-auto left-[-8] p-2 min-w-[80px] bg-black z-10">
              <Link
                href={'/services/importProcess'}
                className={`block text-base hover:text-[#00D8EA] transition duration-300 ${pathname === '/services/importProcess' ? 'text-[#00D8EA]' : 'text-white'}`}
              >
                導入流程
              </Link>
              <Link
                href={'/services/technical'}
                className={`block text-base  hover:text-[#00D8EA] transition duration-300 ${pathname === '/services/technical' ? 'text-[#00D8EA]' : 'text-white'}`}
              >
                核心技術
              </Link>
            </div>
          </div>
          <div>
            <Link
              href={'/blogs'}
              className={`text-base hover:text-[#00D8EA] transition duration-300 ${pathname === '/blogs' ? 'text-[#00D8EA]' : ''} `}
            >
              部落格
            </Link>
          </div>

          <div>
            <Link
              href={'/cases'}
              className={`text-base hover:text-[#00D8EA] transition duration-300 ${pathname === '/cases' ? 'text-[#00D8EA]' : ''} `}
            >
              成功案例
            </Link>
          </div>
          <div>
            <Link
              href={'/members'}
              className={`text-base hover:text-[#00D8EA] transition duration-300 ${pathname === '/members' ? 'text-[#00D8EA]' : ''} `}
            >
              Members
            </Link>
          </div>
        </div>
        <div className="rg"></div>
      </div>
    </div>
  );
};

export default Navbar;
