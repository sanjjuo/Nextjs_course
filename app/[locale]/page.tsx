"use client";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import Navbar from "@/components/common/Navbar/navbar";
import Logo from "@/components/Logo/Logo";

const Page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const t = useTranslations("WelcomePage");

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push("/products");
    }, 500);
  };

  return (
    <div className="app-color">
      <Navbar type="welcome-navbar" />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="flex rtl:flex-row-reverse items-end gap-5 home-text font-bold capitalize">
          {t("title")}
          <Logo style="welcome_page" />
        </h1>
        <p className="text-lg font-bold text-gray-600 mt-2">{t("about")}</p>
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="app-btn"
          disabled={isLoading}
          onClick={handleClick}
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <Loader className="animate-spin" /> {t("button-content.content1")}
            </span>
          ) : (
            <span>{t("button-content.content2")}</span>
          )}
        </motion.button>
      </div>
    </div>
  );
};

export default Page;
