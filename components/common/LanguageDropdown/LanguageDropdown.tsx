import ArabFlag from "@/components/SVG/ArabFlag";
import EngFlag from "@/components/SVG/EngFlag";
import RussianFlag from "@/components/SVG/RussianFlag";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useLocale } from "next-intl";
import React from "react";

const LanguageDropdown = () => {
  const languages = routing.locales;
  const defaultLang = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (locale: string) => {
    router.replace(pathname, { locale });
  };

  const LanguageComponent = ({
    name,
    flag,
  }: {
    name: string;
    flag: React.ReactNode;
  }) => {
    return (
      <span className="flex items-center gap-2">
        {flag} {name}
      </span>
    );
  };

  return (
    <Select onValueChange={handleLanguageChange} defaultValue={defaultLang}>
      <SelectTrigger className="w-auto uppercase font-bold tracking-wide focus:!ring-0 border-none shadow-none data-[placeholder]:text-black [&_svg:not([class*='text-'])]:text-black">
        <SelectValue
          placeholder={
            <span className="flex items-center gap-2">
              {defaultLang === "en" ? (
                <EngFlag />
              ) : defaultLang === "ar" ? (
                <ArabFlag />
              ) : (
                <RussianFlag />
              )}
              {defaultLang}
            </span>
          }
        />
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem
            key={lang}
            value={lang}
            className="uppercase tracking-wide font-bold"
          >
            {lang === "en" ? (
              <LanguageComponent name="en" flag={<EngFlag />} />
            ) : lang === "ar" ? (
              <LanguageComponent name="ar" flag={<ArabFlag />} />
            ) : (
              lang === "ru" && (
                <LanguageComponent name="ru" flag={<RussianFlag />} />
              )
            )}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LanguageDropdown;
