"use client";
import Recipes from "@/components/Recipes";
import { getDataFromLocalStorage } from "@/hooks/useLocalStorage";
import Container from "@/ui/Container";
import React from "react";

const Favourites = () => {
  const recipes = getDataFromLocalStorage("Favourites");
  console.log("recipes in favourites", recipes);
  return (
    <Container>
      <div>
        <Recipes recipes={recipes} title="Favourites" layout="GRID" />
      </div>
    </Container>
  );
};

export default Favourites;
