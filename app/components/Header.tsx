import React from "react";
import { createClient } from "@/prismicio";
import { GiCircleClaws } from "react-icons/gi";
import NavBar from "./Navbar";

export default async function Header() {
  const client = createClient();
  const navbar = await client.getSingle("settings");
  return (
    <div className="top-0 z-[50] max-w-7xl md:fixed md:left-0 md:right-0 md:top-4 md:mx-auto">
      <NavBar settings={navbar} />
    </div>
  );
}
