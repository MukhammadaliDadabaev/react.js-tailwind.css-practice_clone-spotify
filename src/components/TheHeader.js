import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import TheButtonRegister from "./TheButtonRegister";
import TheButtonLogin from "./TheButtonLogin";

function TheHeader() {
  return (
    <header className="bg-[#070707] flex-1 flex justify-between items-center py-[10px] px-[13px] sm:px-[32px] sticky top-0 z-10">
      <div className="flex">

        <a
          href="#sidebar"
          className="mr-[8px] text-[#969696] p-1 -ml-1.5 inline-block lg:hidden"
        >
          <GiHamburgerMenu className="h-6 w-6"/>

        </a>

        <a
          href="/"
          className="mr-[8px] text-[#969696] p-1 cursor-not-allowed"
        >
          <FiChevronLeft className="h-6 w-6"/>

        </a>

        <a
          href="/"
          className="ml-[8px] text-[#969696] p-1 cursor-not-allowed"
        >
          <FiChevronRight className="h-6 w-6"/>

        </a>

      </div>
      <div>
       <TheButtonRegister/>
        <TheButtonLogin/>
      </div>
    </header>
  );
}

export default TheHeader;