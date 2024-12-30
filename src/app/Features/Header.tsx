import { Menu } from "./Menu";

export function Header() {
  return (
    <div className="flex items-center justify-start w-full px-16 py-4 bg-black">
      {/* Logo Section */}
      <div className="flex items-center space-x-0 ml-0">
        <img
          src="/logo.webp"
          alt="Logo"
          className="h-16 w-auto"
        />
        <span className="text-white text-xl font-bold ">QuantumCore</span> {/* Company Name */}
      </div>

      {/* Menu Section */}
      <div className="px-8">
        <Menu />
      </div>
    </div>
  );
}
