import Image from "next/image";
import React from "react";

const Ingredient = ({ ingredient }: any) => {
  return (
    <div className="flex cursor-pointer flex-col items-center text-center">
      <div className=" rounded-full relative  h-[104px] border border-secondary-700 w-[104px] ">
        <Image
          src={ingredient.image}
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
