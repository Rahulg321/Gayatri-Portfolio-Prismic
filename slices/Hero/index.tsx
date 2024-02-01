import Heading from "@/app/components/Heading";
import HeroSection from "@/app/components/HeroSection";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <HeroSection
      mainHeading={slice.primary.first_name}
      tagLine={slice.primary.tag_line}
      classname="md:min-h-screen min-h-[70vh]"
    />
  );
};

export default Hero;
