import React from "react";
import Heading from "./Heading";
import { KeyTextField } from "@prismicio/client";
import classes from "./HeroSection.module.css";
import clsx from "clsx";

type HeroSectionProps = {
  mainHeading: KeyTextField;
  tagLine?: KeyTextField;
  classname?: string;
};

const HeroSection = ({ mainHeading, tagLine, classname }: HeroSectionProps) => {
  return (
    <section
      className={clsx(
        "flex flex-col items-center justify-center bg-primary ",
        classes.backgroundContainer,
        classname,
      )}
    >
      <div className="big-container ">
        <Heading className="text-center text-secondary">{mainHeading}</Heading>
        <div className="text-center">
          <span className="text-secondary">{tagLine}</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
