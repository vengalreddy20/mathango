import Image from "next/image";
import React, { useState } from "react";
import searchList from "../../public/images/search_list.svg";
import Modal from "./modal/Modal";
import RecipeSearchInfo from "@/components/RecipeSearchInfo";

type recipe = {
  title: string;
  image?: string;
  id: number;
};
type SearchCardProps = {
  recipe: recipe;
};
const SearchCard = ({ recipe }: SearchCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [recipeInfo, setRecipeInfo] = useState<any>(null);
  const handleOpenRecipeInfo = (recipeInfo: any) => {
    setRecipeInfo(recipeInfo);
    setIsOpen(true);
  };
  return (
    <>
      <div
        className="flex relative gap-3 my-3 bg-white py-4 cursor-pointer px-5 rounded-lg"
        onClick={() => handleOpenRecipeInfo(recipe)}
      >
        <Image
          src={searchList}
          alt="searchList"
          width={20}
          height={20}
          priority
        />
        <p className="text-sm font-medium text-black">{recipe.title}</p>
      </div>
      {isOpen && (
        <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          title={recipeInfo?.title}
          recipeInfo={recipeInfo}
        >
          <RecipeSearchInfo recipeInfo={recipeInfo} />
        </Modal>
      )}
    </>
  );
};

export default SearchCard;
