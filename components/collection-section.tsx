"use client";

import { useState } from "react";
import { posts } from "#site/content";
import { sortPosts } from "@/lib/utils";
import PostCard from "@/components/post-card";
import { PiFilmScriptFill, PiBookmarkSimpleFill } from "react-icons/pi";

export function CollectionSection() {
  const sortedPosts = sortPosts(posts.filter((post) => post.published));

  const [filter, setFilter] = useState("all");

  const filteredPosts =
    filter === "all"
      ? sortedPosts
      : sortedPosts.filter((post) => post.type === filter);

  const displayPosts = filteredPosts;

  const types = [
    { name: "all" },
    {
      name: "writing",
      icon: <PiFilmScriptFill className="size-5 text-primary" />,
    },
    {
      name: "collection",
      icon: <PiBookmarkSimpleFill className="size-5 text-primary" />,
    },
  ];

  // Capitalize type name for display
  const formatType = (name: string) =>
    name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <section>
      <p className="font-bold text-primary uppercase">Collections</p>
      <div className="flex flex-wrap mt-3 gap-2">
        {types.map((type) => (
          <button
            key={type.name}
            onClick={() => setFilter(type.name)}
            className={`flex h-9 items-center justify-center gap-1.5 rounded-full px-4 font-medium bg-foreground text-primary animation
              ${filter === type.name ? "bg-muted" : "hover:bg-muted"}`}
          >
            {type.icon}
            {formatType(type.name)}
          </button>
        ))}
      </div>
      {displayPosts?.length > 0 ? (
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {displayPosts.map((item, index) => (
            <PostCard {...item} key={index} />
          ))}
        </div>
      ) : (
        <p className="mt-3">Nothing to see here yet</p>
      )}
    </section>
  );
}
