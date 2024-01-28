import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `RichTextSlice`.
 */
export type RichTextSliceProps =
  SliceComponentProps<Content.RichTextSliceSlice>;

/**
 * Component for "RichTextSlice" Slices.
 */
const RichTextSlice = ({ slice }: RichTextSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for rich_text_slice (variation: {slice.variation})
      Slices
    </section>
  );
};

export default RichTextSlice;
