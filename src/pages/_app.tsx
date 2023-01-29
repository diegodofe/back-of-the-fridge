import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Spin } from "antd";
import { type AppType } from "next/dist/shared/lib/utils";
import type { ReactNode } from "react";
import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Navbar } from "../components/Navbar";
import { createUser } from "../services/user";
import "../styles/globals.css";
import type { User } from "../types/user";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const UserContext = createContext<User>(undefined!);

const Authenticate = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const storedId = localStorage.getItem("uuid");
    if (!storedId) {
      const newId = uuidv4();
      localStorage.setItem("uuid", newId);
      createUser(newId).finally(() => setUser({ id: newId }));
    } else {
      setUser({ id: storedId });
    }
  }, []);

  if (!user) return <Spin />;

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

const Layout = ({ children }: { children: ReactNode }) => {
  const [ref] = useAutoAnimate<HTMLElement>();

  return (
    <div style={{ display: "flex", minHeight: "100vh", minWidth: "100vw" }}>
      <Navbar />
      <main ref={ref} style={{ width: "100%" }}>
        {children}
      </main>
    </div>
  );
};

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Authenticate>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Authenticate>
  );
};

export default MyApp;
