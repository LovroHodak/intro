import React, { useState } from "react";
import { tw } from "../tailwind";

import Logo from "../components/Logo";

export default function Navbarr({ projectsRef, contactRef, jobsRef }) {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="bg-white border-gray-200 rounded dark:bg-gray-800">
      <div className="w-full flex flex-wrap md:flex-nowrap justify-between ">
        <Logo />

        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu"
          aria-expanded={toggleMenu}
          onClick={() =>
            toggleMenu ? setToggleMenu(false) : setToggleMenu(true)
          }
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            className="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        <div
          className={`${toggleMenu ? "" : "hidden"} w-full md:block md:w-auto`}
          id="mobile-menu"
        >
          <ul className="flex flex-col justify-end mt-4 font-mono text-4xl md:flex-row md:space-x-8 md:mt-0">
            {/* use ref in Navbar to scrollIntoView */}
            <li>
              <NavLinks
                onClick={() => {
                  projectsRef.current.scrollIntoView();
                  setToggleMenu(false);
                }}
              >
                Projects
              </NavLinks>
            </li>
            <li>
              <NavLinks
                onClick={() => {
                  jobsRef.current.scrollIntoView();
                  setToggleMenu(false);
                }}
              >
                Jobs
              </NavLinks>
            </li>
            <li>
              <NavLinks
                onClick={() => {
                  contactRef.current.scrollIntoView();
                  setToggleMenu(false);
                }}
              >
                Contact
              </NavLinks>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

const NavLinks = tw.a`
block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700
`;
