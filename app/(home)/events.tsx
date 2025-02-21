"use client";

import { EVENTS } from "@/constants";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselArrows,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { AngleRight } from "@/components/ui/icons";
import { Card } from "@/components/card";

export function Events() {
  return (
    <section className="py-sm overflow-clip">
      <div className="container">
        <Carousel
          options={{
            active: true,
            align: "start",
            loop: false,
            breakpoints: {
              "(min-width: 1024px)": { active: false },
            },
          }}
        >
          <header className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-h2 leading-tight">Events</h2>
              <p className="mt-2 text-lg md:text-xl">
                Concerts, lectures, sports events, and more
              </p>
            </div>

            <CarouselArrows />
          </header>

          <CarouselContent className="mt-sm">
            {EVENTS.map((event, index) => (
              <CarouselItem key={`event-${index}`}>
                <Card {...event} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-sm flex justify-end">
          <Button asChild size="large">
            <a href="https://www.admin.cam.ac.uk/whatson/?ucam-ref=home-events">
              See more events
              <AngleRight width={13} height={20} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
