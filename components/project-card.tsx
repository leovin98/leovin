import React from "react";
import { IconType } from "react-icons/lib";

export default function ProjectCard({
  link,
  icon,
  title,
  description,
}: {
  link: string;
  icon: IconType;
  title: string;
  description: string;
}) {
  return (
    <a target="_blank" href={link} className="group">
      <div className="flex h-64 flex-col rounded-xl p-1 transition-colors duration-200 ease-out border border-foreground shadow-none group-hover:bg-foreground">
        <div className="relative flex h-full w-full items-center justify-center gap-2 rounded-lg border border-foreground bg-background">
          <div className="absolute top-1/2 left-1/2 flex h-full translate-x-[-50%] translate-y-[-50%] gap-32">
            <span className="h-full border-l border-dashed border-foreground"></span>
            <span className="h-full border-l border-dashed border-foreground"></span>
          </div>
          <div className="absolute top-1/2 left-1/2 flex w-full translate-x-[-50%] translate-y-[-50%] flex-col gap-24">
            <span className="w-full border-t border-dashed border-foreground"></span>
            <span className="w-full border-t border-dashed border-foreground"></span>
          </div>
          <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-foreground group-hover:bg-foreground shadow-none">
            <p>
              {React.createElement(icon, {
                className:
                  "anim size-8 will-change-transform group-hover:size-9",
              })}
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-0.5 p-2 font-medium">
          <p className="text-primary">{title}</p>
          <p className="text-bright text-sm">{description}</p>
        </div>
      </div>
    </a>
  );
}
