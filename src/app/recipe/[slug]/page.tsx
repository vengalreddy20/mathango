import { fetchRecipeInformation } from "@/core/home/recipe";
type RecipeProps = {
  params: { slug: string };
};
export default async function Recipe({ params }: RecipeProps) {
  const recipeDetails = await fetchRecipeInformation(params.slug);
  console.log("RecipeDetails", recipeDetails);
  return (
    <div className="px-4">
      <h2>pdp</h2>
    </div>
  );
}
