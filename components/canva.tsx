"use client";

import React from "react";
import { Button } from "@nextui-org/button";

interface CanvaProps {
  className?: string; // Menambahkan className sebagai optional prop
}

const Canva: React.FC<CanvaProps> = ({ className }) => {
  const handleRedirect = () => {
    window.location.href = "https://mqtt.adan.lat"; // Ganti dengan URL yang diinginkan
  };

  return (
    <div className={`absolute top-4 left-40 z-50 ${className}`}>
      <Button isIconOnly aria-label="Redirect" onClick={handleRedirect}>
        <RedirectIcon />
      </Button>
    </div>
  );
};

const RedirectIcon = () => (
  <svg
  className="size-6"
  viewBox="0 0 512 512"
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
>
  <path d="M427.6 86.4c-42.4-42.4-98.7-65.8-158.7-65.8S152.5 44 110 86.4C67.6 128.8 44.2 185.1 44.2 245.1v74.8c0 8.3 6.7 15 15 15s15-6.7 15-15v-74.8c0-102.6 83.6-186.2 186.2-186.2s186.2 83.6 186.2 186.2c0 39.7-15.7 77-44.2 105.4-27.9 27.9-65.5 43.3-105.4 43.3-39.8 0-77.4-15.4-105.4-43.3-8.3-8.3-15.9-17.3-22.6-27-4.6-6.7-13.8-8.5-20.5-3.9-6.7 4.6-8.5 13.8-3.9 20.5 8 11.6 17.2 22.3 27.3 32.4 36.2 36.2 84.3 56.1 135.2 56.1s99-19.9 135.2-56.1c36.2-36.2 56.1-84.3 56.1-135.2s-19.9-99-56.1-135.2zM212.4 300.5c8.3 8.3 21.8 8.3 30.2 0 8.3-8.3 8.3-21.8 0-30.2l-86.5-86.5c-8.3-8.3-21.8-8.3-30.2 0s-8.3 21.8 0 30.2l86.5 86.5z"/>
</svg>
);

export default Canva;
