import {useEffect, useState} from "react";
import {fakeRecipes} from "../test/recipe";
import type {Recipe} from "../types/recipe";

export default function useRecipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setRecipes(fakeRecipes);
    setIsLoading(false);
  }, []);

  return {recipes, isLoading};
}
