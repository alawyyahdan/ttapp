"use client";

import React, { useState } from "react";

import { Video } from "@/components/background-video";
import { title } from "@/components/primitives";

const ClickToEnter: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [hasEntered, setHasEntered] = useState(false);

  const handleEnter = () => {
    setHasEntered(true);
  };

  return hasEntered ? (
    <>
      <Video />
      {children}
    </>
  ) : (
    <button
      className="flex items-center justify-center h-screen w-full bg-black text-white"
      onClick={handleEnter}
    >
      <h1
        className={title({
          size: "sm",
          class: "animate-[pulse_2s_cubic-bezier(.4,0,.6,1)_infinite]",
        })}
      >
        click to enter...
      </h1>
    </button>
  );
};

export default ClickToEnter;
