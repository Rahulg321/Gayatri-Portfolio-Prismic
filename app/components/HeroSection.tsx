import React from "react";
import Heading from "./Heading";
import { KeyTextField } from "@prismicio/client";
import classes from "./HeroSection.module.css";
import clsx from "clsx";
import CtaButton from "./CtaButton";

type HeroSectionProps = {
  mainHeading: KeyTextField;
  tagLine?: KeyTextField;
  classname?: string;
  children?: React.ReactNode;
};

const HeroSection = ({
  mainHeading,
  tagLine,
  classname,
  children,
}: HeroSectionProps) => {
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
        <div className="my-4 text-center">
          <span className="text-secondary">{tagLine}</span>
        </div>
      </div>
      {children}
    </section>
  );
};

export default HeroSection;
