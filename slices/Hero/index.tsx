import Heading from "@/app/components/Heading";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="big-container">
        <Heading as="h1" size="lg">
          {slice.primary.first_name}
          {slice.primary.last_name}
        </Heading>
      </div>
    </section>
  );
};

export default Hero;
