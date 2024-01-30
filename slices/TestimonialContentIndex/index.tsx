import TestimonialCard from "@/app/components/TestimonialCard";
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TestimonialContentIndex`.
 */
export type TestimonialContentIndexProps =
  SliceComponentProps<Content.TestimonialContentIndexSlice>;

/**
 * Component for "TestimonialContentIndex" Slices.
 */
const TestimonialContentIndex = async ({
  slice,
}: TestimonialContentIndexProps) => {
  const client = createClient();
  const testimonials = await client.getAllByType("testimonials");
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-12"
    >
      <div className="big-container">
        <div className="grid grid-cols-1  gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <TestimonialCard
              key={index}
              image={item.data.person_image}
              classname=""
              name={item.data.name}
              position={item.data.person_designation}
              review={item.data.review_text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialContentIndex;
