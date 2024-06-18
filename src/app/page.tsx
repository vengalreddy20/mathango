import { fetchRecipes } from "@/core/home/home";
import Recipes from "@/components/Recipes";
import Container from "@/ui/Container";
import MobileNavigation from "@/components/MobileNavigation";
import SearchBarInput from "@/ui/SearchBarInput";
import searchIcon from "../../public/images/search_icon.svg";
import Link from "next/link";
export default async function Home() {
  const recipesData = await fetchRecipes();
  console.log("checkingrecipies", recipesData.recipes);
  const recipes = recipesData.recipes.slice(0, 10).map((item: any) => ({
    image: item.image,
    title: item.title,
    readyInMinutes: item.readyInMinutes,
  }));
  return (
    <Container>
      <div className="py-6">
        <h2 className="text-base pb-2 font-medium text-black">
          👋 Hey Vengal Reddy
        </h2>
        <p className="text-xs font-normal text-secondary-600">
          Discover tasty and healthy receipt
        </p>
      </div>
      <Link href="/search">
        <SearchBarInput
          className="search-input block py-4 w-full rounded-xl border-none bg-white pl-10 pr-24 text-black text-sm font-medium  placeholder-secondary-600 sm:text-sm  "
          type="text"
          name="name"
          placeholder="Search any recipe"
          lefticon={searchIcon}
        />
      </Link>
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
