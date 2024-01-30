import Heading from "@/app/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `MyMission`.
 */
export type MyMissionProps = SliceComponentProps<Content.MyMissionSlice>;

/**
 * Component for "MyMission" Slices.
 */
const MyMission = ({ slice }: MyMissionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-12"
    >
      <div className="big-container">
        <div className="flex flex-col-reverse gap-4 md:flex-row">
          <div className="flex-1 text-balance">
            <Heading size="md" className="mb-2">
              {slice.primary.mission_heading}
            </Heading>
            <div className="prose prose-gray md:prose-lg lg:prose-xl prose-headings:mb-0">
              <PrismicRichText field={slice.primary.mission_statement} />
            </div>
          </div>
          <div className="flex-1">
            <PrismicNextImage
              field={slice.primary.mission_image}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyMission;
