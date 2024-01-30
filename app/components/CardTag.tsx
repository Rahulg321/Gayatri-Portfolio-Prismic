import React from "react";
import clsx from "clsx";

type CardTagProps = {
  classname?: string;
};

const CardTag = ({ classname }: CardTagProps) => {
  return (
    <div className={clsx("rounded-3xl px-2 py-1 text-sm", classname)}>
      CardTag
    </div>
  );
};

export default CardTag;
