import RecipiCard from "@/ui/Receipies/RecipiCard";
import { fetchRecipes } from "@/core/home/home";
export default async function Home() {
  const recipies = await fetchRecipes();
  console.log("checkingrecipies", recipies.recipes);
  const recipe = recipies.recipes.slice(0, 10).map((item: any) => ({
    image: item.image,
    name: item.title,
    time: item.readyInMinutes,
  }));
  return (
    <div className="px-4">
      <RecipiCard recipes={recipe} title="Popular Recipes" />
    </div>
  );
}
