import {
  CoffeeOutlined,
  DatabaseFilled,
  QuestionOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import {useAutoAnimate} from "@formkit/auto-animate/react";
import Link from "next/link";
import React from "react";
import useListenRecipes from "../hooks/useListenRecipes";
import AboutUsOverlay from "./AboutUsOverlay";
import HowItWorks from "./HowItWorks";

export const Navbar = () => {
  const [howModalOpen, setHowModalOpen] = React.useState(false);
  const [aboutModalOpen, setAboutModalOpen] = React.useState(false);
  const {recipes} = useListenRecipes();
  const [ref] = useAutoAnimate<HTMLElement>();

  const hasRecipes = recipes.length > 0;

  const handleOpenHowModal = () => {
    console.log("open how modal");
    setHowModalOpen(true);
  };

  const handleOpenAboutModal = () => {
    console.log("open about modal");
    setAboutModalOpen(true);
  };

  return (
    <React.Fragment>
      <AboutUsOverlay open={aboutModalOpen} setOpen={setAboutModalOpen} />
      <HowItWorks open={howModalOpen} setOpen={setHowModalOpen} />
      <nav className="navbar">
        <div className="logo-cntr">
          <img src="logo2.png" alt="logo" />
        </div>
        <div style={{height: "20px"}}></div>
        <div className="navbar__header">content</div>
        <Link className="navbar__item" href="/">
          <div className="navbar__item__icon">
            <CoffeeOutlined />
          </div>
          Home
        </Link>
        <div ref={ref}>
          {hasRecipes && (
            <Link className="navbar__item" href="/recipes">
              <div className="navbar__item__icon">
                <DatabaseFilled />
              </div>
              Recipes
            </Link>
          )}
        </div>
        <div style={{height: "10px"}}></div>
        <div className="navbar__header">about</div>
        {/* <div onClick={handleOpenHowModal} className="navbar__item">
          <div className="navbar__item__icon">
            <QuestionOutlined />
          </div>
          How it works
        </div> */}
        <div onClick={handleOpenAboutModal} className="navbar__item">
          <div className="navbar__item__icon">
            <TeamOutlined />
          </div>
          About us
        </div>
      </nav>
    </React.Fragment>
  );
};
