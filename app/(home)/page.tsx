import dynamic from "next/dynamic";

import { Events } from "./events";
import { Grid } from "./grid";
import { CambridgeInstagram } from "./instagram";
import { News } from "./news";
import { PageHero } from "./page-hero";
import { Pathways } from "./pathways";
import { SocialMedia } from "./social-media";

const Video = dynamic(() => import("./video"));
const StudentPerspectives = dynamic(() => import("./perspectives"));

export default function Home() {
  return (
    <>
      <PageHero />

      <Pathways />

      <Video />

      <Grid />

      <News />

      <Events />

      <div className="py-sm gap-sm container grid md:grid-cols-2">
        <StudentPerspectives />
        <CambridgeInstagram />
      </div>

      <SocialMedia />
    </>
  );
}
