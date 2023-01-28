import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Back of the fridge</title>
        <meta name="description" content="Make recipes with AI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Welome to back of the fridge
        </h1>
      </main>
    </>
  );
};

export default Home;
