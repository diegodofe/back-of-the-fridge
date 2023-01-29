import {Image} from "antd";
import React from "react";
import type {Recipe} from "../types/recipe";

export const RecipeDetails = ({recipe}: {recipe: Recipe | undefined;}) => {
  if (!recipe) return null;
  return (
    <div className="flex gap-8">
      <div className="flex-1">
        <Image
          src={"https://picsum.photos/500"}
          alt={recipe.title + "photo"}
          style={{objectFit: "cover", width: "100%"}}
          height="75%"
          width="100%"
          preview={false}
        />
      </div>
      <div className="flex flex-1 flex-col gap-4">
        <h3 className="text-2xl font-bold">{recipe.title}</h3>
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
          <div>
            <div style={{height: '30px', color: 'white'}}>!</div>
            <a
              style={{
                backgroundColor: "#bdc3c7",
                color: "white", padding: "10px", borderRadius: "5px"
              }}
              rel="noreferrer"
              target="_blank"
              href="https://www.google.com/search?q=Food+donation+stores+near+me&oq=Food+donation+stores+near+me&aqs=chrome..69i57j33i22i29i30l9.10790j0j7&sourceid=chrome&ie=UTF-8">
              Or Donate!
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};
