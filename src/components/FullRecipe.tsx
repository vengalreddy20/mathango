import React from "react";

const FullRecipe = ({ recipeInfo }: any) => {
  return (
    <div>
      <h2 className="font-bold text-sm py-2 text-black">Quick Summary</h2>
      <div
        dangerouslySetInnerHTML={{ __html: recipeInfo?.summary }}
        className="text-secondary-600 text-sm font-normal"
      />
    </div>
  );
};

export default FullRecipe;
