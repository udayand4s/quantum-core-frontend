"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function CardDemo({
  title,
  description,
  imageUrl,
}: {
  title: string;
  description: string;
  imageUrl: string;
}) {
  return (
    <div className="max-w-xs w-full group/card">
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-96 rounded-lg shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4"
        )}
      >
        <Image 
          src={imageUrl} 
          alt="Card Image" 
          fill 
          className="object-cover" 
        />
        <div className="absolute w-full h-full top-0 left-0 transition duration-500 group-hover/card:bg-black opacity-50"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          
        </div>
        <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-13"></div>
        <div className="absolute bottom-0 left-0 w-full p-4 rounded-b-md z-10">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50">
            {title}
          </h1>
          <p className="font-normal text-sm text-gray-50 mt-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
