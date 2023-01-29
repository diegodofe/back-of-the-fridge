import React from "react";
import type { Recipe } from "../types/recipe";

export const RecipeDetails = ({ recipe }: { recipe: Recipe | undefined }) => {
  if (!recipe) {
    return <p>Select a recipe</p>;
  }
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-2xl font-bold">{recipe.title}</h4>

      <div>
        <h5 className="mb-1 font-semibold">Ingredients</h5>
        <ul>
          {recipe.ingredients.map((ingredient) => (
            <li key={ingredient}>
              <div className="flex gap-2 align-top">
                <p className="mr-1 font-bold text-gray-500">•</p>
                <p>{ingredient}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h5 className="mb-1 font-semibold">Directions</h5>
        <ul>
          {recipe.directions.map((direction, index) => (
            <li key={direction}>
              <div className="flex gap-2 align-top">
                <p className="mr-1 font-bold text-gray-500">{index + 1}</p>
                <p>{direction}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
