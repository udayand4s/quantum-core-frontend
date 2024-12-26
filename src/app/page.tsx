import { Header } from "./components/Header";
import { HeroBanner } from "./components/HeroBanner";
import { WorldMapDemo } from "./components/WorldMapDemo";

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
          and unlocking new possibilities.</div>
        </div>
    
      </div>
      <div className="">
        <WorldMapDemo />
      </div>
    </div>
  );
}
