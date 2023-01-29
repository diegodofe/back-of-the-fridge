import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import type { Recipe } from "../../types/recipe";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { RecipeList } from "../../components/RecipeList";
import { RecipeDetails } from "../../components/RecipeDetails";

const Recipes: NextPage = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe>();
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
          <h2>Your recipes</h2>

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
