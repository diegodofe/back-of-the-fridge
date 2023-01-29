import React from "react";
import type { Recipe } from "../types/recipe";

export const RecipeDetails = ({ recipe }: { recipe: Recipe }) => {
  return (
    <div className="flex flex-col gap-8">
      <h4>{recipe.title}</h4>

      <h5>Ingredients</h5>
      <ul>
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>

      <h5>Ingredients</h5>
      <ul>
        {recipe.directions.map((direction) => (
          <li key={direction}>{direction}</li>
        ))}
      </ul>
    </div>
  );
};
