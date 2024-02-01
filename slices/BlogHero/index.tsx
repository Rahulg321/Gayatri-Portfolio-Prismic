import Heading from "@/app/components/Heading";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import HeroSection from "@/app/components/HeroSection";

/**
 * Props for `BlogHero`.
 */
export type BlogHeroProps = SliceComponentProps<Content.BlogHeroSlice>;

/**
 * Component for "BlogHero" Slices.
 */
const BlogHero = ({ slice }: BlogHeroProps): JSX.Element => {
  return (
    <HeroSection
      mainHeading={slice.primary.heading}
      tagLine={slice.primary.tagline}
      classname="min-h-[60vh] md:min-h-[80vh]"
    />
  );
};

export default BlogHero;
