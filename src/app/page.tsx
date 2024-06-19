import { fetchRecipes } from "@/core/home/home";
import Recipes from "@/components/Recipes";
import Container from "@/ui/Container";
import MobileNavigation from "@/components/MobileNavigation";
import SearchBarInput from "@/ui/SearchBarInput";
import searchIcon from "../../public/images/search_icon.svg";
import Link from "next/link";
import HomeHeader from "@/components/HomeHeader";
export default async function Home() {
  const recipesData = await fetchRecipes();
  console.log("checkingrecipies", recipesData.recipes);
  const recipes = recipesData.recipes.slice(0, 10).map((item: any) => ({
    image: item.image,
    title: item.title,
    readyInMinutes: item.readyInMinutes,
    id: item.id,
  }));
  return (
    <Container>
      <HomeHeader />
      <div className="mb-16">
        <Recipes recipes={recipes} title="Popular recipes" layout="RAIL" />
        <Recipes
          recipes={recipesData.recipes}
          title="All recipes"
          layout="GRID"
        />
      </div>
      <MobileNavigation />
    </Container>
  );
}
