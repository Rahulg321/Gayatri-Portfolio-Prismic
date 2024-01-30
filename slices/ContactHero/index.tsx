import Heading from "@/app/components/Heading";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ContactHero`.
 */
export type ContactHeroProps = SliceComponentProps<Content.ContactHeroSlice>;

/**
 * Component for "ContactHero" Slices.
 */
const ContactHero = ({ slice }: ContactHeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex min-h-[80vh] flex-col items-center justify-center bg-primary"
    >
      <Heading className="text-secondary">{slice.primary.heading}</Heading>
      <span className="text-secondary">{slice.primary.tagline}</span>
    </section>
  );
};

export default ContactHero;
