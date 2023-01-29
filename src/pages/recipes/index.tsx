import { type NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import type { Recipe } from "../../types/recipe";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { RecipeList } from "../../components/RecipeList";
import { RecipeDetails } from "../../components/RecipeDetails";
import { useRouter } from "next/router";

const Recipes: NextPage = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe>();

  const router = useRouter();

  useEffect(() => {
    const data = router.query;
    const invalidQuery =
      !data?.directions || !data?.ingredients || !data?.title;
    if (invalidQuery) return;

    const ingredientsType = typeof data.ingredients;

    const ingredients =
      ingredientsType === "string"
        ? (data.ingredients as string).split(",")
        : (data.ingredients as string[]);

    setSelectedRecipe({
      title: data.title as string,
      ingredients,
      directions: data.directions as string[],
    });
  }, [router.query]);

  console.log(selectedRecipe);

  const [ref] = useAutoAnimate<HTMLElement>();

  return (
    <>
      <Head>
        <title>Recipes</title>
        <meta name="description" content="Make recipes with AI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex">
        <div className="flex flex-1 flex-col p-12">
          <h3 className="mb-6 text-2xl font-bold">Your recipes</h3>

          <RecipeList onRecipeSelect={setSelectedRecipe} />
        </div>

        <div className="flex-1 p-12">
          <div ref={ref}>
            <RecipeDetails
              key={selectedRecipe?.title}
              recipe={selectedRecipe}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Recipes;
