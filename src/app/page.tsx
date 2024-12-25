import { Header } from "./components/Header";
import { HeroBanner } from "./components/HeroBanner";

export default function Home() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-black flex flex-col items-center">
      <div className="my-5 text-white">
        <Header />
        
      </div>
      <div className="w-full ">
        <HeroBanner />
      </div>
    </div>
  );
}
