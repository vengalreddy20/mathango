"use client";
import React from "react";
import homeFilled from "../../public/images/House.svg";
import heart from "../../public/images/Heart.svg";
import home from "../../public/images/house_empty.svg";
import heartFilled from "../../public/images/heart_filled.svg";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function MobileNavigation() {
  const pathname = usePathname();
  const is_homepage = pathname && pathname === "/" ? true : false;
  const is_favourites = pathname && pathname === "/favourites" ? true : false;

  return (
    <div className="lg:hidden flex cursor-pointer justify-evenly bg-white py-5 fixed bottom-0 left-0 right-0 z-10 ">
      <Link href="/">
        <Image
          src={is_homepage ? homeFilled : home}
          alt="home"
          width={30}
          height={30}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <Link href="/favourites">
        <Image
          src={is_favourites ? heartFilled : heart}
          alt="heart"
          width={30}
          height={30}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
    </div>
  );
}

export default MobileNavigation;
