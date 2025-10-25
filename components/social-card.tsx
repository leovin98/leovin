import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { IconType } from "react-icons/lib";

const colorVariant: Record<string, string> = {
  instagram: "hover:bg-[#E1306C] hover:text-white",
  linkedin: "hover:bg-[#0077B5] hover:text-white",
  github: "hover:bg-[#000000] hover:text-white",
  mail: "hover:bg-[#FFFFFF] hover:text-black",
  facebook: "hover:bg-[#1877F2] hover:text-white",
  twitter: "hover:bg-[#1DA1F2] hover:text-white",
};

export default function SocialCard({
  href,
  icon,
  variant,
  target,
  rel,
  className,
}: {
  href: string;
  icon: IconType;
  variant?: string;
  target?: string;
  rel?: string;
  className?: string;
}) {
  const hoverClass = variant
    ? colorVariant[variant]
    : "hover:bg-gray-800 hover:text-white";

  return (
    <div className="flex flex-warp">
      <Link
        rel={rel}
        href={href}
        target={target}
        className={cn(
          "animation group bg-foreground text-secondary xs:aspect-square flex h-12 w-24 cursor-pointer items-center justify-center rounded-[2px]",
          hoverClass,
          className
        )}
        aria-label={`Button to ${href}`}
      >
        {React.createElement(icon, {
          className:
            "animation size-5 will-change-transform group-hover:size-6",
        })}
      </Link>
    </div>
  );
}
