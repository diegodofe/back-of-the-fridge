import { type AppType } from "next/dist/shared/lib/utils";
import type { ReactNode } from "react";
import { Navbar } from "../components/Navbar";
import "../styles/globals.css";

export function ImageUploaderMenu() {
  return (
    <div className="flex-1 p-8">
      <h1>Upload another image</h1>
    </div>
  );
}

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <Navbar />
      <main className="flex-2 p-8">{children}</main>
      <ImageUploaderMenu />
    </div>
  );
};

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
