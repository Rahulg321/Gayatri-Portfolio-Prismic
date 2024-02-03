import CtaButton from "@/app/components/CtaButton";
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
      classname="md:min-h-screen min-h-[80vh]"
    >
      <div className="flex items-center justify-center gap-4 text-center sm:flex-row">
        <CtaButton btnText="Contact" path="/contact" />
        <CtaButton btnText="About me" path="/about" />
      </div>
    </HeroSection>
  );
};

export default Hero;
