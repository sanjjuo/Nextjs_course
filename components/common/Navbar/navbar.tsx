"use client";
import Logo from "@/components/Logo/Logo";
import { useIsUserAuth } from "@/hooks/useIsUserAuth";
import AuthBtnsWIthLanguage from "./AuthBtnsWIthLanguage";
import ProfileDropDown from "./ProfileDropDown";
import { routing } from "@/i18n/routing";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, usePathname } from "@/i18n/navigation";

const locale = routing.locales[0];
const headers = [
  { id: 0, name: "Our Products", link: `/${locale}/products` },
  { id: 1, name: "Categories", link: `/${locale}/categories` },
  { id: 2, name: "About", link: `/${locale}/about/coming-soon` },
  { id: 3, name: "Blog", link: `/${locale}/blog/coming-soon` },
];

const Navbar = ({ type }: { type: string }) => {
  const pathname = usePathname();
  const isUserAuth = useIsUserAuth();

  return (
    <div className="navbar_footer_color sticky top-0 z-50">
      {type === "other-navbar" ? (
        <div className="navbar-padding flex items-center justify-between p-5">
          <Link href="/">
            <span className="cursor-pointer">
              <Logo style="navbar" />
            </span>
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
          {isUserAuth ? (
            <div className="flex items-center gap-10">
              <Link href="/add_Product">
                <Button className="bg-blue-500 rounded-full text-xs cursor-pointer hover:bg-blue-500/80">
                  <Plus />
                  Add Product
                </Button>
              </Link>
              <ProfileDropDown />
            </div>
          ) : (
            <AuthBtnsWIthLanguage style="other-page" />
          )}
        </div>
      ) : (
        <AuthBtnsWIthLanguage style="welcome-page" />
      )}
    </div>
  );
};

export default Navbar;
