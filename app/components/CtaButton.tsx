"use client";

import React from "react";
import { useRouter } from "next/navigation";

type CtaButtonProps = {
  btnText: string;
  path: string;
  classname?: string;
};

const CtaButton = ({ btnText, path, classname }: CtaButtonProps) => {
  const router = useRouter();

  const onClickHandler = () => {
    router.push(path);
  };

  return (
    <button
      onClick={onClickHandler}
      className="rounded bg-gray-200 px-6 py-2 text-primary transition hover:scale-105 hover:bg-gray-300"
    >
      {btnText}
    </button>
  );
};

export default CtaButton;
