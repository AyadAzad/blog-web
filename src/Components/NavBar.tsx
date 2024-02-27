import { Link, useLocation } from "react-router-dom";
import {
  RouteName,
  generateRoutePath,
  showInMenuRoutes,
} from "../App/routes/index.ts";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import SearchBar from "./SearchBar.tsx";
import iconRUS from "../assets/icons8-флаг-россии-48.png";
import iconUSA from "../assets/icons8-флаг-сша-48.png";

const NavBar = () => {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <nav className="bg-light border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 ">
          <Link
            to={generateRoutePath({ name: RouteName.Home })}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <svg
              id="logo-38"
              width="78"
              height="32"
              viewBox="0 0 78 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M55.5 0H77.5L58.5 32H36.5L55.5 0Z"
                className="ccustom"
                fill="#FF7A00"
              ></path>
              <path
                d="M35.5 0H51.5L32.5 32H16.5L35.5 0Z"
                className="ccompli1"
                fill="#FF9736"
              ></path>
              <path
                d="M19.5 0H31.5L12.5 32H0.5L19.5 0Z"
                className="ccompli2"
                fill="#FFBC7D"
              ></path>
            </svg>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              InsightBlog
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={handleMobileMenuToggle}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <span className="w-1/2 max-sm:mt-5 max-sm:w-screen p-2">
            <SearchBar />
          </span>
          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {showInMenuRoutes.map((route) => (
                <li key={route.key}>
                  <Link
                    to={generateRoutePath({ name: route.key })}
                    className={
                      pathname === route.path
                        ? " block py-2 px-3 bg-blue-700 rounded md:bg-transparent md:text-amber-400 md:p-0 dark:text-white md:dark:text-white md:hover:text-blue-500"
                        : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    }
                  >
                    {t(`routes.${route.label}`)}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={() => changeLanguage("en")}
                  className="cursor-pointer w-8 h-8"
                >
                  <img src={iconUSA}></img>
                </button>
                <button
                  onClick={() => changeLanguage("ru")}
                  className="cursor-pointer w-8 h-8"
                >
                  <img src={iconRUS}></img>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
