import { CarouselSpacing } from "./Carouseldemo";

export function Solutions() {
  return (
    <div className="w-full flex items-center justify-between px-8">
      {/* Left Section: Join Us Text */}
      <div className="text-left">
        <h2 className="text-2xl font-bold">Unlocking Tomorrow, Today</h2>
      </div>

      {/* Right Section: Carousel */}
      <div className="w-2/3">
        <CarouselSpacing />
      </div>
    </div>
  );
}
