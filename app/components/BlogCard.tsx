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
  smallDescription: KeyTextField;
};

const BlogCard = ({
  image,
  title,
  classname,
  smallDescription,
}: BlogCardProps) => {
  return (
    <div className="cursor-pointer gap-4 bg-gray-200 transition  ">
      <div className="aspect-h-1 aspect-w-1 relative md:aspect-h-3 md:aspect-w-4">
        <PrismicNextImage field={image} fill className="cover h-full w-full" />
      </div>
      <div className="px-6 py-8">
        <span className="text-3xl font-extrabold">{title}</span>
        <span className="my-4 block">{smallDescription}</span>
        <span className="block text-xl font-bold text-blue-600">Read More</span>
      </div>
    </div>
  );
};

export default BlogCard;
