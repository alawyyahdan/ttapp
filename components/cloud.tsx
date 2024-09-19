"use client";

import React from "react";
import { Button } from "@nextui-org/button";

interface CloudProps {
  className?: string; // Menambahkan className sebagai optional prop
}

const Cloud: React.FC<CloudProps> = ({ className }) => {
  const handleRedirect = () => {
    window.location.href = "https://cloud.sayato.lol"; // Ganti dengan URL yang diinginkan
  };

  return (
    <div className={`absolute top-4 left-28 z-50 ${className}`}>
      <Button isIconOnly aria-label="Redirect" onClick={handleRedirect}>
        <RedirectIcon />
      </Button>
    </div>
  );
};

const RedirectIcon = () => (
  <svg
    className="size-6"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17,8l-.51,0A6,6,0,0,0,12,6a6,6,0,0,0-5.65,4A4,4,0,1,0,6,18H17A5,5,0,0,0,17,8Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Cloud;
