import { HTMLMotionProps } from "motion/react";
import * as motion from "motion/react-client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Pathways() {
  return (
    <div className="py-sm gap-sm container grid overflow-clip lg:grid-cols-2">
      <Pathway
        className="bg-primary"
        title="Undergraduate"
        learnMore="https://www.undergraduate.study.cam.ac.uk/?ucam-ref=homepage-signpost"
        findCourse="https://www.undergraduate.study.cam.ac.uk/courses?ucam-ref=homepage-signpost"
      />

      <Pathway
        className="bg-secondary [&_a]:focus-visible:ring-primary"
        title="Postgraduate"
        learnMore="https://www.postgraduate.study.cam.ac.uk/?ucam-ref=homepage-signpost"
        findCourse="https://www.postgraduate.study.cam.ac.uk/courses?ucam-ref=homepage-signpost"
      />
    </div>
  );
}

interface PathwayProps extends HTMLMotionProps<"div"> {
  title: string;
  learnMore: string;
  findCourse: string;
}

function Pathway({
  title,
  learnMore,
  findCourse,
  className,
  ...props
}: PathwayProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "flex flex-wrap items-center justify-between gap-4 p-4",
        className,
      )}
      {...props}
    >
      <h2 className="min-w-[134px] text-xl leading-tight xl:text-2xl">
        {title}
      </h2>

      <div className="flex flex-wrap gap-4">
        <Button
          asChild
          size="small"
          className="bg-white/50 text-black hover:bg-white"
        >
          <a href={learnMore}>
            Learn more
            <span className="sr-only">{` about ${title.toLowerCase()} study`}</span>
          </a>
        </Button>

        <Button asChild size="small" className="hover:bg-black">
          <a href={findCourse}>Find your course</a>
        </Button>
      </div>
    </motion.div>
  );
}
