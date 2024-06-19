import Button from "@/ui/Button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Ingredients from "./Ingredients";

type RecipeSearchInfoProps = {
  recipeInfo: any;
};
const RecipeSearchInfo = ({ recipeInfo }: RecipeSearchInfoProps) => {
  const [showIngredients, setShowIngredients] = useState(false);
  console.log("recipeInfo", recipeInfo);
  return (
    <>
      {showIngredients ? (
        <Ingredients recipeInfo={recipeInfo} />
      ) : (
        <div className="pb-6 lg:h-[440px] overflow-y-auto no-scrollbar">
          <div className="w-full h-[360px] relative">
            <Image
              src={recipeInfo?.image}
              alt={`${recipeInfo?.title}`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="grid grid-cols-3 px-4 gap-6 py-4 text-center  ">
            <div className="border border-secondary-700 py-2 px-4 rounded-md">
              <p className="text-sm font-normal text-secondary-600">Ready in</p>
              <p className="text-primary-900 text-base font-semibold">
                {recipeInfo?.readyInMinutes} min
              </p>
            </div>
            <div className="border border-secondary-700 py-2 px-4 rounded-md ">
              <p className="text-sm font-normal text-secondary-600">Servings</p>
              <p className="text-primary-900 text-base font-semibold ">
                {recipeInfo?.servings}
              </p>
            </div>
            <div className="border border-secondary-700 py-2 px-4 rounded-md ">
              <p className="text-sm font-normal text-secondary-600">
                Price/Serving
              </p>
              <p className="text-primary-900 text-base font-semibold">
                {recipeInfo?.pricePerServing}
              </p>
            </div>
          </div>
          <div className="mx-4 ">
            <Button
              onClick={() => {
                setShowIngredients(true);
              }}
            >
              Get ingredients
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default RecipeSearchInfo;
