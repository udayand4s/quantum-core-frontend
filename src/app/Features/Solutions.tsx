import { CarouselSpacing } from "./Carouseldemo";

export function Solutions() {
  return (
    <div className="w-full flex items-center justify-between px-8">
      {/* Left Section: Join Us Text */}
      <div className="text-left">
        <div className="text-6xl font-bold">Unlocking Tomorrow,<br/> Today</div>
        <div className="py-2 text-2xl font-medium">Invest in the Future of Computing.<br/> 
          Join QuantumCore to be at the forefront of the next<br/> technological revolution
          and drive innovation across<br/> your organization."</div>
      </div>

      {/* Right Section: Carousel */}
      <div className="w-1/3">
        <CarouselSpacing />
      </div>
    </div>
  );
}
