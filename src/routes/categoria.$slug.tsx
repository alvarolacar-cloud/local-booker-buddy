import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Search,
  Star,
  ChevronDown,
  Check,
  Sparkles,
  Zap,
  Wrench,
  Stethoscope,
  Scale,
  Scissors,
  Hammer,
  Briefcase,
  Car,
  PawPrint,
  Building2,
} from "lucide-react";
import { useState } from "react";
import heroPro from "@/assets/hero-pro.jpg";

export const Route = createFileRoute("/categoria/$slug")({
  head: ({ params }) => {
    const name = slugToName(params.slug);
    return {
      meta: [
        { title: `${name} — Oportunidades SEO locales | Local SEO Booker` },
        {
          name: "description",
          content: `Encuentra profesionales y oportunidades SEO locales del sector ${name} en España.`,
        },
        { property: "og:title", content: `${name} — Local SEO Booker` },
        {
          property: "og:description",
          content: `Marketplace de oportunidades SEO locales para el sector ${name}.`,
        },
      ],
    };
  },
  component: CategoryPage,
});

function slugToName(slug: string) {
  const map: Record<string, string> = {
    electricistas: "Electricistas",
    fontaneros: "Fontaneros",
    dentistas: "Dentistas",
    abogados: "Abogados",
    peluquerias: "Peluquerías",
    reformas: "Reformas",
    cerrajeros: "Cerrajeros",
    talleres: "Talleres",
    veterinarios: "Veterinarios",
    asesorias: "Asesorías",
  };
  return map[slug] ?? slug.charAt(0).toUpperCase() + slug.slice(1);
}

// ---------- MOCK DATA ----------
const specialtyPills = [
  "Todos los nichos",
  "Posicionamiento Local",
  "Google Maps",
  "Reseñas y reputación",
  "Ficha de Google",
  "Web Local",
  "Contenido SEO",
  "Link Building Local",
  "Auditoría",
  "Long Tail",
];

const AVATAR_COLORS = [
  "bg-emerald-100 text-emerald-700",
  "bg-sky-100 text-sky-700",
  "bg-amber-100 text-amber-700",
  "bg-rose-100 text-rose-700",
  "bg-violet-100 text-violet-700",
  "bg-teal-100 text-teal-700",
];

const freelancers = [
  { name: "Marcos R.", role: "Consultor SEO Local", city: "Madrid", rate: "45€/h", rating: 5.0, jobs: 124 },
  { name: "Lucía F.", role: "Especialista Google Maps", city: "Barcelona", rate: "55€/h", rating: 4.9, jobs: 98 },
  { name: "Álvaro M.", role: "SEO Técnico Local", city: "Valencia", rate: "60€/h", rating: 5.0, jobs: 156 },
  { name: "Carmen S.", role: "Auditoría SEO Local", city: "Sevilla", rate: "50€/h", rating: 4.8, jobs: 87 },
  { name: "Iván P.", role: "Reseñas & Reputación", city: "Bilbao", rate: "40€/h", rating: 4.9, jobs: 112 },
  { name: "Ana G.", role: "Estratega SEO Local", city: "Málaga", rate: "65€/h", rating: 5.0, jobs: 143 },
  { name: "Diego L.", role: "Link Builder Local", city: "Zaragoza", rate: "45€/h", rating: 4.7, jobs: 76 },
  { name: "Laura T.", role: "Contenido SEO Local", city: "Madrid", rate: "38€/h", rating: 4.9, jobs: 91 },
  { name: "Sergio V.", role: "Optimización Ficha GBP", city: "Valencia", rate: "50€/h", rating: 5.0, jobs: 134 },
  { name: "Marta C.", role: "SEO para Hostelería", city: "Barcelona", rate: "55€/h", rating: 4.8, jobs: 102 },
  { name: "Pablo H.", role: "Local SEO Pack", city: "Granada", rate: "48€/h", rating: 4.9, jobs: 88 },
  { name: "Sofía B.", role: "Marketing Local 360º", city: "Madrid", rate: "70€/h", rating: 5.0, jobs: 167 },
];

