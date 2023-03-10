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
      !data?.directions || !data?.ingredients || !data?.title || !data.linkUrl;
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
      linkUrl: data.linkUrl as string,
    });
  }, [router.query]);

  const [ref] = useAutoAnimate<HTMLElement>();

  return (
    <>
      <Head>
        <title>Back of the fridge | Recipes</title>
        <meta name="description" content="Make recipes with AI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main ref={ref} className="flex flex-col p-12">
        <div key={selectedRecipe?.title}>
          <RecipeDetails recipe={selectedRecipe} />
        </div>
        <div className="flex flex-1 flex-col p-12">
          <h3 className="mb-6 text-2xl font-bold">Your recipes</h3>
          <RecipeList onRecipeSelect={setSelectedRecipe} />
        </div>
      </main>
    </>
  );
};

export default Recipes;
