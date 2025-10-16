"use client";
import clsx from "clsx";
import { HeartIcon, Menu, Search } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import NavMajorCatalog from "./NavMajorCatalog";
import NavSmallCatalog from "./NavSmallCatalog";
import NavMobile from "./NavMobile";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();

  const [isMajorCatalog, setIsMajorCatalog] = useState(false);
  const [isSmallCatalog, setIsSmallCatalog] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isMobNav, setMobNav] = useState(false);

  const [isTop, setIsTop] = useState(false);
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    const top = scrollY < 20;
    setIsTop(top);
  }, [scrollY]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const home = pathname === "/";
    setIsHome(home);
    console.log(pathname);
  }, [pathname]);
  return (
    <>
      <nav className={`top-0 group z-30 w-full ${isHome ? "fixed" : "sticky"}`}>
        <div
          className={clsx(
            `group-hover:bg-[#d6d2c4]  ${
              isTop && isHome ? "bg-tranparent" : "bg-[#d6d2c4] brii shadow-lg"
            }  transition-colors duration-300 ease-in-out`
          )}
        >
          <div className="container mx-auto px-3 md:px-0 flex justify-between i">
            <div className="text-white hidden md:flex items-center gap-2 lg:gap-4">
              <div
                onMouseEnter={() => setIsMajorCatalog(true)}
                onMouseLeave={() => setIsMajorCatalog(false)}
                className="flex items-center h-full"
              >
                <p className="text-[14px] xl:text-base cursor-pointer text-nowrap">
                  Большая техника
                </p>
              </div>
              <div
                onMouseEnter={() => setIsSmallCatalog(true)}
                onMouseLeave={() => setIsSmallCatalog(false)}
                className="flex items-center h-full"
              >
                <p className="text-[14px] xl:text-base cursor-pointer text-nowrap">
                  Малая техника
                </p>
              </div>

              <p className="text-[14px] hidden lg:block xl:text-base cursor-pointer">
                Колаборации
              </p>
            </div>
            <div className="flex items-center ">
              <Menu
                onClick={() => setMobNav(true)}
                className={clsx(
                  "text-white w-6 h-6 cursor-pointer md:hidden flex-shrink-0"
                )}
              />
            </div>

            <Link href={"/"}>
              <Image
                src="/SmegLogo2.svg"
                alt="Smeg Logo"
                height={70}
                width={232}
                className="lg:w-[232px] w-[150px] h-[70px] cursor-pointer"
              />
            </Link>

            <div className="text-white flex items-center gap-2 lg:gap-4">
              <div className="hidden md:flex items-center gap-2 lg:gap-4">
                <Link
                  href={"/branches"}
                  className="text-[14px] xl:text-base cursor-pointer"
                >
                  Магазины
                </Link>
                <Link
                  href={"/sales"}
                  className="text-[14px] xl:text-base cursor-pointer"
                >
                  Акции
                </Link>
                <Link
                  href={"/service-center"}
                  className="text-[14px] xl:text-base cursor-pointer text-nowrap"
                >
                  Сервисный центр
                </Link>
                <Link
                  href={"/about-us"}
                  className="text-[14px] xl:text-base cursor-pointer text-nowrap"
                >
                  О нас
                </Link>
              </div>
              <Link href={"/search"}>
                <Search
                  className={clsx("w-6 h-6 cursor-pointer flex-shrink-0")}
                />
              </Link>
              <Link href={"/favorites"}>
                <HeartIcon
                  className={clsx("w-6 h-6 cursor-pointer flex-shrink-0")}
                />
              </Link>
            </div>
          </div>
        </div>

        <div
          className={`absolute left-0 top-full bg-[#d6d2c4]  flex shadow-md  w-full transition-all duration-300  ease-in-out z-50 origin-top ${
            isMajorCatalog
              ? "scale-y-100  h-[70vh] pt-4"
              : "scale-y-0  py-0 h-0"
          }`}
          onMouseEnter={() => setIsMajorCatalog(true)}
          onMouseLeave={() => setIsMajorCatalog(false)}
        >
          <NavMajorCatalog />
        </div>
        <div
          className={`absolute left-0 top-full bg-[#d6d2c4]  flex shadow-md  w-full transition-all duration-300  ease-in-out z-50 origin-top ${
            isSmallCatalog
              ? "scale-y-100  h-[70vh] pt-4"
              : "scale-y-0  py-0 h-0"
          }`}
          onMouseEnter={() => setIsSmallCatalog(true)}
          onMouseLeave={() => setIsSmallCatalog(false)}
        >
          <NavSmallCatalog />
        </div>
      </nav>
      {isMobNav && <NavMobile isMobNav={isMobNav} setMobNav={setMobNav} />}
    </>
  );
}
