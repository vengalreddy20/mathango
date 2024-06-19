"use client";
import Image from "next/image";
import React from "react";
import heart from "../../public/images/Heart.svg";
import arrowCircle from "../../public/images/arrow_circle.svg";
import { useRouter } from "next/navigation";
const RecipeInfoHeader = ({ recipeInfo }: any) => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <div className="relative  overflow-hidden text-white shadow-lg  bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
      <div style={{ width: "100%", overflow: "hidden" }}>
        <Image
          src={recipeInfo?.image}
          alt="recipe-image"
          width={1470}
          height={420}
        />
      </div>
      <div className="">
        <div className="!absolute bg-white   top-4 right-4 h-12 w-12 max-h-[48px] max-w-[48px] select-none rounded-full text-center align-middle">
          <div className="flex justify-center items-center h-full">
            <Image
              src={heart}
              alt="heart"
              width={30}
              height={30}
              className="text-center"
            />
          </div>
        </div>
        <div
          className="!absolute bg-white   top-4 left-4 h-12 w-12 max-h-[48px] max-w-[48px] select-none rounded-full text-center align-middle"
          onClick={handleBack}
        >
          <div className="flex justify-center items-center h-full">
            <Image
              src={arrowCircle}
              alt="arrow"
              width={30}
              height={30}
              className="text-center"
            />
          </div>
        </div>
      </div>

      <p className="!absolute  bottom-4 left-2 line-clamp-1 px-4 mt-2 text-lg font-bold text-white">
        {recipeInfo?.title}
      </p>
    </div>
  );
};

export default RecipeInfoHeader;
