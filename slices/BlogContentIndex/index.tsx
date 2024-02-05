import BlogCard from "@/app/components/BlogCard";
import BlogContentIndexSection from "@/app/components/BlogContentIndexSection";
import Heading from "@/app/components/Heading";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Suspense } from "react";

export type BlogContentIndexProps =
  SliceComponentProps<Content.BlogContentIndexSlice>;

const BlogContentIndex = async ({ slice }: BlogContentIndexProps) => {
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
      <Suspense
        fallback={
          <div className="narrow-container flex justify-center">
            <LoadingSpinner />
          </div>
        }
      >
        <BlogContentIndexSection />
      </Suspense>
    </section>
  );
};

export default BlogContentIndex;
