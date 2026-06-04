import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { Search, Eye, ShoppingCart, CheckCircle2, Star, Clock, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/oportunidades")({
  head: () => ({
    meta: [
      { title: "Oportunidades en Google — LocalSEOBooker" },
      { name: "description", content: "Catálogo de oportunidades SEO local: alcance claro, precio cerrado, sin sorpresas." },
      { property: "og:title", content: "Oportunidades en Google — LocalSEOBooker" },
      { property: "og:description", content: "Catálogo de oportunidades SEO local listas para contratar." },
    ],
  }),
  component: OportunidadesPage,
});

const catalogTabs = ["Catálogo", "SEO Local", "Google Maps", "Reseñas", "Anuncios", "Contenido", "Más"];
const popularChips = ["Ficha Google", "Reseñas Google", "SEO Local"];

const shopCategories = [
  { title: "Ficha de Google", img: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=600&auto=format&fit=crop" },
  { title: "Google Maps", img: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&auto=format&fit=crop" },
  { title: "Reseñas y Reputación", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&auto=format&fit=crop" },
  { title: "Posicionamiento Web", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop" },
];

const socialSolutions = [
  { title: "Diseño de Redes Sociales", img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&auto=format&fit=crop" },
  { title: "Gestión de Anuncios Locales", img: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&auto=format&fit=crop", highlight: true },
  { title: "Vídeo para Negocios", img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&auto=format&fit=crop" },
];

const webSolutions = [
  { title: "Web Móvil y Diseño", img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&auto=format&fit=crop" },
  { title: "Constructores y CMS", img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&auto=format&fit=crop" },
  { title: "Ecommerce Local", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&auto=format&fit=crop" },
  { title: "Contenido para Web", img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&auto=format&fit=crop" },
];

const projects = [
  { title: "Optimización completa de Ficha Google My Business", price: "Desde 80€", delivery: "2 días", author: "Carlos M.", rating: 5.0, reviews: 2594, img: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&auto=format&fit=crop" },
  { title: "Campaña de Reseñas Reales con Automatización", price: "Desde 120€", delivery: "3 días", author: "Lucía R.", rating: 5.0, reviews: 2900, img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&auto=format&fit=crop" },
  { title: "Auditoría SEO Local y Plan de Acción 30 días", price: "Desde 150€", delivery: "2 días", author: "Andrés Z.", rating: 4.9, reviews: 1207, img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop" },
  { title: "Posicionamiento Top 3 en Google Maps", price: "Desde 199€", delivery: "5 días", author: "Ignacio G.", rating: 4.8, reviews: 894, img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&auto=format&fit=crop" },
  { title: "Landing Page Local que convierte", price: "Desde 250€", delivery: "5 días", author: "Marta D.", rating: 4.9, reviews: 1465, img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&auto=format&fit=crop" },
  { title: "Citas y Directorios Locales (NAP)", price: "Desde 90€", delivery: "3 días", author: "Hernán G.", rating: 4.8, reviews: 566, img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&auto=format&fit=crop" },
  { title: "Google Ads Local — Setup + 30 días", price: "Desde 180€", delivery: "2 días", author: "Sergio P.", rating: 5.0, reviews: 2593, img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop" },
  { title: "Pack Contenidos SEO para tu Web", price: "Desde 140€", delivery: "4 días", author: "Vero T.", rating: 4.9, reviews: 4582, img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&auto=format&fit=crop" },
];

const browseCategories = {
  "SEO Local": ["Ficha Google", "Google Maps", "Citas NAP", "Auditoría SEO", "Schema Local", "Keyword Local"],
  "Reseñas": ["Captación Reseñas", "Gestión de Reputación", "Respuesta a Reseñas", "Encuestas NPS"],
  "Anuncios": ["Google Ads Local", "Meta Ads Local", "Remarketing", "Landing Ads"],
  "Web & Contenido": ["Landing Local", "Blog SEO", "Optimización on-page", "Velocidad WPO"],
};

export default function OportunidadesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <div className="mx-auto max-w-[1280px] px-6 py-6">
        {/* Tabs */}
        <div className="mb-6 flex flex-wrap items-center gap-6 border-b border-border pb-3 text-sm">
          {catalogTabs.map((t, i) => (
            <button key={t} className={`pb-2 ${i === 0 ? "border-b-2 border-foreground font-semibold text-foreground" : "text-foreground/70 hover:text-foreground"}`}>
              {t}
            </button>
          ))}
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden rounded-2xl bg-[#0f3d2e] p-10 text-white">
          <div className="relative z-10 max-w-xl">
            <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/80">Oportunidades en Google™</div>
            <h1 className="text-5xl font-bold leading-tight">
              Alcance claro.<br />Precio cerrado.<br />Sin sorpresas.
            </h1>
            <p className="mt-5 max-w-md text-sm text-white/80">
              Resuelve lo más urgente con nuestro catálogo. Explora y contrata servicios predefinidos en pocos clics.
            </p>
            <div className="mt-6 flex items-center gap-2 rounded-full bg-white p-1.5 pl-5 shadow-lg">
              <Search className="h-4 w-4 text-foreground/60" />
              <input
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-foreground/50 focus:outline-none"
                placeholder='prueba "ficha google" o "reseñas"'
              />
              <button className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground">Buscar</button>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-white/70">Populares:</span>
              {popularChips.map((c) => (
                <span key={c} className="rounded-full border border-white/30 bg-white/10 px-3 py-1">{c}</span>
              ))}
            </div>
          </div>
          <div className="pointer-events-none absolute -right-10 top-0 hidden h-full w-[55%] md:block">
            <img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=900&auto=format&fit=crop"
              alt=""
              className="h-full w-full object-cover opacity-90"
              style={{ maskImage: "linear-gradient(to left, black 60%, transparent)" }}
            />
          </div>
        </section>

        {/* Shop by category */}
        <section className="mt-12">
          <h2 className="mb-5 text-2xl font-bold">Compra por categoría</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {shopCategories.map((c) => (
              <a key={c.title} href="#" className="group overflow-hidden rounded-xl border border-border bg-card transition hover:shadow-lg">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={c.img} alt={c.title} className="h-full w-full object-cover transition group-hover:scale-105" />
                </div>
                <div className="p-4 text-sm font-semibold">{c.title}</div>
              </a>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="mt-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-2xl font-bold">Cómo funciona</h2>
            <div className="space-y-6">
              {[
                { icon: Eye, title: "Explora", desc: "Encuentra el tipo de trabajo que necesitas, claramente definido y listo para empezar." },
                { icon: ShoppingCart, title: "Contrata", desc: "El trabajo comienza en cuanto contratas y compartes tus requisitos." },
                { icon: CheckCircle2, title: "Aprueba", desc: "Recibe tu proyecto en el plazo acordado. Revisa, aprueba y paga." },
              ].map((s) => (
                <div key={s.title} className="flex gap-4">
                  <s.icon className="mt-1 h-5 w-5 text-foreground/70" />
                  <div>
                    <div className="font-semibold">{s.title}</div>
                    <div className="mt-1 text-sm text-foreground/70">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&auto=format&fit=crop" alt="" className="h-64 w-full rounded-xl object-cover" />
            <div className="absolute -bottom-6 right-4 w-72 rounded-xl border border-border bg-card p-5 shadow-xl">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-foreground/70">Precio del proyecto</span><span className="font-semibold">100€</span></div>
                <div className="flex justify-between"><span className="text-foreground/70">Tiempo de entrega</span><span>1 día</span></div>
                <div className="flex justify-between"><span className="text-foreground/70">Revisiones</span><span>Ilimitadas</span></div>
                <div className="flex justify-between"><span className="text-foreground/70">Informe SEO</span><CheckCircle2 className="h-4 w-4 text-primary" /></div>
                <div className="flex justify-between"><span className="text-foreground/70">Archivos fuente</span><CheckCircle2 className="h-4 w-4 text-primary" /></div>
              </div>
              <button className="mt-4 w-full rounded-full bg-foreground py-2 text-sm font-semibold text-background">Contratar proyecto</button>
            </div>
          </div>
        </section>

        {/* Social solutions */}
        <section className="mt-20">
          <div className="mb-5 flex items-end justify-between">
            <h2 className="text-2xl font-bold">Haz crecer tu negocio con redes sociales</h2>
            <a href="#" className="flex items-center gap-1 text-sm font-semibold text-primary">Ver todo <ChevronRight className="h-4 w-4" /></a>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {socialSolutions.map((s) => (
              <a key={s.title} href="#" className="group overflow-hidden rounded-xl border border-border bg-card hover:shadow-lg">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={s.img} alt={s.title} className="h-full w-full object-cover transition group-hover:scale-105" />
                </div>
                <div className={`p-4 text-sm font-semibold ${s.highlight ? "text-primary" : ""}`}>{s.title}</div>
              </a>
            ))}
          </div>
        </section>

        {/* Web solutions */}
        <section className="mt-14">
          <div className="mb-5 flex items-end justify-between">
            <h2 className="text-2xl font-bold">Soluciones web que atraen más clientes</h2>
            <a href="#" className="flex items-center gap-1 text-sm font-semibold text-primary">Ver todo <ChevronRight className="h-4 w-4" /></a>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {webSolutions.map((s) => (
              <a key={s.title} href="#" className="group overflow-hidden rounded-xl border border-border bg-card hover:shadow-lg">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={s.img} alt={s.title} className="h-full w-full object-cover transition group-hover:scale-105" />
                </div>
                <div className="p-4 text-sm font-semibold">{s.title}</div>
              </a>
            ))}
          </div>
        </section>

        {/* Inspired projects */}
        <section className="mt-20">
          <h2 className="mb-5 text-2xl font-bold">Inspírate con proyectos como estos</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {projects.map((p) => (
              <a key={p.title} href="#" className="group overflow-hidden rounded-xl border border-border bg-card hover:shadow-lg">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.title} className="h-full w-full object-cover transition group-hover:scale-105" />
                </div>
                <div className="space-y-2 p-3 text-xs">
                  <div className="line-clamp-2 text-sm font-medium text-foreground">{p.title}</div>
                  <div className="flex items-center justify-between text-foreground/70">
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {p.delivery}</span>
                    <span className="font-semibold text-foreground">{p.price}</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-border pt-2">
                    <div className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-[10px] font-bold text-primary">{p.author.charAt(0)}</span>
                      <span className="text-foreground/80">{p.author}</span>
                    </div>
                    <span className="flex items-center gap-1 text-foreground/70">
                      <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                      {p.rating} <span className="text-foreground/50">({p.reviews})</span>
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                    Top Local
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Browse all */}
        <section className="mt-20">
          <h2 className="mb-5 text-2xl font-bold">Explora todas las categorías</h2>
          <div className="flex gap-6 border-b border-border text-sm">
            {Object.keys(browseCategories).map((k, i) => (
              <button key={k} className={`pb-3 ${i === 0 ? "border-b-2 border-foreground font-semibold" : "text-foreground/70"}`}>{k}</button>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 text-sm md:grid-cols-4">
            {browseCategories["SEO Local"].map((c) => (
              <a key={c} href="#" className="text-primary hover:underline">{c}</a>
            ))}
          </div>
        </section>
      </div>

      <footer className="mt-20 bg-foreground py-12 text-background">
        <div className="mx-auto max-w-[1280px] px-6 text-sm">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <div className="mb-3 font-semibold">Para Empresas</div>
              <ul className="space-y-2 text-background/70">
                <li>Cómo contratar</li><li>Catálogo</li><li>Casos de éxito</li>
              </ul>
            </div>
            <div>
              <div className="mb-3 font-semibold">Para Profesionales</div>
              <ul className="space-y-2 text-background/70">
                <li>Cómo trabajar</li><li>Contratos directos</li><li>Recursos</li>
              </ul>
            </div>
            <div>
              <div className="mb-3 font-semibold">Recursos</div>
              <ul className="space-y-2 text-background/70">
                <li>Ayuda y soporte</li><li>Casos de éxito</li><li>Guías SEO</li>
              </ul>
            </div>
            <div>
              <div className="mb-3 font-semibold">Compañía</div>
              <ul className="space-y-2 text-background/70">
                <li>Sobre nosotros</li><li>Liderazgo</li><li>Carreras</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
