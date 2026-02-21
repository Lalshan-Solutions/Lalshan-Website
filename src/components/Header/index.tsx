"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import Sidebar from "./Sidebar";
import { MenuRounded, CloseRounded } from "@mui/icons-material";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const usePathName = usePathname();

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleStickyNavbar = () => {
    if (window.scrollY >= 50) setSticky(true);
    else setSticky(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-40 flex w-full items-center transition-all duration-300 ease-in-out border-b ${sticky
          ? "bg-white/80 dark:bg-[#0B1121]/80 backdrop-blur-xl shadow-sm border-gray-200/50 dark:border-white/5 py-3 lg:py-2"
          : "bg-transparent border-transparent py-5 lg:py-4"
          }`}
      >
        <div className="container relative mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center w-60 xl:mr-12">
              <Link href="/" className="relative block w-full transition-transform hover:scale-[1.02] duration-300">
                <Image
                  src="/images/logo/logo-2.svg"
                  alt="Lalshan Solutions Logo"
                  width={150}
                  height={35}
                  className="w-[140px] md:w-[150px] dark:hidden object-contain"
                  priority
                />
                <Image
                  src="/images/logo/logo.svg"
                  alt="Lalshan Solutions Logo"
                  width={150}
                  height={35}
                  className="hidden w-[140px] md:w-[150px] dark:block object-contain"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex flex-1 items-center justify-center">
              <nav aria-label="Main Navigation">
                <ul className="flex items-center space-x-1 lg:space-x-2">
                  {menuData.map((menuItem, index) => {
                    const isActive = usePathName === menuItem.path;
                    return (
                      <li key={index} className="group relative">
                        {menuItem.path && (
                          <Link
                            href={menuItem.path}
                            className={`relative px-5 py-2.5 rounded-full text-[15px] font-medium transition-all duration-300 ${isActive
                              ? "text-primary bg-primary/10 dark:text-white dark:bg-white/10"
                              : "text-[#64748B] dark:text-[#94A3B8] hover:text-primary dark:hover:text-white hover:bg-[#F8FAFC] dark:hover:bg-white/5"
                              }`}
                          >
                            <span className="relative z-10">{menuItem.title}</span>
                            {/* Animated bottom bar for active state */}
                            {isActive && (
                              <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-primary dark:bg-white rounded-full scale-100 transition-transform" />
                            )}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>

            {/* Actions & Toggles */}
            <div className="flex items-center justify-end gap-3 sm:gap-4 w-auto pl-4">
              <ThemeToggler />

              {/* Hamburger Menu (Mobile/Tablet) */}
              <button
                onClick={navbarToggleHandler}
                aria-label="Toggle Mobile Menu"
                className={`lg:hidden relative flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 focus:outline-none text-[#475569] dark:text-[#94A3B8] hover:text-primary dark:hover:text-white ${navbarOpen
                  ? "bg-primary/10 dark:bg-primary/20 text-primary dark:text-white"
                  : "bg-[#F8FAFC] dark:bg-white/5 hover:bg-[#F1F5F9] dark:hover:bg-white/10"
                  }`}
              >
                <div className="relative flex items-center justify-center transition-transform duration-300">
                  {navbarOpen ? (
                    <CloseRounded fontSize="small" className="animate-in spin-in-90 fade-in duration-300" />
                  ) : (
                    <MenuRounded fontSize="small" className="animate-in zoom-in-75 fade-in duration-300" />
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Render the injected Sidebar component seamlessly */}
      <Sidebar isOpen={navbarOpen} toggleSidebar={navbarToggleHandler} />
    </>
  );
};

export default Header;
