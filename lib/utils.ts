import { Post } from "@/.velite";
import { posts } from "#site/content";
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

export function sortPosts(posts: Array<Post>) {
  return posts.sort((a, b) => {
    if (a.date > b.date) return -1;
    if (a.date < b.date) return 1;
    return 0;
  });
}

/**
 * Returns the previous and next *published* posts relative to the current slug.
 */
export function getAdjacentPosts(currentSlug: string) {
  // Filter only published posts
  const publishedPosts = posts.filter((post) => post.published);

  // Sort posts — example: by date (newest first)
  const sortedPosts = [...publishedPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Find index of current post
  const currentIndex = sortedPosts.findIndex(
    (post) => post.slugAsParams === currentSlug
  );

  if (currentIndex === -1) return { prev: null, next: null };

  const prev = sortedPosts[currentIndex - 1] || null;
  const next = sortedPosts[currentIndex + 1] || null;

  return { prev, next };
}
