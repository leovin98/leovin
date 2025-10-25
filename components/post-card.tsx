import React from "react";
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/utils";
import { PiFilmScriptFill, PiBookmarkSimpleFill } from "react-icons/pi";

export default function PostCard({
  slug,
  title,
  date,
  type,
  image,
}: {
  slug: string;
  title: string;
  date: string;
  type: string;
  image?: string;
}) {
  return (
    <Link href={slug}>
      <div className="group">
        <div className="flex h-64 flex-col rounded-xl p-1 transition-colors duration-200 ease-out border border-foreground shadow-none group-hover:bg-foreground">
          <div className="relative flex h-full w-full items-center justify-center gap-2 rounded-lg border border-foreground bg-background">
            <div className="relative h-full w-full items-center justify-center rounded-lg bg-foreground group-hover:bg-foreground shadow-none overflow-hidden">
              {image ? (
                <Image
                  src={image!}
                  alt={`${title}`}
                  fill
                  className="object-cover aspect-auto h-full w-full"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center rounded-lg bg-background">
                  {type == "collection" ? (
                    <PiBookmarkSimpleFill className="size-12 text-secondary" />
                  ) : (
                    <PiFilmScriptFill className="size-12 text-secondary" />
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-center gap-0.5 p-2 font-medium">
            <div className="flex w-full items-center justify-between">
              <p className="text-primary truncate max-w-60">{title}</p>
              <p>
                {type == "collection" ? (
                  <PiBookmarkSimpleFill className="size-5" />
                ) : (
                  <PiFilmScriptFill className="size-5" />
                )}
              </p>
            </div>
            <p className="text-bright text-sm">{formatDate(date)}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
