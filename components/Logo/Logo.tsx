import { cn } from "@/lib/utils";
import WebsiteLogo from "../SVG/Logo";

const Logo = ({ style }: { style: string }) => {
  return (
    <div className="flex items-end gap-2">
      <span
        className={cn(
          "logo-title",
          style === "navbar" ? "text-4xl" : "text-9xl"
        )}
      >
        YallaBuy
      </span>
      <WebsiteLogo
        className={cn(style === "navbar" ? "w-12 h-12" : "w-40 h-40")}
      />
    </div>
  );
};

export default Logo;
