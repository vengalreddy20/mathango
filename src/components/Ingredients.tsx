import Accordion from "@/ui/Accordion";
import Ingredient from "@/ui/Receipies/Ingredient";
import React from "react";
import FullRecipe from "./FullRecipe";

const Ingredients = ({ recipeInfo }: any) => {
  const faq = [
    {
      id: 1,
      title: "Ingredients",
      content: (
        <div className="grid grid-cols-3 py-4 gap-3 h-56 overflow-y-auto no-scrollbar">
          {recipeInfo?.missedIngredients.map(
            (ingredient: any, index: number) => (
              <Ingredient ingredient={ingredient} key={index} />
            )
          )}
        </div>
      ),
    },
    {
      id: 2,
      title: "Full Recipe",
      content: <FullRecipe recipeInfo={recipeInfo} />,
    },
    {
      id: 3,
      title: "Similar recipes",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];
  return (
    <div className="px-4">
      {faq?.map((item, index) => (
        <Accordion key={`${item.title}-${index}`} item={item} />
      ))}
    </div>
  );
};

export default Ingredients;
