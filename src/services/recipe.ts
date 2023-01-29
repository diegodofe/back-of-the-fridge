import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import type { Recipe } from "../types/recipe";

export async function createRecipe(userId: string, recipe: Recipe) {
  return await addDoc(collection(db, `users/${userId}/recipes`), recipe);
}

export async function getRecipeById(userId: string, recipeId: string) {
  const docRef = doc(db, `users/${userId}/recipes`, recipeId);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) return undefined;

  const recipe: Recipe = {
    id: docSnap.id,
    ...docSnap.data(),
  } as unknown as Recipe;

  console.log("recipe");

  return recipe;
}
