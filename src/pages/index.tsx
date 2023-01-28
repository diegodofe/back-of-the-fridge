import {type NextPage} from "next";
import Head from "next/head";
import IngredientsList from "../components/IngredientsList/IngredientsList";
import {ImageUploaderMenu} from "../components/ImageUploaderMenu";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Back of the fridge</title>
        <meta name="description" content="Make recipes with AI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{backgroundColor: 'red'}} className="flex">
        <h4>My Ingredients</h4>
        <div style={{height: '50px'}}></div>
        <IngredientsList />
        <ImageUploaderMenu />
      </main>
    </>
  );
};

export default Home;
