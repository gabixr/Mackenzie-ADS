import { Link, useLocation } from "wouter";
import { Hotel } from "lucide-react";

export default function Navbar() {
  const [location] = useLocation();

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2 text-blue-700 font-semibold text-lg no-underline">
            <Hotel size={22} />
            <span>HotelReserva</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm text-gray-600">
            <Link href="/" className={`hover:text-blue-700 transition-colors ${location === "/" ? "text-blue-700 font-medium" : ""}`}>
              Início
            </Link>
            <Link href="/minhas-reservas" className={`hover:text-blue-700 transition-colors ${location === "/minhas-reservas" ? "text-blue-700 font-medium" : ""}`}>
              Minhas Reservas
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
