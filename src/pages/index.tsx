import type { UploadFile } from "antd";
import { message } from "antd";
import axios from "axios";
import { ref, uploadBytes } from "firebase/storage";
import { type NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { storage } from "../../firebase";
import { ImageUploaderMenu } from "../components/ImageUploaderMenu";
import IngredientsList from "../components/IngredientsList/IngredientsList";
import { LoaderOverlay } from "../components/LoaderOverlay";
import OrDivider from "../components/OrDivider";
import { createRecipe } from "../services/recipe";
import type { Recipe } from "../types/recipe";
import { UserContext } from "./_app";

const url =
  "https://mchacksbackend.vercel.app/cohereAdapterController/generatesampleprompt";

const Home: NextPage = () => {
  const user = useContext(UserContext);
  const router = useRouter();
  const [showLoader, setShowLoader] = useState<boolean>(false);
  const [messageApi, contextHolder] = message.useMessage();

  const handleGenerateRecipe = (ingredients: string[]) => {
    console.log("Generating recipe...");
    setShowLoader(true);
    axios
      .post(url, {
        ingredients,
      })
      .then((res) => {
        if (res.status === 200) {
          const createdRecipe = res.data as unknown as Recipe;

          void createRecipe(user.id, createdRecipe).then((docRef) => {
            void router.push({
              pathname: "/recipes",
              query: { ...createdRecipe },
            });
          });
        }
      })
      .catch(() => {
        void messageApi.open({
          type: "error",
          content: "Failed to create a recipe",
        });
      })
      .finally(() => setShowLoader(false));
  };

  const handleGenerateRecipeWithImage = (file: UploadFile) => {
    setShowLoader(true);
    const userFileLocation = `${file.name}`;
    const imageRef = ref(storage, userFileLocation);

    void file.originFileObj
      ?.arrayBuffer()
      .then((bytes) => {
        if (bytes) {
          void uploadBytes(imageRef, bytes);
          void router.push({
            pathname: "/recipes",
          });
        }
      })
      .catch(() => {
        void messageApi.open({
          type: "error",
          content: "Failed to create a recipe",
        });
      })
      .finally(() => setShowLoader(false));
  };

  return (
    <>
      {contextHolder}
      <Head>
        <title>Back of the fridge</title>
        <meta name="description" content="Make recipes with AI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {showLoader && <LoaderOverlay />}
      <main
        style={{
          display: "flex",
        }}
      >
        <div style={{ flex: 1 }}>
          <IngredientsList onGenerateRecipe={handleGenerateRecipe} />
        </div>
        <OrDivider />
        <div style={{ flex: 1 }}>
          <ImageUploaderMenu onImageSubmit={handleGenerateRecipeWithImage} />
        </div>
      </main>
    </>
  );
};

export default Home;
