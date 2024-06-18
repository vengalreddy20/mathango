"use client";
import Container from "@/ui/Container";
import SearchBarInput from "@/ui/SearchBarInput";
import React, { useState, useEffect } from "react";
import backIcon from "../../../public/images/back.svg";
import crossIcon from "../../../public/images/cross.svg";
import useDebounce from "@/hooks/useDebounce";
import SearchCard from "@/ui/SearchCard";

export default function Search() {
  const [searchInput, setSearchInput] = useState<string | null>("");
  const [searchList, setSearchList] = useState([]);

  const debouncedSearch = useDebounce(searchInput, 300);

  const handleSearchInputChange = (text: string) => {
    setSearchInput(text);
  };
  const onClearSearch = () => {
    setSearchInput("");
    setSearchList([]);
  };

  useEffect(() => {
    const fetchRecipes = async () => {
      if (debouncedSearch) {
        try {
          const response = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?query=${debouncedSearch}&apiKey=badc14f2ee22453b9343c642a4377f3c&fillIngredients=true&addRecipeInformation=true&addRecipeNutrition=true`
          );
          const data = await response.json();
          setSearchList(data.results);
          console.log("Recipes:", data);
        } catch (error) {
          console.error("Error fetching recipes:", error);
        }
      }
    };

    fetchRecipes();
  }, [debouncedSearch]);

  return (
    <Container>
      <SearchBarInput
        className="search-input block py-4 w-full rounded-xl border-none bg-white pl-10 pr-24 text-black text-sm font-medium  placeholder-secondary-600 sm:text-sm  "
        type="text"
        name="name"
        placeholder="Search any recipe"
        lefticon={backIcon}
        closeIcon={searchInput ? crossIcon : undefined}
        value={searchInput}
        onChange={(e: { target: { value: any } }) =>
          handleSearchInputChange(e.target.value)
        }
        onClearSearch={onClearSearch}
      />
      {searchList?.length
        ? searchList.map((recipe, index) => (
            <SearchCard recipe={recipe} key={index} />
          ))
        : null}
    </Container>
  );
}
