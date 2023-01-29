import { type NextPage } from "next";
import Head from "next/head";
import { RecipeList } from "../../components/RecipeList";

const Recipes: NextPage = () => {
  return (
    <>
      <Head>
        <title>Recipes</title>
        <meta name="description" content="Make recipes with AI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col">
        <h3 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Recipes page!
        </h3>

        <RecipeList />
      </main>
    </>
  );
};

export default Recipes;
