import { Group } from "antd/es/avatar";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
} from "firebase/firestore";
import { db } from "../../firebase";
import type { Recipe } from "../types/recipe";

export async function createRecipe(userId: string, recipe: Recipe) {
  return await addDoc(collection(db, `users/${userId}/recipes`), recipe);
}

export function listenToRecipes({
  userId,
  cb,
}: {
  userId: string;
  cb: (recipes: Recipe[]) => void;
}) {
  const q = query(collection(db, `users/${userId}/recipes`));

  return onSnapshot(q, (querySnapshot) => {
    const groups: Recipe[] = [];
    querySnapshot.forEach((docSnap) => {
      groups.push({ id: docSnap.id, ...docSnap.data() } as unknown as Recipe);
    });
    cb(groups);
  });
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

export async function getRecipesByUserId(userId: string) {
  const q = query(collection(db, `users/${userId}/recipes`));

  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((userDoc) => {
    const recipe: Recipe = {
      id: userDoc.id,
      ...userDoc.data(),
    } as unknown as Recipe;
    return recipe;
  });
}
