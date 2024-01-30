import { ImageField, KeyTextField } from "@prismicio/client";
import React from "react";
import clsx from "clsx";
import formatDateString from "@/lib/formatDate";
import { PrismicNextImage } from "@prismicio/next";
import Image from "next/image";
import GayatriPic from "@/public/gayatriPrismic.jpg";
import CardTag from "./CardTag";

type BlogCardProps = {
  image: ImageField;
  classname?: string;
  title: KeyTextField;
  tags: string[];
  lastPublishedDate: string;
};

const BlogCard = ({
  image,
  title,
  tags,
  lastPublishedDate,
  classname,
}: BlogCardProps) => {
  const formattedDate = formatDateString(lastPublishedDate);

  return (
    <div className="mt-4 flex cursor-pointer flex-col gap-4 rounded-2xl border border-gray-500 px-6 py-4 transition  hover:shadow-xl md:flex-row">
      <div className="aspect-h-2 aspect-w-3 sm:aspect-h-1 sm:aspect-w-1   md:aspect-h-1 md:aspect-w-5 md:basis-1/4">
        <PrismicNextImage field={image} className="cover h-full w-full" />
      </div>
      <div className="flex basis-3/4 flex-col justify-between">
        <div className="flex justify-between">
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
          <span className="text-xs text-gray-600 md:text-sm">
            {formattedDate}
          </span>
        </div>
        <div>
          <span className="text-xl font-bold md:text-4xl">{title}</span>
        </div>
        <div className="flex items-center gap-4">
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

export default BlogCard;
