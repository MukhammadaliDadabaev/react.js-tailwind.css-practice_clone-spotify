import React from 'react';
// import { HomeIcon, PlusCircleIcon, HeartIcon } from '@heroicons/react/24/solid'
import navItems from "./Data/DataNav";

function TheNav(props) {
  return (
    <nav>
      {navItems.map(({ classes, icon, label }) => (
        <a href="/" className={classes} key={label}>
          {icon}
          <span className="ml-4 text-sm font-semibold">{label}</span>
        </a>
      ))}
    </nav>
  );
}

export default TheNav;


{/*<a*/}
{/*  href="/"*/}
{/*  className="flex items-center text-white bg-[#282828] mx-2 px-4 py-2 rounded"*/}
{/*>*/}
{/*  <HomeIcon className="h-6 w-6" />*/}
{/*  <span className="ml-4 text-sm font-semibold">Home</span>*/}
{/*</a>*/}
{/*<a*/}
{/*  href="/"*/}
{/*  className="flex items-center hover:text-white mx-2 px-4 py-2 rounded duration-300"*/}
{/*>*/}
{/*  <svg*/}
{/*    xmlns="http://www.w3.org/2000/svg"*/}
{/*    className="h-6 w-6"*/}
{/*    fill="none"*/}
{/*    viewBox="0 0 24 24"*/}
{/*    stroke="currentColor"*/}
{/*  >*/}
{/*    <path*/}
{/*      strokeLinecap="round"*/}
{/*      strokeLinejoin="round"*/}
{/*      strokeWidth="2"*/}
{/*      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"*/}
{/*    />*/}
{/*  </svg>*/}
{/*  <span className="ml-4 text-sm font-semibold">Search</span>*/}
{/*</a>*/}
{/*<a*/}
{/*  href="/"*/}
{/*  className="flex items-center hover:text-white mx-2 px-4 py-2 rounded duration-300 mb-6"*/}
{/*>*/}
{/*  <svg*/}
{/*    xmlns="http://www.w3.org/2000/svg"*/}
{/*    className="h-6 w-6"*/}
{/*    fill="none"*/}
{/*    viewBox="0 0 24 24"*/}
{/*    stroke="currentColor"*/}
{/*  >*/}
{/*    <path*/}
{/*      strokeLinecap="round"*/}
{/*      strokeLinejoin="round"*/}
{/*      strokeWidth="2"*/}
{/*      d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"*/}
{/*    />*/}
{/*  </svg>*/}
{/*  <span className="ml-4 text-sm font-semibold">Your Library</span>*/}
{/*</a>*/}
{/*<a*/}
{/*  href="/"*/}
{/*  className="flex items-center hover:text-white mx-2 px-4 py-2 rounded duration-300"*/}
{/*>*/}
{/*  <PlusCircleIcon className="h-6 w-6"/>*/}
{/*  <span className="ml-4 text-sm font-semibold">*/}
{/*          Create Playlist*/}
{/*        </span>*/}
{/*</a>*/}
{/*<a*/}
{/*  href="/"*/}
{/*  className="flex items-center hover:text-white mx-2 px-4 py-2 rounded duration-300"*/}
{/*>*/}
{/*  <HeartIcon className="h-6 w-6"/>*/}
{/*  <span className="ml-4 text-sm font-semibold">Liked Songs</span>*/}
{/*</a>*/}