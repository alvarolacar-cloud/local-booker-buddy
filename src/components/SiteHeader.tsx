import { Link } from "@tanstack/react-router";
import { MapPin, HelpCircle, ChevronDown } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="bg-[var(--navy-deep)] text-white">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4">
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center gap-2">
            <MapPin className="h-7 w-7 text-[oklch(0.72_0.2_145)]" strokeWidth={2.5} />
            <span className="text-[22px] font-extrabold tracking-tight">
              Líderes<span className="font-light italic">Maps</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-7 text-[14px] font-medium md:flex">
            <Link to="/oportunidades" className="hover:text-white/80">Sectores</Link>
            <a href="#" className="hover:text-white/80">Ciudades</a>
            <a href="#" className="hover:text-white/80">Análisis</a>
            <a href="#" className="hover:text-white/80">Casos reales</a>
            <a href="#" className="hover:text-white/80">Precios</a>
            <a href="#" className="inline-flex items-center gap-1 hover:text-white/80">Recursos <ChevronDown className="h-3.5 w-3.5" /></a>
          </nav>
        </div>
        <div className="flex items-center gap-4 text-[14px] font-medium">
          <button className="hidden items-center gap-1 hover:text-white/80 md:inline-flex">EUR <span className="text-base">🇪🇸</span></button>
          <button className="hidden hover:text-white/80 md:inline-flex"><HelpCircle className="h-5 w-5" /></button>
          <a href="#" className="hidden hover:text-white/80 md:inline">Regístrate</a>
          <a href="#" className="rounded-md bg-white px-4 py-2 font-semibold text-[var(--navy-deep)] hover:bg-white/90">Solicitar demo</a>
          <a href="#" className="rounded-md border border-white px-4 py-2 font-semibold text-white hover:bg-white/10">Iniciar sesión</a>
        </div>
      </div>
    </header>
  );
}
