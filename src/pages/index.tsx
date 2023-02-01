import { message } from "antd";
import axios from "axios";
import { type NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import HowItWorksAlt from "../components/HowItWorksAlt";
import IngredientsOverview from "../components/IngredientsOverview";
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

          void createRecipe(user.id, createdRecipe).then(() => {
            void router.push({
              pathname: "/recipes",
              query: { ...createdRecipe },
            });
          });
        }
      })
      .catch(() => {
        void messageApi.open({
          type: "warning",
          content:
            "Please try again, sometimes it may take a few trys :) (this is a free service)",
        });
      })
      .finally(() => setShowLoader(false));
  };

  // const handleGenerateRecipeWithImage = (ing: string) => {
  //   console.log("Generating recipe..." + ing);

  //   // make sure ing starts with "demo_"
  //   if (!ing.startsWith("demo_")) {
  //     // throw error
  //     void messageApi.open({
  //       type: "error",
  //       content: "Failed to upload image",
  //     });
  //     return;
  //   }
  //   // remove "demo_" from ing
  //   ing = ing.substring(5);

  //   // remove the .png or .jpg from ing if it is at the end
  //   if (ing.endsWith(".png")) {
  //     ing = ing.substring(0, ing.length - 4);
  //   } else if (ing.endsWith(".jpg")) {
  //     ing = ing.substring(0, ing.length - 4);
  //   } else {
  //     // throw error
  //     void messageApi.open({
  //       type: "error",
  //       content: "Failed to upload image",
  //     });
  //     return;
  //   }

  //   // add ing to ingredients
  //   // set the timeout for 2.5 seconds
  //   setShowLoader(true);
  //   setTimeout(() => {
  //     setIngredients([...ingredients, ing]);
  //     setShowLoader(false);
  //   }, 3500);
  // };

  return (
    <>
      {contextHolder}
      <Head>
        <title>Back of the fridge</title>
        <meta name="description" content="Make recipes with AI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {showLoader && <LoaderOverlay />}
      <main className="flex h-full">
        <div className="flex-1 p-12">
          <h2 className="mb-4 text-3xl">Input your ingredients</h2>
          <IngredientsOverview onGenerateRecipe={handleGenerateRecipe} />
        </div>
        <OrDivider />
        <div className="flex-1 p-12">
          {/* <ImageUploaderMenu onImageSubmit={handleGenerateRecipeWithImage} /> */}
          <h2 className="mb-4 text-3xl">How it works</h2>
          <HowItWorksAlt />
        </div>
      </main>
    </>
  );
};

export default Home;
