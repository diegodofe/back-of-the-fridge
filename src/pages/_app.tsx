import {useAutoAnimate} from "@formkit/auto-animate/react";
import {type AppType} from "next/dist/shared/lib/utils";
import type {ReactNode} from "react";
import {Navbar} from "../components/Navbar";
import "../styles/globals.css";

const Layout = ({children}: {children: ReactNode;}) => {

  const [ref] = useAutoAnimate<HTMLElement>();

  return (
    <div style={{display: "flex", minHeight: "100vh", minWidth: "100vw"}}>
      <Navbar />
      <main ref={ref} style={{width: "100%"}}>{children}</main>
    </div>
  );
};

const MyApp: AppType = ({Component, pageProps}) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
