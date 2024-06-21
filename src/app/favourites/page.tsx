"use client";
import MobileNavigation from "@/components/MobileNavigation";
import Recipes from "@/components/Recipes";
import { useFavourites } from "@/contexts/favourites/FavouritesContext";
import Container from "@/ui/Container";
import React from "react";

function Favourites() {
  const { items } = useFavourites();
  return (
    <Container>
      <Recipes
        recipes={items?.length ? items : []}
        title="Favourites"
        layout="GRID"
      />
      <MobileNavigation />
    </Container>
  );
}

export default Favourites;
