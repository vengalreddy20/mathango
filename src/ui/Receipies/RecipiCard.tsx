import Image from "next/image";
import Link from "next/link";
import React from "react";
type Recipe = {
  id: number;
  image: string;
  title: string;
  readyInMinutes: number;
};
type RecipeCardProps = {
  recipe: Recipe;
  layout?: string;
};

const RecipeCard = ({ layout = "RAIL", recipe }: RecipeCardProps) => {
  return (
    <>
      {layout === "RAIL" ? (
        <Link href={`/recipe/${recipe.id}`}>
          <div className="w-[160px]">
            <div
              style={{
                backgroundImage: `url('${recipe.image}')`,
              }}
              className="bg-cover bg-no-repeat rounded-lg h-[160px] w-[160px]"
            >
              <div className="flex flex-col justify-end px-2 py-4 h-full bg-black-50">
                <h3 className="text-white capitalize font-semibold text-sm line-clamp-1">
                  {recipe.title}
                </h3>
                <p className="text-secondary-500 text-xs font-normal pt-2">
                  Ready in {recipe.readyInMinutes} mins
                </p>
              </div>
            </div>
          </div>
        </Link>
      ) : (
        <Link href={`/recipe/${recipe.id}`}>
          <div className="bg-white  grid grid-cols-4 gap-x-4  rounded-md ">
            <div className="relative h-[100px] w-[100px] col-span-1 ">
              <Image
                src={recipe.image}
                alt={`${recipe.title}`}
                fill
                priority
                className="rounded-bl-md rounded-tl-md "
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="px-4 py-1 col-span-3 flex flex-col justify-center">
              <h3 className="text-black capitalize font-semibold text-sm line-clamp-1">
                {recipe.title}
              </h3>
              <p className="text-black text-xs font-normal pt-2">
                Ready in {recipe.readyInMinutes} mins
              </p>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default RecipeCard;
