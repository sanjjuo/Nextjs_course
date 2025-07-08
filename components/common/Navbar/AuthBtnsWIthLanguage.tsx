import { Button } from "@/components/ui/button";
import React from "react";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";

const AuthBtnsWIthLanguage = ({ style }: { style: string }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-end gap-5",
        style === "other-page" ? "bg-transparent p-0" : "app-color p-5"
      )}
    >
      <div className="space-x-2">
        <Link href="/login">
          <Button className="bg-blue-500 hover:bg-blue-500/70 font-bold tracking-wider cursor-pointer">
            Sign in
          </Button>
        </Link>
        <Link href="/register">
          <Button
            variant="outline"
            className="border border-blue-500 hover:bg-blue-500 hover:text-white bg-transparent text-blue-500 font-bold tracking-wider cursor-pointer"
          >
            Sign up
          </Button>
        </Link>
      </div>
      <LanguageDropdown />
    </div>
  );
};

export default AuthBtnsWIthLanguage;