const skills = [
  "Google Business Profile",
  "Local SEO",
  "Citaciones NAP",
  "Schema LocalBusiness",
  "Reseñas Google",
  "SEO On-Page Local",
  "Link Building Local",
  "Optimización móvil",
  "Long tail geo",
  "CTR Maps",
  "Pack Local",
  "Auditoría Local",
];

const stats = [
  { value: "4.8", label: "Valoración media del sector" },
  { value: "20k+", label: "Proyectos completados" },
  { value: "140+", label: "Ciudades cubiertas" },
  { value: "250", label: "Especialistas verificados" },
];

const howSteps = [
  { title: "Publicar siempre es gratis", desc: "Crea tu búsqueda en minutos sin coste." },
  { title: "Recibe propuestas y contrata", desc: "Compara especialistas verificados y elige." },
  { title: "Paga cuando el trabajo esté listo", desc: "Solo abonas al validar resultados." },
];

const plans = [
  {
    name: "Básico",
    desc: "Para autónomos y pequeños negocios que empiezan con SEO local.",
    bullets: [
      "Acceso al marketplace de profesionales",
      "Filtros por ciudad y sector",
      "Soporte por email",
      "Hasta 3 búsquedas activas",
    ],
    cta: "Empezar gratis",
    featured: false,
  },
  {
    name: "Business Plus",
    desc: "Para agencias y equipos que gestionan múltiples cuentas locales.",
    bullets: [
      "Marketplace + especialistas premium",
      "Informes y exportación CSV",
      "Account manager dedicado",
      "Búsquedas y alertas ilimitadas",
    ],
    cta: "Hablar con ventas",
    featured: true,
  },
];

const testimonials = [
  { quote: "Pasamos de 0 a 40 leads/mes en 90 días gracias al especialista que encontramos aquí.", name: "Marta Ruiz", role: "Clínica Dental Sevilla" },
  { quote: "El proceso fue rapidísimo. Comparé 4 perfiles y contraté el mismo día.", name: "Andrés Gómez", role: "Reformas Madrid" },
  { quote: "ROI brutal. Nuestra ficha de Google está en el top 3 del pack local.", name: "Elena Vidal", role: "Peluquería Barcelona" },
  { quote: "El nivel de los profesionales es superior a otras plataformas que probamos.", name: "Jorge Marín", role: "Bufete Legal Valencia" },
  { quote: "Por fin una plataforma especializada en SEO local de verdad.", name: "Sara Beltrán", role: "Veterinaria Málaga" },
  { quote: "Los informes y la transparencia marcan la diferencia.", name: "David Núñez", role: "Taller Bilbao" },
];

const badges = [
  { label: "Top 10", color: "from-amber-200 to-amber-400" },
  { label: "Verified", color: "from-emerald-200 to-emerald-400" },
  { label: "Pro", color: "from-sky-200 to-sky-400" },
  { label: "Elite", color: "from-violet-200 to-violet-400" },
  { label: "Trusted", color: "from-rose-200 to-rose-400" },
  { label: "Award", color: "from-teal-200 to-teal-400" },
];

const sectorChips = [
  { label: "Electricistas", slug: "electricistas", Icon: Zap },
  { label: "Fontaneros", slug: "fontaneros", Icon: Wrench },
  { label: "Dentistas", slug: "dentistas", Icon: Stethoscope },
  { label: "Abogados", slug: "abogados", Icon: Scale },
  { label: "Peluquerías", slug: "peluquerias", Icon: Scissors },
  { label: "Reformas", slug: "reformas", Icon: Hammer },
  { label: "Cerrajeros", slug: "cerrajeros", Icon: Briefcase },
  { label: "Talleres", slug: "talleres", Icon: Car },
  { label: "Veterinarios", slug: "veterinarios", Icon: PawPrint },
  { label: "Asesorías", slug: "asesorias", Icon: Building2 },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}

