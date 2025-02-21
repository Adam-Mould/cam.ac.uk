import { AnchorHTMLAttributes } from "react";
import Image, { StaticImageData } from "next/image";

import { cn } from "@/lib/utils";

import cardAlumni from "@/images/card-alumni.png";
import cardBusiness from "@/images/card-business.jpg";
import cardLibraries from "@/images/card-libraries.jpg";
import cardMuseums from "@/images/card-museums.jpg";
import cardResearch from "@/images/card-research.jpg";
import cardSport from "@/images/card-sport.jpg";

export function Grid() {
  return (
    <div className="py-sm gap-sm group container grid max-w-md sm:max-w-7xl sm:grid-cols-2 sm:gap-0 lg:grid-cols-3">
      <Card
        href="https://www.libraries.cam.ac.uk/?ucam-ref=home-linkbox"
        title="Libraries"
        image={cardLibraries}
        className="[&_div]:group-hover/card:bg-primary"
      />
      <Card
        href="https://www.museums.cam.ac.uk/?ucam-ref=home-linkbox"
        title="Museums"
        image={cardMuseums}
        className="[&_div]:group-hover/card:bg-secondary"
      />
      <Card
        href="https://www.cam.ac.uk/research?ucam-ref=home-linkbox"
        title="Research"
        image={cardResearch}
        className="[&_div]:group-hover/card:bg-primary"
      />
      <Card
        href="https://www.cam.ac.uk/business-and-enterprise?ucam-ref=home-linkbox"
        title="Business and enterprise"
        image={cardBusiness}
        className="[&_div]:group-hover/card:bg-secondary"
      />
      <Card
        href="https://www.alumni.cam.ac.uk/?ucam-ref=home-linkbox"
        title="Alumni"
        image={cardAlumni}
        className="[&_div]:group-hover/card:bg-primary"
      />
      <Card
        href="https://www.sport.cam.ac.uk/?ucam-ref=home-linkbox"
        title="Sport"
        image={cardSport}
        className="[&_div]:group-hover/card:bg-secondary"
      />
    </div>
  );
}

interface CardProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  image: StaticImageData;
}

function Card({ title, image, className, ...props }: CardProps) {
  return (
    <a
      className={cn(
        "group/card peer relative flex aspect-square items-end overflow-clip bg-red-500 p-5 hover:opacity-100 focus-visible:z-10 group-hover:opacity-75 motion-safe:transition-opacity",
        className,
      )}
      {...props}
    >
      <Image
        src={image}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute left-0 top-0 z-0 h-full w-full scale-100 object-cover object-center duration-300 ease-linear group-hover/card:scale-105 motion-safe:transition-transform"
      />

      <div className="relative z-10 block w-full bg-black p-3 text-center text-xl leading-tight text-white motion-safe:transition-colors">
        {title}
      </div>
    </a>
  );
}
