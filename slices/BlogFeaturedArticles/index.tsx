import FeaturedBlogCard from "@/app/components/FeaturedBlogCard";
import Heading from "@/app/components/Heading";
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Link from "next/link";

export type BlogFeaturedArticlesProps =
  SliceComponentProps<Content.BlogFeaturedArticlesSlice>;

const BlogFeaturedArticles = async ({ slice }: BlogFeaturedArticlesProps) => {
  return null;
};

export default BlogFeaturedArticles;
