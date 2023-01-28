import { type AppType } from "next/dist/shared/lib/utils";
import Link from "next/link";
import type { ReactNode } from "react";
import "../styles/globals.css";

const Navbar = () => {
  return (
    <nav className="flex flex-col gap-8 p-2">
      <ul>
        <li className="text-white">
          <Link href="/">Home</Link>
        </li>
        <li className="text-white">
          <Link href="/recipes">Recipes</Link>
        </li>
      </ul>
    </nav>
  );
};

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <Navbar />
      <main className="min-w-full p-8">{children}</main>
    </div>
  );
};

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
};

export default MyApp;
