import Image from "next/image";
import * as motion from "motion/react-client";

import { Instagram } from "@/components/ui/icons";

import image from "@/images/instagram-image.jpg";

export function CambridgeInstagram() {
  return (
    <motion.section
      className="space-y-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-h2 leading-tight">Cambridge on Instagram</h3>

      <a
        href="https://www.instagram.com/cambridgeuniversity/"
        className="block"
        aria-label="See more of Cambridge's places and people by following us on Instagram."
      >
        <Image src={image} alt="" aria-hidden="true" className="w-full" />
      </a>

      <div className="flex gap-4">
        <p>{`The Jerwood Library, Trinity Hall, at night. Find out how to submit your own photo for the Cambridge Bookshop's charity calendar. See more of Cambridge's places and people by following us on Instagram.`}</p>

        <Instagram width={36} height={40} className="shrink-0" />
      </div>
    </motion.section>
  );
}
