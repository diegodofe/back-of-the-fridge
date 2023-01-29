import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";

export async function createUser(id: string) {
  await setDoc(doc(db, "users", id), {
    id,
  });
}
