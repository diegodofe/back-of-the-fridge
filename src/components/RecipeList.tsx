import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Image, Skeleton } from "antd";

import useRecipes from "../hooks/useRecipes";
import type { Recipe } from "../types/recipe";

const RecipeThumbnail = ({ recipe }: { recipe: Recipe }) => {
  const numIngredients = recipe.ingredients.length;
  const numSteps = recipe.directions.length;
  return (
    <div className="flex flex-col align-middle">
      <Image
        src={recipe.linkUrl}
        alt={recipe.title + "photo"}
        style={{ objectFit: "cover", maxHeight: 200 }}
        preview={false}
      />

      <div className="flex flex-col justify-between gap-2 p-2">
        <h5 className="text-center text-xl">{recipe.title}</h5>

        <div className="flex justify-evenly">
          <p>
            <span className="font-extrabold">{numSteps}</span> steps
          </p>
          <p>
            <span className="font-extrabold">{numIngredients}</span> ingredients
          </p>
        </div>
      </div>
    </div>
  );
};

export const RecipeList = ({
  onRecipeSelect,
}: {
  onRecipeSelect: (selectedRecipe: Recipe) => void;
}) => {
  const { recipes, isLoading } = useRecipes();
  const [ref] = useAutoAnimate<HTMLElement>();

  if (isLoading) {
    return (
      <div>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    );
  }

  if (!recipes.length) return null;

  return (
    <div
      ref={ref}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fit, minmax(250px, ${
          recipes.length > 1 ? "1fr" : "0.5fr"
        }))`,
        gap: 16,
      }}
    >
      {recipes.map((recipe) => (
        <div
          className="cursor-pointer overflow-auto rounded-md border-2 border-gray-400 hover:shadow-md"
          key={recipe.title}
          onClick={() => onRecipeSelect(recipe)}
        >
          <RecipeThumbnail recipe={recipe} />
        </div>
      ))}
    </div>
  );
};
