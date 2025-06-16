"use client";
import { ArrowBigLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <div className="app-color h-screen p-40">
      <div
        onClick={handleBack}
        className="flex items-center cursor-pointer hover:text-gray-800"
      >
        <ArrowBigLeft /> Back
      </div>
      <div className="flex items-center justify-center">{children}</div>
    </div>
  );
};

export default AuthLayout;
