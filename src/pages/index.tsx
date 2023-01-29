import {type NextPage} from "next";
import Head from "next/head";
import IngredientsList from "../components/IngredientsList/IngredientsList";
import {ImageUploaderMenu} from "../components/ImageUploaderMenu";
import OrDivider from "../components/OrDivider";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Back of the fridge</title>
        <meta name="description" content="Make recipes with AI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        style={{
          display: "flex",
        }}
      >
        <div style={{flex: 1}}>
          <IngredientsList />
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
