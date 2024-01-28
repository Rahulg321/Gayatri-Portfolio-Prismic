import React from "react";
import SocialMediaIcon from "./SocialMediaIcon";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GiCircleClaws } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className="bg-primary text-secondary py-12">
      <div className="big-container">
        <div className="flex items-center justify-around justify-items-start flex-col md:flex-row  border-b pb-4">
          <div className="flex flex-col gap-2 ">
            <h4 className="font-bold text-2xl mb-2">About</h4>
            <span>Company </span>
            <span>Community</span>
            <span>Careers</span>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-2xl mb-2">Blogs</h4>
            <span>Tech </span>
            <span>Adventure</span>
            <span>Travel</span>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-2xl mb-2">Services</h4>
            <span>Writing </span>
            <span>Drafting</span>
            <span>Case Study</span>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <div className="text-3xl">
                <GiCircleClaws />
              </div>
              <h4 className="font-bold italic text-3xl underline underline-offset-8">
                Gayatri Law Offices
              </h4>
            </div>
            <div className="flex gap-2 mt-6 justify-around">
              <SocialMediaIcon MediaIcon={FaLinkedin} />
              <SocialMediaIcon MediaIcon={FaInstagram} />
              <SocialMediaIcon MediaIcon={FaXTwitter} />
            </div>
          </div>
        </div>
        <div className="text-right mt-4">
          <span>&copy; 2024 Gayatri Law Offices All rights reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
