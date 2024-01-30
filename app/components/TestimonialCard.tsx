import React from "react";
import { ImageField, KeyTextField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SiUpwork } from "react-icons/si";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

type TestimonialCardProps = {
  image: ImageField;
  classname?: string;
  name: KeyTextField;
  position: KeyTextField;
  review: KeyTextField;
};

const TestimonialCard = ({
  image,
  name,
  position,
  review,
}: TestimonialCardProps) => {
  return (
    <div className="rounded-2xl p-4 shadow-xl">
      <div className="aspect-h-1 aspect-w-1 mx-auto">
        <PrismicNextImage field={image} className="rounded-full object-cover" />
      </div>
      <div>
        <div className="my-4 text-center">
          <span className=" heading block text-2xl font-extrabold">{name}</span>
          <span className="font-bold italic">{position}</span>
        </div>
        <div className="text-pretty text-center">
          <span>{review}</span>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-center gap-4 text-3xl">
        <SiUpwork />
        <FaLinkedin />
      </div>
    </div>
  );
};

export default TestimonialCard;
