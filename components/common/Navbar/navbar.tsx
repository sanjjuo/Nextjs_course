"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";
import { Button } from "@/components/ui/button";

const headers = [
  { id: 0, name: "Our Products", link: "/products" },
  { id: 1, name: "Categories", link: "/categories" },
  { id: 2, name: "About", link: "/about" },
  { id: 3, name: "Blog", link: "/blog" },
  { id: 4, name: "Profile", link: "/profile" },
];

const Navbar = ({ type }: { type: string }) => {
  const pathname = usePathname();
  return (
    <div className="navbar_footer_color sticky top-0 z-50">
      {type === "other-navbar" ? (
        <div className="navbar-padding flex items-center justify-between p-5">
          <Link href="/">
            <h1 className="text-2xl font-bold app-logo-text-color cursor-pointer">
              Centrepoint Outlet
            </h1>
          </Link>
          <div>
            <ul className="flex items-center gap-5">
              {headers.map((item) => {
                const isActive = pathname === item.link;
                return (
                  <Link
                    key={item.id}
                    href={item.link}
                    className={
                      isActive ? "font-bold app-logo-text-color" : "text-black"
                    }
                  >
                    <li>{item.name}</li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-end gap-5 app-color p-5">
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
      )}
    </div>
  );
};

export default Navbar;
