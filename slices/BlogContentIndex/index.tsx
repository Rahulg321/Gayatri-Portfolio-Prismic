import BlogCard from "@/app/components/BlogCard";
import Heading from "@/app/components/Heading";
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Link from "next/link";

/**
 * Props for `BlogContentIndex`.
 */
export type BlogContentIndexProps =
  SliceComponentProps<Content.BlogContentIndexSlice>;

/**
 * Component for "BlogContentIndex" Slices.
 */
const BlogContentIndex = async ({ slice }: BlogContentIndexProps) => {
  const client = createClient();
  const blogPosts = await client.getAllByType("blogpost");

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-10"
    >
      <div className="big-container">
        <Heading size="md">Latest Articles</Heading>
        {blogPosts.map((item, index) => (
          <>
            <Link href={`/blogs/${item.uid}`}>
              <BlogCard
                key={index}
                title={item.data.title}
                image={item.data.blog_hero_image}
                tags={item.tags}
                lastPublishedDate={item.last_publication_date}
              />
            </Link>
          </>
        ))}
      </div>
    </section>
  );
};

export default BlogContentIndex;
