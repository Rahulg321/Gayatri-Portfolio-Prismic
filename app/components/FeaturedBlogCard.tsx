import { ImageField, KeyTextField } from "@prismicio/client";
import React from "react";
import formatDateString from "@/lib/formatDate";
import { PrismicNextImage } from "@prismicio/next";
import Heading from "./Heading";
import Image from "next/image";
import GayatriPic from "@/public/gayatriPrismic.jpg";

type FeaturedBlogCardProps = {
  image: ImageField;
  classname?: string;
  title: KeyTextField;
  tags: string[];
  lastPublishedDate: string;
};

const FeaturedBlogCard = ({
  image,
  title,
  tags,
  lastPublishedDate,
}: FeaturedBlogCardProps) => {
  const formattedDate = formatDateString(lastPublishedDate);

  return (
    <div className="cursor-pointer rounded-xl border border-primary transition hover:shadow-xl">
      <div className="aspect-h-2 aspect-w-3 sm:aspect-h-1 sm:aspect-w-1 lg:aspect-h-2 lg:aspect-w-3">
        <PrismicNextImage field={image} className="rounded-t-xl object-cover" />
      </div>

      <div className="mt-4  px-4 pb-4">
        <div className="flex items-center justify-between">
          <div>
            {tags.map((tag, index) => (
              <span
                key={index}
                className="rounded-3xl bg-pink-300 px-2 odd:bg-red-300 even:mx-2"
              >
                {tag}
              </span>
            ))}
          </div>
          <div>
            <span className="text-xs text-gray-600 md:text-sm">
              {formattedDate}
            </span>
          </div>
        </div>

        <div className="mt-2">
          <Heading size="sm">{title}</Heading>
        </div>
        <div className="mt-2 flex items-center gap-4">
          <div className="">
            <Image
              src={GayatriPic}
              alt="face forward pic/selfie of gayatri"
              className="h-[40px] w-[40px] rounded-full object-cover"
            />
          </div>

          <span className="font-semibold italic">Gayatri Gupta</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlogCard;
