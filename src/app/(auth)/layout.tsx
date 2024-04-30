"use client";
import React from "react";
import { Toaster } from "react-hot-toast";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      {children}
      <Toaster position="bottom-center" />
    </div>
  );
};

export default layout;
