import React from "react";

type RecipeCardProps = {
  title?: string;
  recipes: any[];
};

const RecipeCard = ({ title, recipes = [] }: RecipeCardProps) => {
  return (
    <>
      {title && (
        <h2 className="py-4  font-bold text-secondary-800 text-base capitalize">
          {title}
        </h2>
      )}
      <div className="flex gap-x-6 overflow-y-auto no-scrollbar">
        {recipes.map((recipe, index) => (
          <div className="w-[160px]" key={index}>
            <div
              style={{
                backgroundImage: `url('${recipe.image}')`,
              }}
              className="bg-cover bg-no-repeat rounded-lg h-[160px] w-[160px]"
            >
              <div className="flex flex-col justify-end px-2 py-4 h-full bg-black-50">
                <h3 className="text-white capitalize font-semibold text-sm pb-2 line-clamp-1">
                  {recipe.name}
                </h3>
                <p className="text-secondary-500 text-xs font-normal">
                  Ready in {recipe.time} mins
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RecipeCard;
