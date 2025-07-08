import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useIsUserAuth } from "@/hooks/useIsUserAuth";
import { Link, usePathname } from "@/i18n/navigation";
import { AlignRight, Plus } from "lucide-react";
import AuthBtnsWIthLanguage from "./AuthBtnsWIthLanguage";

const MobileSidebar = () => {
  const headers = [
    { id: 0, name: "Our Products", link: "/products" },
    { id: 1, name: "Categories", link: "/categories" },
    { id: 2, name: "About", link: "/about/coming-soon" },
    { id: 3, name: "Blog", link: "/blog/coming-soon" },
  ];

  const pathname = usePathname();
  const isUserAuth = useIsUserAuth();
  return (
    <Sheet>
      <SheetTrigger>
        <AlignRight />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle hidden />
          <SheetDescription hidden />
          <div className="space-y-10 mt-20 h-full">
            <div>
              <ul>
                {headers.map((item) => {
                  const isActive = pathname === item.link;
                  return (
                    <Link
                      key={item.id}
                      href={item.link}
                      className={isActive ? "font-bold" : "text-black"}
                    >
                      <li className="mb-5">{item.name}</li>
                    </Link>
                  );
                })}
              </ul>
            </div>
            <div className="sticky bottom-0">
              {isUserAuth ? (
                <div className="flex items-center gap-10">
                  <Link href="/add_Product">
                    <Button className="bg-blue-500 rounded-full text-xs cursor-pointer hover:bg-blue-500/80">
                      <Plus />
                      Add Product
                    </Button>
                  </Link>
                </div>
              ) : (
                <AuthBtnsWIthLanguage style="other-page" />
              )}
            </div>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
