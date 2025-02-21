"use client";

import React, { ForwardedRef, forwardRef, useRef, useState } from "react";
import { MENU } from "@/constants";
import { useClickAway, useLockBodyScroll } from "@uidotdev/usehooks";
import { AnimatePresence, motion } from "motion/react";

import { cn } from "@/lib/utils";

import { Button } from "./ui/button";

export function SiteMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const buttonRef = useRef<HTMLButtonElement>(null);

  const ref = useClickAway((event) => {
    if (buttonRef.current && buttonRef.current.contains(event.target as Node)) {
      return; // Ignore clicks on the button
    }
    setIsOpen(false);
  });

  return (
    <motion.nav initial="closed" animate={isOpen ? "open" : "closed"}>
      <Button
        ref={buttonRef}
        type="button"
        variant="ghost"
        size="icon"
        aria-label="Site menu"
        aria-controls="site-menu"
        aria-expanded={isOpen ? "true" : "false"}
        onClick={() => setIsOpen(!isOpen)}
        className={cn("relative z-20", isOpen && "hover:text-black")}
      >
        <MenuIcon className="size-6" />
      </Button>

      <AnimatePresence>{isOpen && <Menu ref={ref} />}</AnimatePresence>
    </motion.nav>
  );
}

const Menu = forwardRef((props, ref) => {
  useLockBodyScroll();

  return (
    <motion.nav
      ref={ref as ForwardedRef<HTMLDivElement>}
      initial="closed"
      animate="open"
      exit="closed"
      variants={{
        open: { x: 0 },
        closed: { x: "100%" },
      }}
      transition={{ duration: 0.2, ease: "easeIn" }}
      id="site-menu"
      className="bg-primary max-w-100 pt-18 fixed right-0 top-0 z-10 h-dvh w-full text-black"
      {...props}
    >
      <motion.ul
        className="h-full space-y-2 overflow-auto px-8 py-4"
        variants={{
          open: {
            transition: { staggerChildren: 0.05, delayChildren: 0.15 },
          },
          closed: {
            transition: { delayChildren: 0.2 },
          },
        }}
      >
        {MENU.map((item, index) => (
          <motion.li
            key={`site-menu-item-${index}`}
            variants={{
              open: { y: 0, opacity: 1 },
              closed: { y: 50, opacity: 0 },
            }}
            transition={{ ease: "easeOut" }}
          >
            <a
              href={item.url}
              className="block text-lg hover:underline md:text-xl"
            >
              {item.text}
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
});
Menu.displayName = "Menu";

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="currentColor"
        strokeLinecap="round"
        variants={{
          closed: { d: "M 2 3.5 L 21 3.5" },
          open: { d: "M 3.5 19.5 L 19.5 3.5" },
        }}
      />
      <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="currentColor"
        strokeLinecap="round"
        d="M 2 11.5 L 21 11.5"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="currentColor"
        strokeLinecap="round"
        variants={{
          closed: { d: "M 2 19.5 L 21 19.5" },
          open: { d: "M 3.5 3.5 L 19.5 19.5" },
        }}
      />
    </svg>
  );
}
