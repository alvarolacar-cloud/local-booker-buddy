import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import {
  Search,
  Zap,
  Wrench,
  Stethoscope,
  Scale,
  Scissors,
  Hammer,
  Car,
  Heart,
  Briefcase,
  Building2,
  PawPrint,
  Check,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import heroPro from "@/assets/hero-pro.jpg";
import cityMadrid from "@/assets/city-madrid.jpg";
import cityBarcelona from "@/assets/city-barcelona.jpg";
import cityValencia from "@/assets/city-valencia.jpg";
import citySevilla from "@/assets/city-sevilla.jpg";
import cityBilbao from "@/assets/city-bilbao.jpg";
import cityMalaga from "@/assets/city-malaga.jpg";
import featuredMadrid from "@/assets/featured-madrid.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Local SEO Booker — Marketplace de oportunidades SEO locales en España" },
      { name: "description", content: "El marketplace líder de oportunidades SEO locales por sector y ciudad en España. Descubre nichos rentables en segundos." },
      { property: "og:title", content: "Local SEO Booker" },
      { property: "og:description", content: "Marketplace de oportunidades SEO locales por sector y ciudad." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const heroTabs = ["Inicio", "Oportunidades", "Todos los Sectores"];

const sectorChips = [
  { label: "Electricistas", slug: "electricistas", Icon: Zap },
  { label: "Fontaneros", slug: "fontaneros", Icon: Wrench },
  { label: "Dentistas", slug: "dentistas", Icon: Stethoscope },
  { label: "Abogados", slug: "abogados", Icon: Scale },
  { label: "Peluquerías", slug: "peluquerias", Icon: Scissors },
  { label: "Reformas", slug: "reformas", Icon: Hammer },
];

const sectorGrid = [
  { name: "Electricistas", slug: "electricistas", Icon: Zap },
  { name: "Fontaneros", slug: "fontaneros", Icon: Wrench },
  { name: "Dentistas", slug: "dentistas", Icon: Stethoscope },
  { name: "Abogados", slug: "abogados", Icon: Scale },
  { name: "Peluquerías", slug: "peluquerias", Icon: Scissors },
  { name: "Reformas", slug: "reformas", Icon: Hammer },
  { name: "Cerrajeros", slug: "cerrajeros", Icon: Briefcase },
  { name: "Talleres", slug: "talleres", Icon: Car },
  { name: "Veterinarios", slug: "veterinarios", Icon: PawPrint },
  { name: "Asesorías", slug: "asesorias", Icon: Building2 },
];

const howStepsCompanies = [
  { title: "Publicar es siempre gratis", desc: "Crea tu búsqueda en segundos y empieza a ver oportunidades locales sin coste.", cta: "Crear búsqueda", featured: true },
  { title: "Analiza nichos y competencia", desc: "Recibe oportunidades con volumen, KDI y CPC estimado por sector y ciudad." },
  { title: "Convierte el tráfico en clientes", desc: "Activa alertas y aparece antes en Google Maps y en el pack local." },
];

const howStepsAgencies = [
  { title: "Encuentra clientes con potencial", desc: "Detecta autónomos y pymes en sectores rentables sin posicionar.", cta: "Explorar leads", featured: true },
  { title: "Presenta informes en minutos", desc: "Exporta CSV con datos de búsqueda, competencia y oportunidades." },
  { title: "Escala tu cartera local", desc: "Centraliza todos tus nichos y ciudades en un único marketplace." },
];

const plans = [
  {
    name: "Free",
    desc: "Para empezar a explorar nichos locales sin compromiso.",
    items: [
      "Búsquedas ilimitadas por sector y ciudad",
      "Acceso a oportunidades destacadas",
      "Datos básicos de volumen y competencia",
      "1 alerta de nuevos nichos",
    ],
    cta: "Empezar gratis",
    featured: false,
  },
  {
    name: "Pro",
    desc: "Para agencias y autónomos que viven del SEO local.",
    items: [
      "Todo lo del plan Free, y además:",
      "KDI y CPC estimado en todas las oportunidades",
      "Alertas ilimitadas y exportación a CSV",
      "Acceso a la API y filtros avanzados",
      "Soporte prioritario por chat",
    ],
    cta: "Probar Pro",
    featured: true,
  },
];

const testimonials = [
  { quote: "Encontramos un nicho de fontaneros en una capital de provincia con cero competencia. En 4 meses captábamos 80 leads/mes.", author: "Sergio M.", role: "Agencia SEO local" },
  { quote: "Local SEO Booker se convirtió en nuestra fuente nº1 para detectar oportunidades antes de pitchear a un cliente.", author: "Laura R.", role: "Consultora freelance" },
  { quote: "Pasamos de 0 a 8.100 visitas/mes en el sector electricistas en Barcelona usando sus datos de KDI.", author: "Daniel P.", role: "CEO, estudio digital" },
  { quote: "El export CSV nos ahorra horas cada semana cuando preparamos auditorías para nuevos clientes.", author: "María L.", role: "Head of SEO" },
  { quote: "Hemos cerrado 3 contratos anuales solo presentando los nichos que vimos aquí. ROI inmediato.", author: "Iván G.", role: "Founder, agencia" },
  { quote: "Para autónomos como yo es oro: sé exactamente en qué sectores moverme antes de invertir en contenido.", author: "Patricia D.", role: "SEO freelance" },
];

const badges = ["Top Marketplace 2026", "Mejor herramienta SEO Local", "Recomendado por agencias", "5 estrellas en Trustpilot", "Premio Innovación Local", "Partner de SEMrush"];

function Index() {
  const [howMode, setHowMode] = useState<"empresas" | "agencias">("empresas");
  const howSteps = howMode === "empresas" ? howStepsCompanies : howStepsAgencies;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Promo strip — Upwork style */}
      <div className="bg-background px-6 pt-5">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-6 rounded-[28px] bg-[linear-gradient(90deg,#f4f3c3_0%,#e6f3c8_45%,#cfe9c3_100%)] px-8 py-4 md:px-10">
          <h4 className="text-base font-medium leading-snug text-foreground md:text-[17px]">
            Deja de perder leads locales. Capta los nichos del top 1% con el plan Pro.
          </h4>
          <a href="#" className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-foreground underline underline-offset-4 hover:text-primary">
            Empezar <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Hero — Upwork dark image card */}
      <section className="bg-background px-6 pt-6">
        <div className="mx-auto max-w-[1280px]">
          <div className="relative overflow-hidden rounded-3xl bg-foreground">
            <img src={heroPro} alt="Profesional SEO" className="absolute inset-0 h-full w-full object-cover object-[70%_center]" />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/55 to-transparent" />
            <div className="relative px-8 py-14 text-white md:px-14 md:py-20">
              <h1 className="max-w-2xl text-[44px] font-bold leading-[1.05] tracking-tight md:text-[64px]">
                Posiciona a la velocidad<br />de tu ambición
              </h1>
              <p className="mt-5 max-w-md text-base text-white/85 md:text-lg">
                Capta clientes que ya te buscan en Google. Detecta los nichos locales más rentables y conviértelos en leads reales.
              </p>

              <div className="mt-8 max-w-xl">
                <div className="flex gap-1 rounded-full bg-white/10 p-1 text-sm font-medium backdrop-blur-sm">
                  {["Soy empresa", "Soy agencia"].map((t, i) => (
                    <button
                      key={t}
                      className={`flex-1 rounded-full px-5 py-2 transition ${
                        i === 0 ? "bg-white text-foreground shadow-sm" : "text-white/85 hover:text-white"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                <div className="mt-3 flex items-center gap-2 rounded-full bg-white py-1.5 pl-5 pr-1.5 shadow-xl">
                  <input
                    className="flex-1 bg-transparent py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground"
                    placeholder="Busca un sector o ciudad (ej. dentistas Valencia)"
                  />
                  <button className="flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                    <Search className="h-4 w-4" /> Buscar
                  </button>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {sectorChips.slice(0, 4).map(({ label, slug }) => (
                    <Link
                      key={label}
                      to="/categoria/$slug"
                      params={{ slug }}
                      className="flex items-center gap-1.5 rounded-full border border-white/30 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm transition hover:border-white hover:bg-white/15"
                    >
                      {label}
                      <svg className="h-3 w-3 opacity-60" viewBox="0 0 20 20" fill="none"><path d="M5.5 7.5l4.5 4.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="py-12">
            <p className="text-center text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">Confían en nosotros más de 12.000 profesionales</p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-12 gap-y-3 text-lg font-semibold text-foreground/40">
              <span className="text-primary">Inboundcycle</span>
              <span className="italic">SEMrush</span>
              <span>Webpositer</span>
              <span className="text-primary">Aukera</span>
              <span>Human Level</span>
              <span>Internet República</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sector grid */}
      <section className="mx-auto max-w-[1280px] px-6 py-10">
        <h2 className="text-[28px] font-semibold tracking-tight md:text-[34px]">Encuentra oportunidades para cada sector</h2>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {sectorGrid.map(({ name, slug, Icon }) => (
            <Link key={name} to="/categoria/$slug" params={{ slug }} className="group flex flex-col gap-6 rounded-xl border border-border bg-card p-5 transition hover:border-primary hover:shadow-[0_8px_24px_-12px_rgba(15,23,42,0.18)]">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/5 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-[15px] font-semibold leading-snug group-hover:text-primary">{name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-[1280px] px-6 py-14">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <h2 className="text-[28px] font-semibold tracking-tight md:text-[34px]">Cómo funciona</h2>
          <div className="flex gap-1 rounded-full border border-border bg-card p-1 text-sm font-medium">
            <button
              onClick={() => setHowMode("empresas")}
              className={`rounded-full px-5 py-1.5 transition ${howMode === "empresas" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}
            >
              Para empresas
            </button>
            <button
              onClick={() => setHowMode("agencias")}
              className={`rounded-full px-5 py-1.5 transition ${howMode === "agencias" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}
            >
              Para agencias
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {howSteps.map((s, i) => (
            <div key={s.title} className="flex flex-col">
              <div className={`relative aspect-[4/3] overflow-hidden rounded-2xl ${i === 0 ? "bg-[linear-gradient(135deg,#e6f3c8_0%,#a8e063_55%,#56ab2f_100%)]" : ""}`}>
                {i === 0 ? (
                  <div className="flex h-full flex-col justify-between p-7">
                    <div className="flex items-center gap-2 text-foreground">
                      <span className="flex h-8 w-8 items-center justify-center rounded bg-foreground text-sm font-black text-primary">L</span>
                      <span className="text-lg font-bold tracking-tight">LocalSEOBooker</span>
                    </div>
                    <button className="self-start rounded-full bg-background px-4 py-2 text-sm font-semibold text-foreground shadow-sm hover:bg-background/90">
                      Empezar ahora
                    </button>
                  </div>
                ) : (
                  <img
                    src={i === 1 ? featuredMadrid : cityBarcelona}
                    alt={s.title}
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
              <h3 className="mt-5 text-[19px] font-semibold">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{s.desc}</p>
              {i === 0 && s.cta && (
                <button className="mt-4 self-start rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                  {s.cta}
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Calculator dark card */}
      <section className="mx-auto max-w-[1280px] px-6 py-10">
        <div className="relative overflow-hidden rounded-3xl bg-foreground text-white">
          <div className="grid gap-10 p-8 md:grid-cols-2 md:items-center md:p-14">
            <div>
              <h3 className="text-[32px] font-semibold leading-tight tracking-tight md:text-[40px]">
                Calcula tu potencial<br />SEO local
              </h3>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/70">
                Estimamos el tráfico, leads e ingresos potenciales según el sector y la ciudad que elijas.
              </p>
              <div className="mt-7 flex items-center gap-2 rounded-full bg-white p-1.5 text-foreground shadow-lg">
                <input
                  className="flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-muted-foreground"
                  placeholder="Qué sector estás considerando, ej. dentistas"
                />
                <button className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                  Siguiente
                </button>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_center,rgba(20,168,0,0.45),transparent_60%)]" />
              <div className="relative w-full max-w-sm rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="text-center text-xs font-semibold uppercase tracking-[0.15em] text-white/70">Estimación de leads/mes</div>
                <svg viewBox="0 0 320 140" className="mt-4 w-full">
                  <defs>
                    <linearGradient id="curveFill" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#56ab2f" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#56ab2f" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M10,110 C70,110 90,40 160,40 C230,40 250,110 310,110 L310,130 L10,130 Z" fill="url(#curveFill)" />
                  <path d="M10,110 C70,110 90,40 160,40 C230,40 250,110 310,110" stroke="#a8e063" strokeWidth="2" fill="none" />
                  <circle cx="60" cy="100" r="4" fill="#a8e063" />
                  <circle cx="160" cy="40" r="5" fill="#fff" stroke="#56ab2f" strokeWidth="2" />
                  <circle cx="260" cy="100" r="4" fill="#a8e063" />
                </svg>
                <div className="mt-2 flex justify-between text-[11px] font-medium text-white/70">
                  <span>Bajo</span>
                  <span className="text-white">Típico</span>
                  <span>Premium</span>
                </div>
                <div className="mt-4 flex justify-between text-sm font-semibold">
                  <span>30/mes</span>
                  <span className="text-primary">142/mes</span>
                  <span>320/mes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1280px] px-6 py-14">
          <div className="text-center">
            <h2 className="text-[28px] font-semibold tracking-tight md:text-[34px]">Elige cómo quieres trabajar</h2>
            <p className="mt-2 text-sm text-muted-foreground">Planes flexibles para autónomos, empresas y agencias.</p>
          </div>
          <div className="mx-auto mt-10 grid max-w-3xl gap-5 md:grid-cols-2">
            {plans.map((p) => (
              <div key={p.name} className={`relative rounded-2xl bg-card p-7 ${p.featured ? "border-2 border-primary shadow-[0_18px_50px_-20px_rgba(20,168,0,0.35)]" : "border border-border"}`}>
                {p.featured && (
                  <span className="absolute right-5 top-5 rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">Popular</span>
                )}
                <h3 className="text-xl font-bold">{p.name}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{p.desc}</p>
                <div className="my-5 h-px bg-border" />
                <p className="text-sm font-semibold">{p.name === "Free" ? "Incluye:" : "Todo lo de Free, más:"}</p>
                <ul className="mt-3 space-y-2.5 text-sm">
                  {p.items.filter((it) => !it.startsWith("Todo lo")).map((it) => (
                    <li key={it} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="leading-snug">{it}</span>
                    </li>
                  ))}
                </ul>
                <button className={`mt-7 w-full rounded-full px-4 py-3 text-sm font-semibold transition ${p.featured ? "bg-primary text-primary-foreground hover:bg-primary/90" : "border border-foreground/80 hover:bg-muted"}`}>
                  {p.cta}
                </button>
              </div>
            ))}
          </div>
          <p className="mt-5 text-center text-sm"><a href="#" className="text-primary underline underline-offset-4 hover:text-primary/80">Comparar todos los planes →</a></p>
        </div>
      </section>

      {/* Testimonials with green wave */}
      <section className="relative overflow-hidden bg-background py-16">
        <svg className="pointer-events-none absolute -left-20 top-1/2 -translate-y-1/2 opacity-80" width="240" height="500" viewBox="0 0 240 500" fill="none">
          <path d="M-40,40 C120,120 -20,240 120,320 C260,400 60,440 -40,500 L-40,40 Z" fill="#a8e063" fillOpacity="0.35" />
          <path d="M-60,80 C100,160 -40,280 100,360 C240,440 40,480 -60,540 L-60,80 Z" fill="#56ab2f" fillOpacity="0.25" />
        </svg>
        <svg className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 rotate-180 opacity-80" width="240" height="500" viewBox="0 0 240 500" fill="none">
          <path d="M-40,40 C120,120 -20,240 120,320 C260,400 60,440 -40,500 L-40,40 Z" fill="#a8e063" fillOpacity="0.35" />
          <path d="M-60,80 C100,160 -40,280 100,360 C240,440 40,480 -60,540 L-60,80 Z" fill="#56ab2f" fillOpacity="0.25" />
        </svg>
        <div className="relative mx-auto max-w-[1280px] px-6">
          <h2 className="text-[28px] font-semibold tracking-tight md:text-[34px]">Resultados reales con Local SEO Booker</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.author} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <p className="text-[15px] leading-relaxed text-foreground/90">"{t.quote}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
                    {t.author.charAt(0)}
                  </span>
                  <div>
                    <div className="text-sm font-bold">{t.author}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Badges ribbon */}
      <section className="bg-background py-14">
        <div className="mx-auto max-w-[1280px] px-6 text-center">
          <h2 className="text-[24px] font-semibold tracking-tight md:text-[28px]">Reconocidos por agencias y autónomos</h2>
          <div className="mt-10 flex flex-wrap items-end justify-center gap-6">
            {badges.map((b, idx) => {
              const accents = ["#1e3a8a", "#0891b2", "#0d9488", "#ea580c", "#a16207", "#15803d"];
              const c = accents[idx % accents.length];
              return (
                <div key={b} className="relative flex w-24 flex-col items-center">
                  <div className="relative flex h-32 w-24 flex-col items-center justify-start rounded-t-[14px] bg-card pt-5 shadow-md ring-1 ring-border">
                    <div className="absolute inset-x-0 top-0 h-2 rounded-t-[14px]" style={{ backgroundColor: c }} />
                    <span className="text-[9px] font-bold uppercase tracking-wider" style={{ color: c }}>Top 2026</span>
                    <span className="mt-1.5 flex h-10 w-10 items-center justify-center rounded-full text-lg font-black text-white" style={{ backgroundColor: c }}>★</span>
                    <span className="mt-1 px-1.5 text-center text-[10px] font-bold leading-tight text-foreground">{b}</span>
                  </div>
                  <div className="flex w-24 justify-between">
                    <div className="h-5 w-[46%] origin-top-right -skew-x-[20deg]" style={{ backgroundColor: c }} />
                    <div className="h-5 w-[46%] origin-top-left skew-x-[20deg]" style={{ backgroundColor: c }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Green CTA strip */}
      <section className="px-6 py-10">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-center gap-5 rounded-2xl bg-primary px-8 py-14 text-center text-primary-foreground">
          <h3 className="text-2xl font-bold md:text-[32px]">Encuentra el nicho local que hará crecer tu negocio</h3>
          <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-foreground hover:bg-white/90">
            Explorar oportunidades
          </a>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-foreground text-white">
        <div className="mx-auto grid max-w-[1280px] gap-8 px-6 py-12 text-sm md:grid-cols-5">
          <div>
            <div className="flex items-center gap-2 font-bold">
              <span className="inline-block h-5 w-5 rounded-sm bg-primary" />
              LocalSEO<span className="text-primary">Booker</span>
            </div>
            <p className="mt-4 text-xs text-white/60">© 2026 Local SEO Booker</p>
          </div>
          {[
            { h: "Buscar", l: ["Oportunidades", "Sectores", "Ciudades", "Tendencias", "Buscar agencia"] },
            { h: "Producto", l: ["Alertas", "Exportar CSV", "API", "Planes"] },
            { h: "Recursos", l: ["Blog", "Podcast", "Guías", "Casos de éxito", "Glosario"] },
            { h: "Empresa", l: ["Sobre nosotros", "Carreras", "Contacto", "Aviso legal", "Privacidad"] },
          ].map((col) => (
            <div key={col.h}>
              <div className="font-semibold">{col.h}</div>
              <ul className="mt-3 space-y-2 text-white/70">
                {col.l.map((i) => (
                  <li key={i}><a href="#" className="hover:text-primary">{i}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}
