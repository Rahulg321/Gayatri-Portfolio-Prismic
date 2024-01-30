import FeaturedBlogCard from "@/app/components/FeaturedBlogCard";
import Heading from "@/app/components/Heading";
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Link from "next/link";

export type BlogFeaturedArticlesProps =
  SliceComponentProps<Content.BlogFeaturedArticlesSlice>;

const BlogFeaturedArticles = async ({ slice }: BlogFeaturedArticlesProps) => {
  const client = createClient();
  const featuredBlogs = await client.getAllByType("featuredblogpost");

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-12"
    >
      <div className="big-container">
        <Heading as="h2" size="md">
          Featured Articles
        </Heading>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {featuredBlogs.map((item, index) => (
            <Link href={`/featuredblogs/${item.uid}`}>
              <FeaturedBlogCard
                key={index}
                title={item.data.title}
                image={item.data.featured_image}
                tags={item.tags}
                lastPublishedDate={item.last_publication_date}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogFeaturedArticles;
