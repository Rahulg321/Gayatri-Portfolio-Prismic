import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `DescriptionSlice`.
 */
export type DescriptionSliceProps =
  SliceComponentProps<Content.DescriptionSliceSlice>;

/**
 * Component for "DescriptionSlice" Slices.
 */
const DescriptionSlice = ({ slice }: DescriptionSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for description_slice (variation: {slice.variation})
      Slices
    </section>
  );
};

export default DescriptionSlice;
