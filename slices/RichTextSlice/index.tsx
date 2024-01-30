import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

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
    <div>
      <PrismicRichText field={slice.primary.main_content} />
    </div>
  );
};

export default RichTextSlice;
