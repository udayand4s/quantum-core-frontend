import Link from "next/link";
import { Header } from "./Features/Header";
import { HeroBanner } from "./Features/HeroBanner";
import { WorldMapDemo } from "./Features/WorldMapDemo";
import { CardDemo } from "./Features/Cards";

export default function Home() {
  return (
    <div className="h-auto w-screen md:w-auto overflow-x-hidden bg-black flex flex-col items-center">
      <div className="my-5 text-white">
        <Header />
        
      </div>
      <div className="w-full ">
        <HeroBanner />
      </div>
      <div>
        <div className="text-6xl text-white font-bold my-4 text-center">
        Pioneering the Quantum Future
        <div className="text-2xl font-medium my-4 text-center">
          Our mission is to empower industries across sectors like healthcare, AI, <br/>
          and finance with unparalleled computational power, driving groundbreaking advancements <br/>
          and unlocking new possibilities. 
          
          </div>
        </div>
      </div>
      <div className="my-2">
        <WorldMapDemo />
      </div>
      <div>
        <CardDemo/>
        <CardDemo/>
        <CardDemo/>
        <CardDemo/>
      </div>
    </div>
  );
}
