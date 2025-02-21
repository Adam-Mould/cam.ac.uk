"use client";

import Image from "next/image";
import Link from "next/link";
import { useWindowScroll } from "@uidotdev/usehooks";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { Search } from "@/components/ui/icons";
import { SiteMenu } from "@/components/site-menu";

const MotionLink = motion.create(Link);

export function SiteHeader() {
  const [{ y }] = useWindowScroll();

  const logoWidth = y ? Math.max(260 - y, 210) : 260;

  return (
    <header className="sticky top-0 z-50 overflow-x-clip border-b border-black/10 bg-white px-4 py-6">
      <div className="flex items-center justify-between gap-4">
        <MotionLink
          aria-current="page"
          href="/"
          className="block"
          style={{ width: logoWidth }}
        >
          <Image
            src="/cam-logo.svg"
            alt="University of Cambridge"
            width={300}
            height={62}
            className="w-full"
          />
        </MotionLink>

        <div className="flex gap-4">
          <Button asChild variant="ghost" size="icon" aria-label="Site search">
            <Link href="https://search.cam.ac.uk/web">
              <Search className="size-6" />
            </Link>
          </Button>

          <SiteMenu />
        </div>
      </div>
    </header>
  );
}
