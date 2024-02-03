import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { Suspense } from "react";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("blogs");

  return (
    <>
      <Suspense
        fallback={
          <div className="min-h-screen">
            <p>Loading blog posts...</p>
          </div>
        }
      >
        <SliceZone slices={page.data.slices} components={components} />
      </Suspense>
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("blogs");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
