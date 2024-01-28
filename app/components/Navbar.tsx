"use client";

import clsx from "clsx";
import React, { useState } from "react";
import { Content, KeyTextField, asLink } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import { MdMenu, MdClose } from "react-icons/md";
import { usePathname } from "next/navigation";

export default function NavBar({
  settings,
}: {
  settings: Content.SettingsDocument;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation">
      <ul className="flex flex-col justify-between px-4 py-6  md:flex-row md:items-center ">
        <div className="flex items-center justify-between">
          <NameLogo name={settings.data.name} />
          <button
            aria-expanded={open}
            aria-label="Open menu"
            className="block p-2 text-2xl text-slate-800 md:hidden"
            onClick={() => setOpen(true)}
          >
            <MdMenu />
          </button>
        </div>
        <div
          className={clsx(
            "fixed bottom-0 left-0 right-0 top-0 z-50 flex flex-col items-end gap-4 bg-slate-50 pr-4 pt-14 transition-transform duration-300 ease-in-out md:hidden",
            open ? "translate-x-0" : "translate-x-[100%]"
          )}
        >
          <button
            aria-label="Close menu"
            aria-expanded={open}
            className="fixed right-4 top-3 block p-2 text-2xl text-slate-800 md:hidden "
            onClick={() => setOpen(false)}
          >
            <MdClose />
          </button>
          {settings.data.navitems.map(({ navlink, navlabel }, index) => (
            <React.Fragment key={navlabel}>
              <li className="first:mt-8">
                <PrismicNextLink
                  className={clsx(
                    "group relative block overflow-hidden rounded px-3 text-3xl font-bold text-slate-900 "
                  )}
                  field={navlink}
                  onClick={() => setOpen(false)}
                  aria-current={
                    pathname.includes(asLink(navlink) as string)
                      ? "page"
                      : undefined
                  }
                >
                  <span className="relative">{navlabel}</span>
                </PrismicNextLink>
              </li>
              {index < settings.data.navitems.length - 1 && (
                <span
                  className="hidden text-4xl font-thin leading-[0] text-slate-400 md:inline"
                  aria-hidden="true"
                >
                  /
                </span>
              )}
            </React.Fragment>
          ))}
          <li>
            <PrismicNextLink
              field={settings.data.cta_link}
              className="px-3 text-3xl font-bold rounded-3xl border-primary border-2"
            >
              <button>{settings.data.cta_label}</button>
            </PrismicNextLink>
          </li>
        </div>
        <DesktopMenu settings={settings} pathname={pathname} />
      </ul>
    </nav>
  );
}

function NameLogo({ name }: { name: KeyTextField }) {
  return (
    <Link
      href="/"
      aria-label="Home page"
      className="text-xl font-extrabold tracking-tighter text-slate-900"
    >
      {name}
    </Link>
  );
}

function DesktopMenu({
  settings,
  pathname,
}: {
  settings: Content.SettingsDocument;
  pathname: string;
}) {
  return (
    <div className="relative z-50 hidden flex-row items-center gap-1 bg-transparent py-0 md:flex">
      {settings.data.navitems.map(({ navlink, navlabel }, index) => (
        <React.Fragment key={navlabel}>
          <li>
            <PrismicNextLink
              className={clsx("text-base font-bold text-slate-900")}
              field={navlink}
              aria-current={
                pathname.includes(asLink(navlink) as string)
                  ? "page"
                  : undefined
              }
            >
              <span className="">{navlabel}</span>
            </PrismicNextLink>
          </li>
        </React.Fragment>
      ))}
      <li>
        <PrismicNextLink
          field={settings.data.cta_link}
          className="px-3 text-xl font-bold rounded-3xl border-primary border-2"
        >
          <button>{settings.data.cta_label}</button>
        </PrismicNextLink>
      </li>
    </div>
  );
}
