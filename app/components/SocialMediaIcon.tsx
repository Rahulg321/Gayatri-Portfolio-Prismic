import React from "react";
import { FaLinkedin } from "react-icons/fa";

type SocialMediaIconProps = {
  MediaIcon: any;
};

const SocialMediaIcon = ({ MediaIcon }: SocialMediaIconProps) => {
  return (
    <div className="">
      <div className="text-2xl">
        <MediaIcon />
      </div>
    </div>
  );
};

export default SocialMediaIcon;
