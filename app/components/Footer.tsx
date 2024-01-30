import React from "react";
import SocialMediaIcon from "./SocialMediaIcon";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GiCircleClaws } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className="bg-primary text-secondary py-8">
      <div className="big-container">
        <div className="border-b-2 md:items-center justify-start pb-2 flex flex-col sm:flex-row sm:justify-between">
          <div className="justify-start">
            <span className="font-bold text-2xl">Gayatri Gupta</span>
            <div className="flex gap-4">
              <span>Blog</span>
              <span className="">Testimonials</span>
              <span className="">Contact</span>
              <span>About</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span>Join my newsletter</span>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Email Address..."
                className="px-2 py-2 border"
              />
              <button className="border-secondary border-2 p-2 ml-2">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="flex mt-2 flex-col sm:flex-row justify-between">
          <div>
            <span> &#169; All rights reserved</span>
          </div>
          <div className="flex gap-4 mt-2 md:m-0">
            <SocialMediaIcon MediaIcon={FaLinkedin} />
            <SocialMediaIcon MediaIcon={FaInstagram} />
            <SocialMediaIcon MediaIcon={FaXTwitter} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
