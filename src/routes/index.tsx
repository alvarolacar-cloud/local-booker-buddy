import { createFileRoute } from "@tanstack/react-router";
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
  { label: "Electricistas", Icon: Zap },
  { label: "Fontaneros", Icon: Wrench },
  { label: "Dentistas", Icon: Stethoscope },
  { label: "Abogados", Icon: Scale },
  { label: "Peluquerías", Icon: Scissors },
  { label: "Reformas", Icon: Hammer },
];

const sectorGrid = [
  { name: "Electricistas", Icon: Zap },
  { name: "Fontaneros", Icon: Wrench },
  { name: "Dentistas", Icon: Stethoscope },
  { name: "Abogados", Icon: Scale },
  { name: "Peluquerías", Icon: Scissors },
  { name: "Reformas", Icon: Hammer },
  { name: "Cerrajeros", Icon: Briefcase },
  { name: "Talleres", Icon: Car },
  { name: "Veterinarios", Icon: PawPrint },
  { name: "Asesorías", Icon: Building2 },
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
      {/* Header */}
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4">
          <div className="flex items-center gap-10">
            <a href="/" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded bg-primary text-sm font-black text-primary-foreground">L</span>
              <span className="text-lg font-bold tracking-tight">
                Local<span className="text-primary">SEO</span>Booker
              </span>
            </a>
            <nav className="hidden items-center gap-6 text-sm font-medium text-foreground/80 md:flex">
              <a href="#" className="hover:text-primary">Sectores</a>
              <a href="#" className="hover:text-primary">Ciudades</a>
              <a href="#" className="hover:text-primary">Cómo funciona</a>
              <a href="#" className="hover:text-primary">Precios</a>
              <a href="#" className="hover:text-primary">Recursos</a>
            </nav>
          </div>
          <div className="flex items-center gap-3 text-sm font-medium">
            <a href="#" className="hidden hover:text-primary md:inline">Iniciar sesión</a>
            <a href="#" className="rounded-full bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90">Registrarse</a>
          </div>
        </div>
      </header>

      {/* Promo strip — Upwork style */}
      <div className="bg-background px-6 pt-5">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-6 rounded-[28px] bg-[linear-gradient(90deg,#f4f3c3_0%,#e6f3c8_45%,#cfe9c3_100%)] px-8 py-5 md:px-10">
          <h4 className="text-lg font-semibold leading-snug text-foreground md:text-xl">
            Deja de perder leads locales. Capta los nichos del top 1% con el plan Pro.
          </h4>
          <a href="#" className="inline-flex shrink-0 items-center gap-1 text-base font-medium text-foreground underline underline-offset-4 hover:text-primary">
            Empezar <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Hero — Upwork style */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1280px] px-6 pb-10 pt-12 md:pt-20">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Left: headline + search */}
            <div className="relative z-10">
              <h1 className="font-serif text-[56px] font-normal leading-[0.95] tracking-[-0.02em] text-foreground md:text-[92px]">
                Posiciona<br />a la velocidad<br />de tu ambición<span className="text-primary">.</span>
              </h1>
              <p className="mt-8 max-w-md text-base leading-relaxed text-foreground/80 md:text-lg">
                Conecta con los nichos locales más rentables. Convierte oportunidades de Google en clientes reales.
              </p>

              {/* Search card */}
              <div className="mt-10 max-w-xl">
                <div className="flex gap-8 border-b border-border text-base font-medium">
                  {heroTabs.map((t, i) => (
                    <button
                      key={t}
                      className={`relative pb-3 transition ${
                        i === 0
                          ? "text-foreground after:absolute after:inset-x-0 after:-bottom-px after:h-[3px] after:rounded-full after:bg-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-2 rounded-full border border-foreground/80 bg-background py-2 pl-2 pr-2">
                  <button className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-foreground hover:bg-muted">
                    Cualquier sector
                    <svg className="h-4 w-4 opacity-60" viewBox="0 0 20 20" fill="currentColor"><path d="M5.5 7.5l4.5 4.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                  <span className="h-6 w-px bg-border" />
                  <input
                    className="flex-1 bg-transparent px-2 text-sm outline-none placeholder:text-muted-foreground"
                    placeholder="Buscar oportunidades por ciudad o sector"
                  />
                  <button aria-label="Buscar" className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground transition hover:bg-primary/90">
                    <Search className="h-5 w-5" />
                  </button>
                </div>

                <p className="mt-5 text-sm text-foreground/80">
                  ¿Necesitas ayuda para encontrar el nicho perfecto?{" "}
                  <a href="#" className="font-medium text-foreground underline underline-offset-4 hover:text-primary">
                    Empieza aquí
                  </a>
                </p>
              </div>
            </div>

            {/* Right: circular collage with floating cards */}
            <div className="relative mx-auto h-[520px] w-full max-w-[560px] md:h-[600px]">
              {/* Soft gradient blob */}
              <div className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(20,168,0,0.18),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(244,243,195,0.7),transparent_55%)]" />

              {/* Main circular photo */}
              <div className="absolute inset-x-6 top-6 bottom-6 overflow-hidden rounded-full ring-1 ring-border">
                <img src={heroPro} alt="Profesional SEO local" className="h-full w-full object-cover" />
              </div>

              {/* Floating: KDI badge top-left */}
              <div className="absolute left-0 top-12 flex items-center gap-3 rounded-2xl bg-card px-4 py-3 shadow-[0_18px_40px_-12px_rgba(15,23,42,0.18)] ring-1 ring-border">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Sparkles className="h-4 w-4" />
                </span>
                <div className="text-sm">
                  <div className="font-semibold leading-tight">Nicho detectado</div>
                  <div className="text-xs text-muted-foreground">Dentistas · Valencia</div>
                </div>
              </div>

              {/* Floating: KDI score right */}
              <div className="absolute right-0 top-32 rounded-2xl bg-card px-4 py-3 shadow-[0_18px_40px_-12px_rgba(15,23,42,0.18)] ring-1 ring-border">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">KDI</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-foreground">28</span>
                  <span className="text-xs font-medium text-primary">/100</span>
                </div>
                <div className="mt-1.5 h-1.5 w-24 overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-[28%] rounded-full bg-primary" />
                </div>
              </div>

              {/* Floating: leads bottom-left */}
              <div className="absolute -left-2 bottom-10 rounded-2xl bg-card p-4 shadow-[0_18px_40px_-12px_rgba(15,23,42,0.18)] ring-1 ring-border">
                <div className="flex items-center gap-2 text-xs font-semibold text-primary">
                  <span className="h-2 w-2 rounded-full bg-primary" /> Leads estimados
                </div>
                <div className="mt-1 text-xl font-bold">+142 / mes</div>
                <div className="mt-2 flex items-end gap-[3px]">
                  {[30, 45, 38, 60, 55, 78, 92].map((h, i) => (
                    <div key={i} className="w-2 rounded-t bg-primary/80" style={{ height: `${h * 0.4}px` }} />
                  ))}
                </div>
              </div>

              {/* Floating: rating bottom-right */}
              <div className="absolute bottom-16 right-2 flex items-center gap-2 rounded-full bg-card px-4 py-2 shadow-[0_18px_40px_-12px_rgba(15,23,42,0.18)] ring-1 ring-border">
                <span className="text-base">★</span>
                <span className="text-sm font-semibold">4.9</span>
                <span className="text-xs text-muted-foreground">·  12k pros</span>
              </div>
            </div>
          </div>
        </div>



        {/* Trust logos */}
        <div className="mx-auto max-w-[1280px] px-6 pb-10">
          <p className="text-center text-xs uppercase tracking-wider text-muted-foreground">Confían en nosotros más de 12.000 profesionales</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-base font-semibold text-muted-foreground/70">
            <span className="text-primary">Inboundcycle</span>
            <span className="italic">SEMrush</span>
            <span>Webpositer</span>
            <span className="text-primary">Aukera</span>
            <span>Human Level</span>
            <span>Internet República</span>
          </div>
        </div>
      </section>

      {/* Sector grid */}
      <section className="mx-auto max-w-[1280px] px-6 py-14">
        <h2 className="text-2xl font-semibold">Encuentra oportunidades para cada sector</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {sectorGrid.map(({ name, Icon }) => (
            <a key={name} href="#" className="group flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition hover:border-primary hover:shadow-md">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold leading-snug group-hover:text-primary">{name}</span>
            </a>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-muted">
        <div className="mx-auto max-w-[1280px] px-6 py-14">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <h2 className="text-2xl font-semibold">Cómo funciona</h2>
            <div className="flex gap-1 rounded-full border border-border bg-card p-1 text-sm font-medium">
              <button
                onClick={() => setHowMode("empresas")}
                className={`rounded-full px-4 py-1.5 ${howMode === "empresas" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}
              >
                Para empresas
              </button>
              <button
                onClick={() => setHowMode("agencias")}
                className={`rounded-full px-4 py-1.5 ${howMode === "agencias" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}
              >
                Para agencias
              </button>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {howSteps.map((s, i) => (
              <div key={s.title} className={`rounded-2xl p-6 ${s.featured ? "bg-gradient-to-br from-primary/30 to-primary/10 ring-1 ring-primary/30" : "bg-card border border-border"}`}>
                <div className="flex h-32 items-center justify-center rounded-xl bg-background/60 text-3xl font-black text-primary">
                  0{i + 1}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                {s.cta && (
                  <button className="mt-4 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                    {s.cta}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator dark card */}
      <section className="mx-auto max-w-[1280px] px-6 py-14">
        <div className="relative overflow-hidden rounded-2xl bg-foreground text-white">
          <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.35),transparent_60%)]" />
          <div className="relative grid gap-8 p-8 md:grid-cols-2 md:items-center md:p-12">
            <div>
              <h3 className="text-3xl font-semibold">Calcula tu potencial SEO local</h3>
              <p className="mt-3 text-sm text-white/75">
                Estima tráfico, leads e ingresos para tu sector + ciudad. Datos reales en menos de 30 segundos.
              </p>
              <div className="mt-6 flex items-center gap-2 rounded-full bg-white p-1.5 text-foreground">
                <input
                  className="flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-muted-foreground"
                  placeholder="Ej. dentistas Valencia"
                />
                <button className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                  Calcular
                </button>
              </div>
            </div>
            <div className="relative h-56 rounded-xl border border-white/10 bg-foreground/40 p-4">
              <div className="absolute inset-x-6 top-6 text-xs uppercase tracking-wider text-white/60">Estimación de leads/mes</div>
              <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-3">
                {[40, 90, 65, 120, 80, 150, 110].map((h, idx) => (
                  <div key={idx} className="w-full rounded-t bg-gradient-to-t from-primary to-primary/40" style={{ height: `${h}px` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="bg-muted">
        <div className="mx-auto max-w-[1280px] px-6 py-14">
          <div className="text-center">
            <h2 className="text-2xl font-semibold">Elige cómo quieres trabajar</h2>
            <p className="mt-2 text-sm text-muted-foreground">Planes flexibles para autónomos, empresas y agencias.</p>
          </div>
          <div className="mx-auto mt-8 grid max-w-3xl gap-5 md:grid-cols-2">
            {plans.map((p) => (
              <div key={p.name} className={`relative rounded-2xl bg-card p-6 shadow-sm ${p.featured ? "ring-2 ring-primary" : "border border-border"}`}>
                {p.featured && (
                  <span className="absolute right-4 top-4 rounded-full bg-primary px-2 py-0.5 text-[11px] font-semibold text-primary-foreground">POPULAR</span>
                )}
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {p.items.map((it) => (
                    <li key={it} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
                <button className={`mt-6 w-full rounded-full px-4 py-2.5 text-sm font-medium ${p.featured ? "bg-primary text-primary-foreground hover:bg-primary/90" : "border border-foreground/30 hover:bg-muted"}`}>
                  {p.cta}
                </button>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-primary"><a href="#" className="hover:underline">Comparar todos los planes →</a></p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-[1280px] px-6 py-14">
        <h2 className="text-2xl font-semibold">Resultados reales con Local SEO Booker</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.author} className="rounded-2xl border border-border bg-card p-5">
              <p className="text-sm leading-relaxed">"{t.quote}"</p>
              <div className="mt-4 flex items-center gap-3 border-t border-border pt-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-sm font-semibold text-primary">
                  {t.author.charAt(0)}
                </span>
                <div>
                  <div className="text-sm font-semibold">{t.author}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Badges */}
      <section className="bg-muted">
        <div className="mx-auto max-w-[1280px] px-6 py-12 text-center">
          <h2 className="text-xl font-semibold">Reconocidos en el sector SEO local</h2>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            {badges.map((b) => (
              <div key={b} className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-medium">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">★</span>
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Green CTA strip */}
      <section className="mx-auto max-w-[1280px] px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-primary px-8 py-10 text-center text-primary-foreground md:flex-row md:text-left">
          <h3 className="text-xl font-semibold md:text-2xl">Encuentra el nicho local que hará crecer tu negocio</h3>
          <a href="#" className="inline-flex items-center gap-1 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-foreground hover:bg-white/90">
            Explorar oportunidades <ChevronRight className="h-4 w-4" />
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
