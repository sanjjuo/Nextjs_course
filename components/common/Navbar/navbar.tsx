"use client";
import Logo from "@/components/Logo/Logo";
import { Button } from "@/components/ui/button";
import { useIsUserAuth } from "@/hooks/useIsUserAuth";
import { Link, usePathname } from "@/i18n/navigation";
import { Plus } from "lucide-react";
import AuthBtnsWIthLanguage from "./AuthBtnsWIthLanguage";
import MobileSidebar from "./MobileSidebar";
import ProfileDropDown from "./ProfileDropDown";

const headers = [
  { id: 0, name: "Our Products", link: "/products" },
  { id: 1, name: "Categories", link: "/categories" },
  { id: 2, name: "About", link: "/about/coming-soon" },
  { id: 3, name: "Blog", link: "/blog/coming-soon" },
];

const Navbar = () => {
  const pathname = usePathname();
  const isUserAuth = useIsUserAuth();

  return (
    <div className="navbar_footer_color navbar-padding rounded-xl sticky top-3 z-5 lg:navbar-padding flex items-center justify-between p-5">
      <Link href="/">
        <span className="cursor-pointer">
          <Logo style="navbar" />
        </span>
      </Link>
      <div>
        <ul className="hidden lg:flex items-center gap-5">
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
      <div className="flex items-center gap-2">
        {isUserAuth ? (
          <div className="hidden lg:flex items-center gap-10">
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
        <div className="lg:hidden flex items-center gap-5">
          {isUserAuth && <ProfileDropDown />}
          <MobileSidebar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
