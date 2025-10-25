import Link from "next/link";
import { posts } from "#site/content";
import { notFound } from "next/navigation";
import { getAdjacentPosts } from "@/lib/utils";
import { PiArrowLeftBold } from "react-icons/pi";
import { MDXContent } from "@/components/mdx-components";
import { CopyLinkButton } from "@/components/copy-button";

/**
 * Define route parameters.
 * Use Awaited<> to ensure compatibility if Next.js changes async behavior again.
 */
interface PostPageParams {
  slug: string[];
}

/**
 * Helper: Find a post based on the slug array.
 * This isolates your lookup logic from the rendering code.
 */
function findPostBySlug(slug: string[]) {
  const slugPath = slug.join("/");
  return posts.find((post) => post.slugAsParams === slugPath);
}

/**
 * Pre-generate all known post paths for static site generation.
 */
export async function generateStaticParams(): Promise<PostPageParams[]> {
  return posts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

/**
 * The main page component.
 * Mark it async to use await params safely.
 */
export default async function PostPage({
  params,
}: {
  params: Promise<PostPageParams>;
}) {
  const { slug } = await params;
  const post = findPostBySlug(slug);

  if (!post || !post.published) notFound();

  const { prev, next } = getAdjacentPosts(post.slugAsParams);

  return (
    <section>
      <div className="mb-16 w-full flex items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-x-2 text-secondary"
        >
          <PiArrowLeftBold className="size-4 group-hover:text-secondary-foreground animation" />
          <p className="text-sm font-medium group-hover:text-secondary-foreground animation">
            Go back
          </p>
        </Link>
        <CopyLinkButton />
      </div>
      <MDXContent code={post.body} />
      <div className="mt-16 pt-16 flex w-full items-center justify-between border-t border-foreground">
        {prev ? (
          <Link
            href={`/collection/${prev.slugAsParams}`}
            className="group flex flex-col items-start gap-1"
          >
            <span className="text-sm text-secondary group-hover:text-secondary-foreground animation">
              Previous
            </span>
            <span className="text-m text-primary truncate max-w-40 group-hover:text-primary-foreground animation">
              {prev.title}
            </span>
          </Link>
        ) : (
          <div></div>
        )}
        {next ? (
          <Link
            href={`/collection/${next.slugAsParams}`}
            className="group flex flex-col items-end gap-1"
          >
            <span className="text-sm text-secondary group-hover:text-secondary-foreground animation">
              Next
            </span>
            <span className="text-m text-primary truncate max-w-40 group-hover:text-primary-foreground animation">
              {next.title}
            </span>
          </Link>
        ) : (
          <div></div>
        )}
      </div>
    </section>
  );
}
