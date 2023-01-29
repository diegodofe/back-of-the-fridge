import { Image } from "antd";
import React from "react";
import type { Recipe } from "../types/recipe";

export const RecipeDetails = ({ recipe }: { recipe: Recipe | undefined }) => {
  if (!recipe) return null;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <div>
          <h3 className="mb-10 text-2xl font-bold">{recipe.title}</h3>
          <div>
            <h4 className="mb-1 font-semibold">Ingredients</h4>
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
        </div>
        <Image
          src={"https://picsum.photos/200"}
          alt="recipe-picture"
          width={200}
          height={200}
          preview={false}
        />
      </div>

      <div>
        <h4 className="mb-1 font-semibold">Steps</h4>
        <ul>
          {recipe.directions.map((step, index) => (
            <li key={step}>
              <div className="flex gap-2 align-top">
                <p className="mr-1 font-bold text-gray-500">{index + 1}</p>
                <p>{step}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
