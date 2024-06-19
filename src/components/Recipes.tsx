import React from "react";
import RecipiCard from "@/ui/Receipies/RecipiCard";
import clsx from "clsx";

type RecipesProps = {
  recipes: any[];
  title?: string;
  layout?: string;
};

const Recipes = ({ recipes = [], title, layout }: RecipesProps) => {
  return (
    <div className="py-4">
      {title && (
        <h2 className="py-4  font-bold text-secondary-800 text-base capitalize">
          {title}
        </h2>
      )}
      <div
        className={clsx(
          layout === "RAIL"
            ? "flex gap-x-6 overflow-y-auto no-scrollbar"
            : "grid grid-cols-1 gap-y-4 lg:grid-cols-3 md:grid-cols-2 md:gap-x-2 lg:gap-x-4  "
        )}
      >
        {recipes.map((recipe: any, index: number) => (
          <RecipiCard recipe={recipe} key={index} layout={layout} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
