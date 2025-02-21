import { AnchorHTMLAttributes } from "react";
import * as motion from "motion/react-client";

import { Button } from "@/components/ui/button";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Tiktok,
  TwitterX,
  YouTube,
} from "@/components/ui/icons";

export function SocialMedia() {
  return (
    <div className="py-sm container">
      <h3 className="text-h2 leading-tight">Follow us</h3>

      <motion.ul
        className="mt-4 flex flex-wrap gap-3 sm:gap-4"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <ButtonLink
          href="https://www.cam.ac.uk/facebook"
          aria-label="Follow us on Facebook"
        >
          <Facebook className="size-8" />
        </ButtonLink>
        <ButtonLink
          href="https://www.cam.ac.uk/instagram"
          aria-label="Follow us on Instagram"
        >
          <Instagram className="size-8" />
        </ButtonLink>
        <ButtonLink
          href="https://www.cam.ac.uk/linkedin"
          aria-label="Follow us on LinkedIn"
        >
          <LinkedIn className="size-8" />
        </ButtonLink>
        <ButtonLink
          href="https://www.cam.ac.uk/tiktok"
          aria-label="Follow us on TikTok"
        >
          <Tiktok className="size-8" />
        </ButtonLink>
        <ButtonLink
          href="https://www.cam.ac.uk/twitter"
          aria-label="Follow us on Twitter/X"
        >
          <TwitterX className="size-8" />
        </ButtonLink>
        <ButtonLink
          href="https://www.cam.ac.uk/youtube"
          aria-label="Follow us on YouTube"
        >
          <YouTube className="size-8" />
        </ButtonLink>
      </motion.ul>
    </div>
  );
}

function ButtonLink({
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <motion.li
      variants={{
        hidden: { scale: 0 },
        visible: { scale: 1 },
      }}
      whileHover={{ scale: 1.2, zIndex: 10 }}
    >
      <Button asChild variant="ghost" size="icon">
        <a target="_blank" rel="noopener" {...props}>
          {children}
        </a>
      </Button>
    </motion.li>
  );
}
