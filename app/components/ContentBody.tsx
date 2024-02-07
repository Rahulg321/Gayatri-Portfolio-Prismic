import { Content } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import Heading from "./Heading";
import HeroSection from "./HeroSection";

export default function ContentBody({
  page,
}: {
  page: Content.BlogpostDocument;
}) {
  return (
    <>
      <HeroSection mainHeading={page.data.title} classname="min-h-[70vh]" />
      <article className="mt-4">
        <div className="narrow-container">
          <div className="prose prose-gray md:prose-lg lg:prose-xl  prose-li:m-0">
            <SliceZone slices={page.data.slices} components={components} />
          </div>
        </div>
      </article>
    </>
  );
}
