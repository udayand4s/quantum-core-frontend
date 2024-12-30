import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  "/b.webp",
  "/a.webp",
  "/c.webp",
  "/d.webp",
  "/e.webp",
]; 

export function CarouselSpacing() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="relative aspect-square">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
