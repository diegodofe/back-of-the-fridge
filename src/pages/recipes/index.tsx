import { type NextPage } from "next";
import Head from "next/head";

const Recipes: NextPage = () => {
  return (
    <>
      <Head>
        <title>Recipes</title>
        <meta name="description" content="Make recipes with AI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col">
        <h3 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Recipes page!
        </h3>
      </main>
    </>
  );
};

export default Recipes;
