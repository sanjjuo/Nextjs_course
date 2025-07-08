"use clinet";
import Coming_Soon_Icon from "@/components/SVG/Coming_Soon_Icon";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import React from "react";

const Coming_Soon_Component = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh]">
      <Coming_Soon_Icon className="w-60 h-60" />
      <p className="text-4xl font-bold mb-3">Page under construction</p>
      <Link href="/">
        <Button className="app-color cursor-pointer">Go back to Home</Button>
      </Link>
    </div>
  );
};

export default Coming_Soon_Component;
