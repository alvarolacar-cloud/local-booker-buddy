import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4">
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded bg-primary text-sm font-black text-primary-foreground">L</span>
            <span className="text-lg font-bold tracking-tight">
              Local<span className="text-primary">SEO</span>Booker
            </span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium text-foreground/80 md:flex">
            <Link to="/oportunidades" className="hover:text-primary">Oportunidades en Google</Link>
            <a href="#" className="hover:text-primary">Nuestros Casos de Éxito</a>
            <a href="#" className="hover:text-primary">Cómo Funciona</a>
            <a href="#" className="hover:text-primary">Guias</a>
          </nav>
        </div>
        <div className="flex items-center gap-3 text-sm font-medium">
          <a href="#" className="hidden hover:text-primary md:inline">Iniciar sesión</a>
          <a href="#" className="rounded-full bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90">Registrarse</a>
        </div>
      </div>
    </header>
  );
}
