import React from "react";

export const LoaderOverlay = () => {
  return (
    <div className="align-center absolute z-10 flex min-h-screen min-w-full justify-center bg-gray-500/40">
      <p className="m-auto">loading...</p>
    </div>
  );
};
