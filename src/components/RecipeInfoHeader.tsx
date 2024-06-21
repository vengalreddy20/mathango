"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import heart from "../../public/images/Heart.svg";
import heartFilled from "../../public/images/heart_filled.svg";

import arrowCircle from "../../public/images/arrow_circle.svg";
import { useRouter } from "next/navigation";

import { generateFavouritesItem } from "@/app/utils/generateFavouritesItem";
import { useFavourites } from "@/contexts/favourites/FavouritesContext";
const RecipeInfoHeader = ({ recipeInfo }: any) => {
  const router = useRouter();
  const { addItemToFavourites, isInFavourites, removeItemFromFavourites } =
    useFavourites();
  const item = generateFavouritesItem(recipeInfo);

  const handleBack = () => {
    router.back();
  };
  const handleAddtoWishlist = async () => {
    await addItemToFavourites(item);
  };
  console.log(isInFavourites(recipeInfo.id));
  const handleRemoveFromWishlist = (id: number) => {
    removeItemFromFavourites(id);
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
      <div className=" cursor-pointer">
        <div className="!absolute bg-white   top-4 right-4 h-12 w-12 max-h-[48px] max-w-[48px] select-none rounded-full text-center align-middle">
          <div className="flex justify-center items-center h-full">
            {isInFavourites(recipeInfo?.id) ? (
              <>
                <Image
                  src={heartFilled}
                  alt="heart"
                  width={30}
                  height={30}
                  className="text-center"
                  onClick={() => handleRemoveFromWishlist(recipeInfo.id)}
                />
              </>
            ) : (
              <Image
                src={heart}
                alt="heart"
                width={30}
                height={30}
                className="text-center"
                onClick={handleAddtoWishlist}
              />
            )}
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
