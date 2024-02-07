import LoadingSpinner from "@/app/components/LoadingSpinner";
import TestimonialCard from "@/app/components/TestimonialCard";
import TestimonialIndexSection from "@/app/components/TestimonialIndexSection";
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { Suspense } from "react";

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
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-12"
    >
      <Suspense
        fallback={
          <div className="narrow-container flex justify-center">
            <LoadingSpinner />
          </div>
        }
      >
        <TestimonialIndexSection />
      </Suspense>
    </section>
  );
};

export default TestimonialContentIndex;
