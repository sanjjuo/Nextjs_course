import { cn } from "@/lib/utils";
import WebsiteLogo from "../SVG/Logo";

const Logo = ({ style }: { style: string }) => {
  return (
    <div className="flex items-end gap-2">
      <span
        className={cn(
          "logo-title",
          style === "navbar" ? "text-3xl" : "text-3xl lg:text-9xl"
        )}
      >
        YallaBuy
      </span>
      <WebsiteLogo
        className={cn(
          style === "navbar" ? "w-10 h-10" : "w-10 h-10 lg:w-40 lg:h-40"
        )}
      />
    </div>
  );
};

export default Logo;
