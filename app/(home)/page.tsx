import { Events } from "./events";
import { Grid } from "./grid";
import { CambridgeInstagram } from "./instagram";
import { News } from "./news";
import { PageHero } from "./page-hero";
import { Pathways } from "./pathways";
import { StudentPerspectives } from "./perspectives";
import { SocialMedia } from "./social-media";
import { Video } from "./video";

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
