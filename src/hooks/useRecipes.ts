import axios from "axios";
import { useEffect, useState } from "react";
import type { Recipe } from "../types/recipe";

export default function useRecipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://mchacksbackend.vercel.app/testController/samplerecipe")
      .then((res) => {
        const recipe = res.data as unknown as Recipe;
        setRecipes([recipe, recipe, recipe, recipe]);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return { recipes, isLoading };
}
