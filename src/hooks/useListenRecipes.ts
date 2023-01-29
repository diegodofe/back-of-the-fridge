import { useContext, useEffect, useState } from "react";
import { UserContext } from "../pages/_app";
import { listenToRecipes } from "../services/recipe";
import type { Recipe } from "../types/recipe";

export default function useRecipes() {
  const user = useContext(UserContext);
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    return listenToRecipes({ userId: user.id, cb: setRecipes });
  }, [user.id]);

  return { recipes };
}
