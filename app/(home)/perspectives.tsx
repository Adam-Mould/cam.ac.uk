import * as motion from "motion/react-client";

import { YouTube } from "@/components/ui/icons";

export function StudentPerspectives() {
  return (
    <motion.section
      className="space-y-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-h2 leading-tight">Student perspectives</h3>
      <div className="relative aspect-video">
        <iframe
          className="absolute left-0 top-0 h-full w-full"
          width="560"
          height="340"
          title="POV: Attend a Cambridge Foundation Year Interview"
          src="https://www.youtube-nocookie.com/embed/GJHLSsDtUDE?wmode=opaque&amp;controls=1&amp;rel=0&amp;autohide=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.cam.ac.uk"
          name="POV: Attend a Cambridge Foundation Year Interview"
          allowFullScreen
        >
          {`Video of POV: Attend a Cambridge Foundation Year Interview`}
        </iframe>
      </div>

      <div className="flex gap-4">
        <p>{`History student Ami resits a Foundation Year interview to give applicants an idea of what to expect. The course is a stepping stone to undergraduate study in the Arts, Humanities and Social Sciences at Cambridge.`}</p>

        <YouTube width={36} height={32} className="shrink-0" />
      </div>
    </motion.section>
  );
}
