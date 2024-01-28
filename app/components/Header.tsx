import React from "react";
import { createClient } from "@/prismicio";
import { GiCircleClaws } from "react-icons/gi";
import NavBar from "./Navbar";

export default async function Header() {
  const client = createClient();
  const navbar = await client.getSingle("settings");
  return (
    <div className="top-0 z-[50] bg-background  md:sticky border-b-2 border-primary">
      <NavBar settings={navbar} />
    </div>
  );
}
