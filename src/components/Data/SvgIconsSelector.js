import React from 'react';

function SvgIconsSelector({id}) {
  switch (id) {
    case "SearchIcon":
      return ( <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>);
    case "ViewBoardsIcon":
      return ( <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
        />
      </svg>);
    default:
      return null;
  }
};

export default SvgIconsSelector;

<a
    href="/"
    className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden sm:block"
>
  <div className="relative">
    <img
        src="/"
        className="rounded shadow-lg"
        alt="/"
    />
    <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
      >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  </div>
  <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
    Playlist title
  </h3>
  <p className="text-sm text-[#b3b3b3] line-clamp-2">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Vitae, odit.
  </p>
</a>
<a
    href="/"
    className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden lg:block"
>
  <div className="relative">
    <img
        src="/"
        className="rounded shadow-lg"
        alt="/"
    />
    <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
      >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  </div>
  <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
    Playlist title
  </h3>
  <p className="text-sm text-[#b3b3b3] line-clamp-2">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Vitae, odit.
  </p>
</a>
<a
    href="/"
    className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden xl:block"
>
  <div className="relative">
    <img
        src="/4"
        className="rounded shadow-lg"
        alt="/"
    />
    <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
      >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  </div>
  <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
    Playlist title
  </h3>
  <p className="text-sm text-[#b3b3b3] line-clamp-2">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Vitae, odit.
  </p>
</a>
<a
    href="/"
    className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 2xl:block"
>
  <div className="relative">
    <img
        src="/5"
        className="rounded shadow-lg"
        alt="/"
    />
    <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
      >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  </div>
  <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
    Playlist title
  </h3>
  <p className="text-sm text-[#b3b3b3] line-clamp-2">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Vitae, odit.
  </p>
</a>
<a
    href="/"
    className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 3xl:block"
>
  <div className="relative">
    <img
        src="/"
        className="rounded shadow-lg"
        alt="/"
    />
    <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
      >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  </div>
  <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
    Playlist title
  </h3>
  <p className="text-sm text-[#b3b3b3] line-clamp-2">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Vitae, odit.
  </p>
</a>
<a
    href="/"
    className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 4xl:block"
>
  <div className="relative">
    <img
        src="/6"
        className="rounded shadow-lg"
        alt="/"
    />
    <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
      >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  </div>
  <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
    Playlist title
  </h3>
  <p className="text-sm text-[#b3b3b3] line-clamp-2">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Vitae, odit.
  </p>
</a>
<a
    href="/"
    className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 5xl:block"
>
  <div className="relative">
    <img
        src="https://fakeimg.pl/600/365314/fff?text=Cover&font=lobster"
        className="rounded shadow-lg"
        alt="/"
    />
    <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
      >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  </div>
  <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
    Playlist title
  </h3>
  <p className="text-sm text-[#b3b3b3] line-clamp-2">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Vitae, odit.
  </p>
</a>
<a
    href="/"
    className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 6xl:block"
>
  <div className="relative">
    <img
        src="https://fakeimg.pl/600/164e63/fff?text=Cover&font=lobster"
        className="rounded shadow-lg"
        alt="/"
    />
    <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
      >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  </div>
  <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
    Playlist title
  </h3>
  <p className="text-sm text-[#b3b3b3] line-clamp-2">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Vitae, odit.
  </p>
</a>