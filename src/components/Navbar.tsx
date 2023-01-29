import {CoffeeOutlined, DatabaseFilled, QuestionOutlined, TeamOutlined} from "@ant-design/icons";
import Link from "next/link";
import React from "react";

export const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="logo-cntr">
        <img src="logo2.png" alt="logo" />
      </div>
      <div style={{height: '20px'}}></div>
      <div className="navbar__header">content</div>
      <Link className="navbar__item" href="/">
        <div className="navbar__item__icon">
          <CoffeeOutlined />
        </div>
        Home</Link>
      <Link className="navbar__item" href="/recipes">
        <div className="navbar__item__icon">
          <DatabaseFilled />
        </div>
        Recipes</Link>
      <div style={{height: '10px'}}></div>
      <div className="navbar__header">about</div>
      <Link className="navbar__item" href="/recipes">
        <div className="navbar__item__icon">
          <QuestionOutlined />
        </div>
        How it works</Link>
      <Link className="navbar__item" href="/recipes">
        <div className="navbar__item__icon">
          <TeamOutlined />
        </div>
        About Us</Link>
    </nav>
  );
};
