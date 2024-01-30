import Heading from "@/app/components/Heading";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `AboutHero`.
 */
export type AboutHeroProps = SliceComponentProps<Content.AboutHeroSlice>;

/**
 * Component for "AboutHero" Slices.
 */
const AboutHero = ({ slice }: AboutHeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex min-h-[80vh] flex-col items-center justify-center bg-primary"
    >
      <Heading className="text-secondary">{slice.primary.heading}</Heading>
      <span className="text-secondary">{slice.primary.about_tagline}</span>
    </section>
  );
};

export default AboutHero;
