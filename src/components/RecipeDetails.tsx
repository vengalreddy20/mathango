import Ingredient from "@/ui/Receipies/Ingredient";
import Image from "next/image";
import React from "react";
import heart from "../../public/images/Heart.svg";
import arrowCircle from "../../public/images/arrow_circle.svg";
import RecipeInfoHeader from "./RecipeInfoHeader";

const RecipeDetails = ({ recipeInfo }: any) => {
  return (
    <div>
      <div className="relative flex w-full  flex-col rounded-xl  bg-clip-border text-gray-700 shadow-lg">
        <RecipeInfoHeader recipeInfo={recipeInfo} />
        <div className="p-2">
          <div className="grid grid-cols-3 px-0 gap-2 py-4 text-center ">
            <div className="bg-white  border border-secondary-700 py-2 px-4 rounded-md">
              <p className="text-sm font-normal text-secondary-600">Ready in</p>
              <p className="text-primary-900 text-base font-semibold">
                {recipeInfo?.readyInMinutes} min
              </p>
            </div>
            <div className="bg-white  border border-secondary-700 py-2 px-4 rounded-md ">
              <p className="text-sm font-normal text-secondary-600">Servings</p>
              <p className="text-primary-900 text-base font-semibold ">
                {recipeInfo?.servings}
              </p>
            </div>
            <div className="bg-white  border border-secondary-700 py-2 px-4 rounded-md ">
              <p className="text-sm font-normal text-secondary-600">
                Price/Serving
              </p>
              <p className="text-primary-900 text-base font-semibold">
                {recipeInfo?.pricePerServing}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white my-2 py-4">
          <p className="px-4 mt-2 text-md font-bold text-black">Ingredients</p>
          <div className="px-6 flex grid-cols-3 py-4 gap-3 no-scrollbar overflow-auto">
            {recipeInfo?.extendedIngredients.map(
              (ingredient: any, index: number) => (
                <Ingredient ingredient={ingredient} key={index} />
              )
            )}
          </div>
        </div>

        <div className="bg-white my-2 py-4">
          <p className="mt-2 px-4 text-md font-bold  text-black">
            Instructions
          </p>
          <div
            className="px-6 mt-2"
            dangerouslySetInnerHTML={{ __html: recipeInfo?.instructions }}
          />
        </div>

        <div className="bg-white py-4 my-2">
          <p className="mt-2 px-4 text-md font-bold  text-black">
            Quick Summary
          </p>
          <div
            className="px-6 mt-2"
            dangerouslySetInnerHTML={{ __html: recipeInfo?.summary }}
          />
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
