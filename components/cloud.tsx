"use client";

import React from "react";
import { Button } from "@nextui-org/button";

interface CloudProps {
  className?: string; // Menambahkan className sebagai optional prop
}

const Cloud: React.FC<CloudProps> = ({ className }) => {
  const handleRedirect = () => {
    window.location.href = "https://gpt.sayato.lol"; // Ganti dengan URL yang diinginkan
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
      d="M344.381,143.771C254.765,56.017,102.37,103.776,79.825,227.7c-31.849,4.598-59.138,25.445-72.018,55.076 c-0.016,0.035-0.032,0.07-0.047,0.107c-26.687,61.602,18.784,130.232,85.51,130.232h282.267 c75.246,0,136.463-61.216,136.463-136.462C512,189.241,430.314,123.682,344.381,143.771z M375.537,381.12H93.271 c-69.246,0-84.534-98.263-18.714-119.456c14.753-4.65,43.01-7.348,74.38,21.892c6.464,6.024,16.586,5.667,22.61-0.794 c6.024-6.464,5.668-16.586-0.794-22.61c-17.93-16.712-38.071-27.33-58.484-31.453c22.034-99.077,147.374-131.851,215.247-56.305 c4.189,4.661,10.714,6.451,16.693,4.57c67.272-21.117,135.795,29.374,135.795,99.69 C480.005,334.256,433.141,381.12,375.537,381.12z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Cloud;
