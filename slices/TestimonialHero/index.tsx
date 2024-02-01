import Heading from "@/app/components/Heading";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import HeroSection from "@/app/components/HeroSection";

/**
 * Props for `TestimonialHero`.
 */
export type TestimonialHeroProps =
  SliceComponentProps<Content.TestimonialHeroSlice>;

/**
 * Component for "TestimonialHero" Slices.
 */
const TestimonialHero = ({ slice }: TestimonialHeroProps): JSX.Element => {
  return (
    <HeroSection
      mainHeading={slice.primary.heading}
      tagLine={slice.primary.tag_line}
      classname="min-h-[60vh] md:min-h-[80vh]"
    />
  );
};

export default TestimonialHero;
