import { CoffeeOutlined } from "@ant-design/icons";
import { Avatar, Skeleton } from "antd";
import useRecipes from "../hooks/useRecipes";
import type { Recipe } from "../types/recipe";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const RecipeThumbnail = ({ recipe }: { recipe: Recipe }) => {
  const numIngredients = recipe.ingredients.length;
  const numDirections = recipe.directions.length;
  return (
    <div className="flex cursor-pointer items-center gap-2 border-2 border-gray-600 p-8 ">
      <Avatar size="small" icon={<CoffeeOutlined />} />
      <p>
        <span>{numDirections}</span> directions
      </p>
      <p>
        <span>{numIngredients}</span> ingredients
      </p>
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
    <div ref={ref} className="flex flex-col gap-8">
      {recipes.map((recipe) => (
        <div key={recipe.title} onClick={() => onRecipeSelect(recipe)}>
          <RecipeThumbnail recipe={recipe} />
        </div>
      ))}
    </div>
  );
};
