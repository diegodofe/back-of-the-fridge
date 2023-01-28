import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="flex flex-col gap-8 p-8">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/recipes">Recipes</Link>
        </li>
      </ul>
    </nav>
  );
};
