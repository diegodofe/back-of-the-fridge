import { CoffeeOutlined } from "@ant-design/icons";
import { Avatar, Skeleton } from "antd";
import useRecipes from "../hooks/useRecipes";
import type { Recipe } from "../types/recipe";

const RecipeThumbnail = ({ recipe }: { recipe: Recipe }) => {
  const numIngredients = recipe.ingredients.length;
  const numDirections = recipe.directions.length;
  return (
    <div className="flex items-center gap-2">
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

export const RecipeList = () => {
  const { recipes, isLoading } = useRecipes();

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
    <div>
      {recipes.map((recipe) => (
        <RecipeThumbnail key={recipe.title} recipe={recipe} />
      ))}
    </div>
  );
};
