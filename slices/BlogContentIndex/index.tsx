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
      className=""
    >
      <div className="narrow-container">
        <div className="py-12">
          <Heading size="sm" className="text-center">
            {slice.primary.blog_index_heading}
          </Heading>
          <div className="mt-4 text-center leading-loose">
            <span>{slice.primary.blog_index_subhead}</span>
          </div>
        </div>
      </div>
      <div className="big-container">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((item, index) => (
            <>
              <Link href={`/blogs/${item.uid}`}>
                <BlogCard
                  key={index}
                  title={item.data.title}
                  image={item.data.blog_hero_image}
                  smallDescription={item.data.small_description}
                />
              </Link>
            </>
          ))}
          {blogPosts.map((item, index) => (
            <>
              <Link href={`/blogs/${item.uid}`}>
                <BlogCard
                  key={index}
                  title={item.data.title}
                  image={item.data.blog_hero_image}
                  smallDescription={item.data.small_description}
                />
              </Link>
            </>
          ))}
          {blogPosts.map((item, index) => (
            <>
              <Link href={`/blogs/${item.uid}`}>
                <BlogCard
                  key={index}
                  title={item.data.title}
                  image={item.data.blog_hero_image}
                  smallDescription={item.data.small_description}
                />
              </Link>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogContentIndex;
