export async function fetchRecipes() {
  const response = await fetch(
    "https://api.spoonacular.com/recipes/random?number=15&apiKey=badc14f2ee22453b9343c642a4377f3c",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        revalidate: 86400, // 24 hours
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch recipes");
  }

  return response.json();
}