function CategoryPage() {
  const { slug } = Route.useParams();
  const name = slugToName(slug);
  const [tab, setTab] = useState<"empresa" | "agencia">("empresa");
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Promo strip */}
      <div className="mx-auto max-w-[1280px] px-6 pt-6">
        <div className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-[#f4f3c3] via-[#e6f3c8] to-[#cfe9c3] px-6 py-3 text-sm">
          <span className="font-medium text-foreground">
            Deja de hacerlo todo. Contrata al top 1% del talento en {name} con Business Plus.
          </span>
          <a href="#" className="font-semibold text-foreground underline underline-offset-4">
            Empezar →
          </a>
        </div>
      </div>

      {/* HERO */}
      <section className="mx-auto max-w-[1280px] px-6 pt-6">
        <div
          className="relative overflow-hidden rounded-3xl bg-cover bg-center px-8 py-14 md:px-14 md:py-20"
          style={{
            backgroundImage: `linear-gradient(115deg, rgba(8,18,12,0.85) 0%, rgba(8,18,12,0.55) 55%, rgba(8,18,12,0.25) 100%), url(${heroPro})`,
          }}
        >
          <div className="max-w-2xl text-white">
            <h1 className="font-serif text-[44px] leading-[1.05] tracking-tight md:text-[60px]">
              Posiciona a la velocidad de tu ambición.
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/85 md:text-base">
              Contrata especialistas en {name} que amplifican tu talento usando IA y datos para convertir
              proyectos SEO complejos en impacto local medible.
            </p>

            {/* Tabs */}
            <div className="mt-7 inline-flex rounded-full bg-white/10 p-1 backdrop-blur-sm">
              <button
                onClick={() => setTab("empresa")}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  tab === "empresa" ? "bg-white text-foreground" : "text-white/80"
                }`}
              >
                Soy empresa
              </button>
              <button
                onClick={() => setTab("agencia")}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  tab === "agencia" ? "bg-white text-foreground" : "text-white/80"
                }`}
              >
                Soy agencia
              </button>
            </div>

            {/* Search */}
            <div className="mt-5 flex items-center gap-2 rounded-full bg-white p-1.5 shadow-[0_18px_40px_-12px_rgba(0,0,0,0.4)]">
              <Search className="ml-3 h-4 w-4 text-muted-foreground" />
              <input
                className="flex-1 bg-transparent px-2 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground"
                placeholder={`Busca el servicio que necesitas en ${name}`}
              />
              <button className="flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                <Search className="h-4 w-4" /> Buscar
              </button>
            </div>

            {/* Quick chips */}
            <div className="mt-5 flex flex-wrap gap-2">
              {sectorChips.slice(0, 4).map(({ label, slug: s }) => (
                <Link
                  key={s}
                  to="/categoria/$slug"
                  params={{ slug: s }}
                  className="flex items-center gap-1.5 rounded-full border border-white/30 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm transition hover:border-white hover:bg-white/15"
                >
                  {label}
                  <ChevronDown className="h-3 w-3 opacity-60" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trusted logos */}
      <div className="mx-auto max-w-[1280px] px-6 py-10">
        <p className="text-center text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
          De confianza para empresas líderes
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-12 gap-y-3 text-lg font-semibold text-foreground/40">
          <span className="text-primary">Inboundcycle</span>
          <span className="italic">SEMrush</span>
          <span>Webpositer</span>
          <span className="text-primary">Aukera</span>
          <span>Human Level</span>
          <span>Internet República</span>
        </div>
      </div>

      {/* Specialty pills */}
      <section className="mx-auto max-w-[1280px] px-6 py-4">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {specialtyPills.map((p, i) => (
            <button
              key={p}
              className={`rounded-full border px-4 py-2.5 text-sm transition hover:border-primary hover:text-primary ${
                i === 0 ? "border-foreground font-semibold" : "border-border text-foreground/80"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </section>

      {/* Freelancer grid */}
      <section className="mx-auto max-w-[1280px] px-6 py-10">
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {freelancers.map((f, i) => (
            <a
              key={f.name}
              href="#"
              className="group flex flex-col rounded-xl border border-border bg-card p-4 transition hover:border-primary hover:shadow-[0_8px_24px_-12px_rgba(15,23,42,0.18)]"
            >
              <div
                className={`mb-3 flex aspect-square w-full items-center justify-center rounded-lg text-2xl font-bold ${
                  AVATAR_COLORS[i % AVATAR_COLORS.length]
                }`}
              >
                {initials(f.name)}
              </div>
              <h3 className="text-[14px] font-semibold leading-tight group-hover:text-primary">{f.name}</h3>
              <p className="mt-1 text-[12px] text-muted-foreground">{f.role}</p>
              <div className="mt-2 flex items-center gap-1 text-[12px]">
                <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                <span className="font-semibold">{f.rating}</span>
                <span className="text-muted-foreground">· {f.jobs} jobs</span>
              </div>
              <p className="mt-1 text-[12px] font-medium text-foreground">{f.rate} · {f.city}</p>
            </a>
          ))}
        </div>

        <button
          onClick={() => setShowAll((v) => !v)}
          className="mt-6 flex w-full items-center justify-between rounded-xl border border-border bg-card px-5 py-4 text-sm font-medium hover:border-primary"
        >
          <span>Ver más especialistas de {name}</span>
          <ChevronDown className={`h-4 w-4 transition ${showAll ? "rotate-180" : ""}`} />
        </button>
      </section>

      {/* Skills banner */}
      <section className="mx-auto max-w-[1280px] px-6 py-6">
        <div className="rounded-2xl bg-gradient-to-br from-[#7ed957] via-[#4caf50] to-[#2e7d32] p-7 text-white shadow-[0_18px_40px_-12px_rgba(46,125,50,0.4)]">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <h2 className="text-2xl font-semibold">Encuentra especialistas por skill de {name}</h2>
            <div className="flex gap-2">
              <button className="rounded-full bg-white/15 px-4 py-2 text-sm font-medium ring-1 ring-white/40 hover:bg-white/25">
                Ver todas las skills
              </button>
              <button className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary hover:bg-white/90">
                Contratar
              </button>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {skills.map((s) => (
              <button
                key={s}
                className="flex items-center justify-between rounded-full bg-white/10 px-4 py-2 text-xs font-medium ring-1 ring-white/25 hover:bg-white/20"
              >
                {s}
                <span className="ml-2 text-white/70">+</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-[1280px] px-6 py-12">
        <div className="grid grid-cols-2 gap-y-8 border-y border-border py-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center md:items-start md:text-left md:px-6 md:[&:not(:first-child)]:border-l md:[&:not(:first-child)]:border-border">
              <div className="text-4xl font-semibold tracking-tight md:text-5xl">{s.value}</div>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-[1280px] px-6 py-8">
        <div className="flex items-center justify-between">
          <h2 className="text-[28px] font-semibold tracking-tight md:text-[34px]">Cómo funciona</h2>
          <div className="flex gap-1 rounded-full border border-border bg-card p-1 text-sm font-medium">
            <button className="rounded-full bg-foreground px-4 py-1.5 text-background">Para empresas</button>
            <button className="rounded-full px-4 py-1.5 text-foreground/70">Para agencias</button>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {howSteps.map((s, i) => (
            <div
              key={s.title}
              className={`flex flex-col gap-4 rounded-2xl border border-border p-6 ${
                i === 0
                  ? "bg-gradient-to-br from-[#e6f3c8] via-[#a8e063] to-[#56ab2f] text-foreground"
                  : "bg-card"
              }`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="text-sm text-foreground/75">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing insights dark card */}
      <section className="mx-auto max-w-[1280px] px-6 py-10">
        <div className="grid grid-cols-1 items-center gap-8 rounded-3xl bg-[#0f1a14] p-10 text-white md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
              Calcula el precio justo para tu proyecto SEO
            </h2>
            <p className="mt-3 text-sm text-white/70">
              Promedios reales de tarifas para servicios de {name} según ciudad y alcance.
            </p>
            <div className="mt-6 flex items-center gap-2 rounded-full bg-white/10 p-1.5 ring-1 ring-white/15">
              <input
                className="flex-1 bg-transparent px-3 py-2 text-sm text-white outline-none placeholder:text-white/50"
                placeholder="¿Qué servicio necesitas?"
              />
              <button className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
                Calcular
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <svg viewBox="0 0 240 240" className="h-56 w-56 text-[#a8e063]">
              <g fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="120" cy="120" r="40" />
                <ellipse cx="120" cy="120" rx="90" ry="40" />
                <ellipse cx="120" cy="120" rx="90" ry="40" transform="rotate(60 120 120)" />
                <ellipse cx="120" cy="120" rx="90" ry="40" transform="rotate(120 120 120)" />
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="mx-auto max-w-[1280px] px-6 py-14">
        <h2 className="text-center text-[28px] font-semibold tracking-tight md:text-[34px]">
          Elige cómo quieres contratar
        </h2>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          Dos modalidades pensadas para distintos tamaños de proyecto.
        </p>
        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-5 md:grid-cols-2">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-2xl border p-7 ${
                p.featured ? "border-primary bg-card shadow-[0_18px_40px_-12px_rgba(15,23,42,0.18)]" : "border-border bg-card"
              }`}
            >
              {p.featured && (
                <span className="absolute right-5 top-5 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold text-primary-foreground">
                  Más elegido
                </span>
              )}
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <ul className="mt-5 flex flex-col gap-2.5 text-sm">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-6 w-full rounded-full px-5 py-3 text-sm font-semibold ${
                  p.featured
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-foreground text-foreground hover:bg-foreground hover:text-background"
                }`}
              >
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative overflow-hidden py-14">
        <svg className="absolute left-0 top-1/2 -translate-y-1/2 text-primary/15" width="280" height="320" viewBox="0 0 280 320" fill="none">
          <path d="M0 60 C 100 20, 180 120, 280 80 L 280 320 L 0 320 Z" fill="currentColor" />
        </svg>
        <svg className="absolute right-0 top-1/2 -translate-y-1/2 rotate-180 text-primary/15" width="280" height="320" viewBox="0 0 280 320" fill="none">
          <path d="M0 60 C 100 20, 180 120, 280 80 L 280 320 L 0 320 Z" fill="currentColor" />
        </svg>
        <div className="relative mx-auto max-w-[1280px] px-6">
          <h2 className="text-[28px] font-semibold tracking-tight md:text-[34px]">Resultados probados en {name}</h2>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card p-6 shadow-[0_8px_24px_-16px_rgba(15,23,42,0.18)]">
                <p className="text-sm leading-relaxed text-foreground/85">"{t.quote}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${AVATAR_COLORS[i % AVATAR_COLORS.length]}`}>
                    {initials(t.name)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Badges */}
      <section className="mx-auto max-w-[1280px] px-6 py-12">
        <p className="text-center text-sm font-medium text-muted-foreground">
          Reconocidos por negocios en crecimiento
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
          {badges.map((b) => (
            <div key={b.label} className="flex flex-col items-center">
              <div className={`flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${b.color} text-xs font-bold text-foreground shadow-md`}>
                {b.label}
              </div>
              <div className="mt-1 h-3 w-10" style={{ clipPath: "polygon(0 0, 100% 0, 80% 100%, 50% 70%, 20% 100%)", background: "currentColor" }} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <section className="mx-auto max-w-[1280px] px-6 pb-16">
        <div className="rounded-3xl bg-gradient-to-r from-[#56ab2f] via-[#4caf50] to-[#2e7d32] px-8 py-10 text-center text-white">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Encuentra al especialista de {name} que te ayude a crecer
          </h2>
          <button className="mt-5 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-white/90">
            Empezar ahora
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f1a14] px-6 py-12 text-sm text-white/70">
        <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h4 className="mb-3 font-semibold text-white">Para clientes</h4>
            <ul className="space-y-2">
              <li>Cómo contratar</li>
              <li>Talento por sector</li>
              <li>Casos de éxito</li>
              <li>Centro de empresa</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-white">Para profesionales</h4>
            <ul className="space-y-2">
              <li>Cómo trabajar</li>
              <li>Encontrar proyectos</li>
              <li>Premios y reconocimientos</li>
              <li>Centro de ayuda</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-white">Recursos</h4>
            <ul className="space-y-2">
              <li>Centro de ayuda</li>
              <li>Comunidad</li>
              <li>Blog</li>
              <li>Guías SEO Local</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-white">Nosotros</h4>
            <ul className="space-y-2">
              <li>Sobre Local SEO Booker</li>
              <li>Liderazgo</li>
              <li>Prensa</li>
              <li>Contacto</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-[1280px] border-t border-white/10 pt-6 text-xs text-white/50">
          © 2026 Local SEO Booker · Términos · Privacidad · Cookies
        </div>
      </footer>
    </div>
  );
}
