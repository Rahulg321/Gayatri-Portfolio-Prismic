import React from "react";

import { createClient } from "@/prismicio";
import Link from "next/link";
import BlogCard from "./BlogCard";

const BlogContentIndexSection = async () => {
  //   const result = await (async () => {
  //     return new Promise((resolve) =>
  //       setTimeout(() => resolve("Promise resolved after 3 seconds"), 3000),
  //     );
  //   })();
  const client = createClient();
  const blogPosts = await client.getAllByType("blogpost");
  return (
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
      </div>
    </div>
  );
};

export default BlogContentIndexSection;
