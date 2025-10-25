import rehypePrettyCode from "rehype-pretty-code";
import { defineConfig, defineCollection, s } from "velite";

const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split("/").slice(1).join("/"),
});

const posts = defineCollection({
  name: "Post",
  pattern: "collection/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(99),
      image: s.string().max(99).optional(),
      description: s.string().max(999).optional(),
      date: s.isodate(),
      published: s.boolean().default(true),
      tags: s.array(s.string()).optional(),
      type: s.string().max(99),
      body: s.mdx(),
    })
    .transform(computedFields),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { posts },
  mdx: {
    rehypePlugins: [[rehypePrettyCode, { theme: "one-dark-pro" }]],
    remarkPlugins: [],
  },
});
