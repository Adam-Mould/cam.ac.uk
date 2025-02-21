import Image from "next/image";
import * as motion from "motion/react-client";

import heroImage from "@/images/motorsport-scholarship.jpg";

export function PageHero() {
  return (
    <section className="relative md:flex md:min-h-[calc(100dvh-227px)] md:max-w-full md:items-center md:py-[10vw]">
      <Image
        src={heroImage}
        alt=""
        priority
        sizes="100vw"
        className="w-full md:pointer-events-none md:absolute md:z-0 md:h-full md:select-none md:object-cover md:object-[50%_10%]"
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
        viewport={{ once: true, amount: 0.5 }}
        className="mt-sm space-y-sm container w-full md:relative md:z-10"
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.3 }}
          className="text-h1 inline-block bg-black px-4 py-2 font-bold leading-tight text-white md:bg-white md:px-6 md:py-1 md:text-black"
        >
          Fast track to success
        </motion.h1>

        <motion.div
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.3 }}
          className="block md:max-w-xl md:bg-black md:px-6 md:py-4 md:text-white"
        >
          <p>
            Chris is one of eight Masters in Motorsport scholars{" "}
            <a
              href="https://www.cam.ac.uk/stories/cambridge-motorsports-scholarship?ucam-ref=home-hero"
              className="text-secondary hover:underline"
            >
              who were awarded the scholarship
            </a>{" "}
            from the Royal Academy of Engineering and Sir Lewis Hamilton&apos;s
            charity Mission 44.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
