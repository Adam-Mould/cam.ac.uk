"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function Video() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.9, 1, 1, 0.9],
  );

  return (
    <div ref={ref} className="container">
      <motion.div className="relative aspect-video" style={{ scale }}>
        <iframe
          className="absolute left-0 top-0 h-full w-full"
          width="560"
          height="340"
          title="Our world-leading researchers are exploring how AI can benefit society."
          src="https://www.youtube-nocookie.com/embed/HFM9Mzsx5O0?wmode=opaque&amp;controls=1&amp;rel=0&amp;autohide=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.cam.ac.uk"
          name="Our world-leading researchers are exploring how AI can benefit society."
          allowFullScreen
          loading="lazy"
        >
          {`Video of Our world-leading researchers are exploring how AI can benefit society.`}
        </iframe>
      </motion.div>
    </div>
  );
}
