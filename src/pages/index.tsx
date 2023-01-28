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
        <h1 className="tracking-tightsm:text-[5rem] text-5xl font-extrabold">
          Welome to back of the fridge
        </h1>
      </main>
    </>
  );
};

export default Home;
