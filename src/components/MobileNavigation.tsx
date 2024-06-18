import React from "react";
import home from "../../public/images/House.svg";
import heart from "../../public/images/Heart.svg";
import Image from "next/image";

function MobileNavigation() {
  return (
    <div className="flex cursor-pointer justify-evenly bg-white py-5 fixed bottom-0 left-0 right-0 z-10 ">
      <Image
        src={home}
        alt="home"
        width={30}
        height={30}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <Image
        src={heart}
        alt="heart"
        width={30}
        height={30}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}

export default MobileNavigation;
