import axios from "axios";
import { type NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { ImageUploaderMenu } from "../components/ImageUploaderMenu";
import IngredientsList from "../components/IngredientsList/IngredientsList";
import { LoaderOverlay } from "../components/LoaderOverlay";
import OrDivider from "../components/OrDivider";
import type { Recipe } from "../types/recipe";
import { message } from "antd";

const url =
  "https://mchacksbackend.vercel.app/cohereAdapterController/generatesampleprompt";

const Home: NextPage = () => {
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
          void router.push({
            pathname: "/recipes",
            query: { ...createdRecipe },
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
          <ImageUploaderMenu />
        </div>
      </main>
    </>
  );
};

export default Home;
