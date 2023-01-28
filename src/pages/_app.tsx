import {type AppType} from "next/dist/shared/lib/utils";
import type {ReactNode} from "react";
import {Navbar} from "../components/Navbar";
import "../styles/globals.css";

const Layout = ({children}: {children: ReactNode;}) => {
  return (
    <div className="flex min-h-screen">
      <Navbar />
      <main className=''>{children}</main>
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
