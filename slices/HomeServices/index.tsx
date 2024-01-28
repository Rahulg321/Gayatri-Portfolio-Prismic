import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `HomeServices`.
 */
export type HomeServicesProps = SliceComponentProps<Content.HomeServicesSlice>;

/**
 * Component for "HomeServices" Slices.
 */
const HomeServices = ({ slice }: HomeServicesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for home_services (variation: {slice.variation})
      Slices
    </section>
  );
};

export default HomeServices;
