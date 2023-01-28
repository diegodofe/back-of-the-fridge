import Link from "next/link";
import React from "react";

export const Navbar = () => {

  return (
    <nav className="navbar" style={{maxWidth: '150px'}}>
      <img src="logo.png" alt="logo" />
      <div style={{height: '20px'}}></div>
      <Link className="navbar__item" href="/">Home</Link>
      <Link className="navbar__item" href="/recipes">Recipes</Link>
    </nav >
  );
};
