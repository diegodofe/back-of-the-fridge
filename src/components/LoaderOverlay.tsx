import Image from "next/image";
import React from "react";

export const LoaderOverlay = () => {
  return (
    <div className="align-center absolute z-10 flex min-h-screen min-w-full justify-center bg-gray-500/40">
      <div className="loader">
        {/* <Image src="./chef.gif" alt="logo" width={100} height={100} /> */}
        <img src="./chef.gif" alt="logo" width={400} height={400} />
      </div>
    </div>
  );
};
