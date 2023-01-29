import { useContext, useEffect, useState } from "react";
import { UserContext } from "../pages/_app";
import { getRecipesByUserId } from "../services/recipe";
import type { Recipe } from "../types/recipe";

export default function useRecipes() {
  const user = useContext(UserContext);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getRecipesByUserId(user.id)
      .then(setRecipes)
      .finally(() => setIsLoading(false));
  }, [user.id]);

  return { recipes, isLoading };
}
