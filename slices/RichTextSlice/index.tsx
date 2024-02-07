import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type RichTextSliceProps =
  SliceComponentProps<Content.RichTextSliceSlice>;

const RichTextSlice = ({ slice }: RichTextSliceProps): JSX.Element => {
  return (
    <div className="">
      <PrismicRichText field={slice.primary.main_content} />
    </div>
  );
};

export default RichTextSlice;
