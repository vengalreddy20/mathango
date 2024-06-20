"use client";
import MobileNavigation from "@/components/MobileNavigation";
import Recipes from "@/components/Recipes";
import { getDataFromLocalStorage } from "@/hooks/useLocalStorage";
import Container from "@/ui/Container";
import React from "react";

function Favourites() {
  const recipes =
    typeof window !== "undefined" && getDataFromLocalStorage("Favourites");
  console.log("recipes in favourites", recipes);
  return (
    <Container>
      <Recipes
        recipes={recipes?.length ? recipes : []}
        title="Favourites"
        layout="GRID"
      />
      <MobileNavigation />
    </Container>
  );
}

export default Favourites;
