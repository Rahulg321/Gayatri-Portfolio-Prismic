import Heading from "@/app/components/Heading";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

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
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex min-h-[80vh] flex-col items-center justify-center bg-primary"
    >
      <Heading className="text-secondary">{slice.primary.heading}</Heading>
      <span className="text-secondary">{slice.primary.tag_line}</span>
    </section>
  );
};

export default TestimonialHero;
