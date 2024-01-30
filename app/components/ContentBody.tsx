import { Content } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import Heading from "./Heading";

export default function ContentBody({
  page,
}: {
  page: Content.BlogpostDocument | Content.FeaturedblogpostDocument;
}) {
  return (
    <>
      <section className="flex min-h-[60vh] flex-col items-center justify-center bg-primary text-secondary">
        <Heading>{page.data.title}</Heading>
      </section>
      <article>
        <div className="narrow-container">
          <div className="prose prose-gray md:prose-lg lg:prose-xl  prose-li:m-0">
            <SliceZone slices={page.data.slices} components={components} />
          </div>
        </div>
      </article>
    </>
  );
}
