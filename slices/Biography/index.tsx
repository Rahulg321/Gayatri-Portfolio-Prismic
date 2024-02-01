import Heading from "@/app/components/Heading";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import HeroSection from "@/app/components/HeroSection";

/**
 * Props for `AboutHero`.
 */
export type AboutHeroProps = SliceComponentProps<Content.AboutHeroSlice>;

/**
 * Component for "AboutHero" Slices.
 */
const AboutHero = ({ slice }: AboutHeroProps): JSX.Element => {
  return (
    <HeroSection
      mainHeading={slice.primary.heading}
      tagLine={slice.primary.about_tagline}
      classname="min-h-[60vh] md:min-h-[80vh]"
    />
  );
};

export default AboutHero;
