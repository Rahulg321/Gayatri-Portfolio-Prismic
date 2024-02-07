import React from "react";
import SocialMediaIcon from "./SocialMediaIcon";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GiCircleClaws } from "react-icons/gi";
import { PrismicNextLink } from "@prismicio/next";
import { createClient } from "@/prismicio";
import { SiUpwork } from "react-icons/si";

const Footer = async () => {
  const client = createClient();
  const socialLinks = await client.getSingle("socialmedialinks");
  return (
    <footer className="bg-primary py-8 text-secondary">
      <div className="big-container">
        <div className="flex flex-col justify-start border-b-2 pb-2 sm:flex-row sm:justify-between md:items-center">
          <div className="justify-start">
            <span className="text-2xl font-bold">Gayatri Gupta</span>
            <div className="flex gap-4">
              <span>Blog</span>
              <span className="">Testimonials</span>
              <span className="">Contact</span>
              <span>About</span>
            </div>
          </div>
        </div>

        <div className="mt-2 flex flex-col justify-between sm:flex-row">
          <div>
            <span> &#169; All rights reserved</span>
          </div>
          <div className="mt-2 flex gap-4 md:m-0">
            <PrismicNextLink field={socialLinks.data.linkedinprofilelink}>
              <SocialMediaIcon MediaIcon={FaLinkedin} />
            </PrismicNextLink>
            <PrismicNextLink field={socialLinks.data.instagram_link}>
              <SocialMediaIcon MediaIcon={FaInstagram} />
            </PrismicNextLink>
            <PrismicNextLink field={socialLinks.data.upworkprofilelink}>
              <SocialMediaIcon MediaIcon={SiUpwork} />
            </PrismicNextLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
