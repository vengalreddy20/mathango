import Image from "next/image";
import React from "react";

const Ingredient = ({ ingredient }: any) => {
  const isValidUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  };

  const imageUrl = isValidUrl(ingredient.image)
    ? ingredient.image
    : `https://img.spoonacular.com/ingredients_100x100/${ingredient.image}`;
  return (
    <div className="flex cursor-pointer flex-col items-center text-center">
      <div className=" rounded-full relative  h-[104px] border border-secondary-700 w-[104px] ">
        <Image
          src={imageUrl}
          fill
          alt={`${ingredient.name}`}
          className="rounded-full"
        />
      </div>
      <p className="text-xs capitalize font-medium leading-4 text-black pt-2">
        {ingredient.name}
      </p>
    </div>
  );
};

export default Ingredient;
