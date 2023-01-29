import axios from "axios";
import {type NextPage} from "next";
import Head from "next/head";
import {useState} from "react";
import {ImageUploaderMenu} from "../components/ImageUploaderMenu";
import IngredientsList from "../components/IngredientsList/IngredientsList";
import {LoaderOverlay} from "../components/LoaderOverlay";
import OrDivider from "../components/OrDivider";

const url = 'https://mchacksbackend.vercel.app/cohereAdapterController/generatesampleprompt';

const Home: NextPage = () => {
  const [showLoader, setShowLoader] = useState<boolean>(false);

  const handleGenerateRecipe = async (ingredients: string[]) => {
    console.log("generate recipe");
    setShowLoader(true);

    // application/json headers
    const res = await axios.post(url, {
      ingredients: ingredients
    });


    if (res.status === 200) {
      setShowLoader(false);
      console.log("success");
      console.log("data");
      console.log(res.data);
      // TODO: Diego
    }
  };

  return (
    <>
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
        <div style={{flex: 1}}>
          <IngredientsList onGenerateRecipe={handleGenerateRecipe} />
        </div>
        <OrDivider />
        <div style={{flex: 1}}>
          <ImageUploaderMenu />
        </div>
      </main>
    </>
  );
};

export default Home;
