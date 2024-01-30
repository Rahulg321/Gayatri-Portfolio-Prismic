import Heading from "@/app/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `MyGoal`.
 */
export type MyGoalProps = SliceComponentProps<Content.MyGoalSlice>;

/**
 * Component for "MyGoal" Slices.
 */
const MyGoal = ({ slice }: MyGoalProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-12"
    >
      <div className="big-container">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex-1">
            <PrismicNextImage field={slice.primary.goal_image} />
          </div>
          <div className="flex-1">
            <Heading size="md" className="mb-2 font-bold">
              {slice.primary.goal_heading}
            </Heading>
            <div className="prose prose-gray md:prose-lg lg:prose-xl prose-headings:mb-0 prose-li:m-0">
              <PrismicRichText field={slice.primary.goal_description} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyGoal;
