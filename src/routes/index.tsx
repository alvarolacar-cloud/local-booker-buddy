import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { MapPin, Users, Search, BarChart3, Target, ChevronDown, ArrowRight, FileText } from "lucide-react";
import cityMadrid from "@/assets/city-madrid.jpg";
import cityBarcelona from "@/assets/city-barcelona.jpg";
import cityValencia from "@/assets/city-valencia.jpg";
import citySevilla from "@/assets/city-sevilla.jpg";
import cityMalaga from "@/assets/city-malaga.jpg";
import sFontaneria from "@/assets/sector-fontaneria.jpg";
import sDentistas from "@/assets/sector-dentistas.jpg";
import sReformas from "@/assets/sector-reformas.jpg";
import sElectricistas from "@/assets/sector-electricistas.jpg";
import sRestauracion from "@/assets/sector-restauracion.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LíderesMaps — Qué hacen los negocios que aparecen primero en Google Maps" },
      { name: "description", content: "Descubre qué funciona en tu sector y en tu ciudad. Análisis de los líderes en Google Maps por sector y ciudad en España." },
      { property: "og:title", content: "LíderesMaps" },
      { property: "og:description", content: "Descubre qué hacen los negocios que lideran Google Maps en tu sector y ciudad." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const features = [
  { Icon: Search, title: "Analizamos a los líderes", desc: "Identificamos los negocios mejor posicionados para tu búsqueda.", color: "bg-[oklch(0.55_0.22_260)]" },
  { Icon: Target, title: "Extraemos sus estrategias", desc: "Reseñas, backlinks, servicios, categorías y señales SEO.", color: "bg-[oklch(0.65_0.18_150)]" },
  { Icon: BarChart3, title: "Detectamos oportunidades", desc: "Comparamos las estrategias de los líderes con las tuyas.", color: "bg-[oklch(0.55_0.2_300)]" },
  { Icon: Target, title: "Creamos un plan de acción", desc: "Te mostramos qué implementar primero para competir.", color: "bg-[oklch(0.7_0.18_45)]" },
];

const sectors = [
  { name: "Fontanería", count: 15, img: sFontaneria, slug: "fontaneros" },
  { name: "Dentistas", count: 12, img: sDentistas, slug: "dentistas" },
  { name: "Reformas", count: 14, img: sReformas, slug: "reformas" },
  { name: "Electricistas", count: 14, img: sElectricistas, slug: "electricistas" },
  { name: "Restauración", count: 11, img: sRestauracion, slug: "restauracion" },
];

const cities = [
  { name: "Madrid", count: 48, img: cityMadrid },
  { name: "Barcelona", count: 37, img: cityBarcelona },
  { name: "Valencia", count: 28, img: cityValencia },
  { name: "Sevilla", count: 24, img: citySevilla },
  { name: "Málaga", count: 24, img: cityMalaga },
];

const cases = [
  { title: "Fontaneros en Madrid", desc: "Cómo alcanzaron el Top 3 en Google Maps.", rating: "4,8", reviews: 260, img: sFontaneria, wide: true },
  { title: "Clínicas Dentales en Barcelona", desc: "Cómo generan más pacientes con su ficha de Google Maps.", rating: "4,8", reviews: 198, img: sDentistas, wide: true },
  { title: "Reformas en Valencia", desc: "Estrategias que les han llevado al Top 3.", rating: "4,7", reviews: 194, img: sReformas },
  { title: "Electricistas en Sevilla", desc: "Así consiguen más llamadas desde Google Maps.", rating: "4,7", reviews: 196, img: sElectricistas },
  { title: "Restaurantes en Málaga", desc: "Claves para destacar y conseguir más reseñas.", rating: "4,6", reviews: 142, img: sRestauracion },
];

const moreAnalysis = [
  { title: "Clínica Dental Valencia", desc: "Cómo atraen más pacientes cada semana", img: sDentistas },
  { title: "Fontaneros Sevilla", desc: "Estrategias que generan más llamadas", img: sFontaneria },
  { title: "Reformas Málaga", desc: "Cómo consiguen más presupuestos", img: sReformas },
  { title: "Electricistas Madrid", desc: "Claves para aparecer en el Top 3", img: sElectricistas },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero navy band */}
      <section className="bg-[var(--navy-deep)] text-white">
        <div className="mx-auto max-w-[1280px] px-6 pb-20 pt-12">
          <h1 className="max-w-2xl text-[40px] font-extrabold leading-[1.1] tracking-tight md:text-[52px]">
            ¿Qué hacen los negocios<br />que aparecen primero en<br />
            <span className="text-[oklch(0.72_0.2_145)]">Google Maps</span>?
          </h1>
          <p className="mt-4 text-[15px] text-white/85">Descubre qué funciona en tu sector y en tu ciudad.</p>
          <button className="mt-7 rounded-md bg-[oklch(0.55_0.22_260)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[oklch(0.5_0.22_260)]">
            Ver un ejemplo
          </button>
        </div>
      </section>

      {/* Search bar (Booking-style, overlapping) */}
      <div className="mx-auto -mt-7 max-w-[1280px] px-6">
        <div className="grid grid-cols-1 items-stretch gap-0 rounded-lg border-[3px] border-[oklch(0.75_0.18_75)] bg-white shadow-md md:grid-cols-[1.2fr_1.2fr_1.4fr_auto]">
          <Field icon={<MapPin className="h-5 w-5 text-muted-foreground" />} label="¿Qué sector?" placeholder="Ej: Fontanería" />
          <Field icon={<MapPin className="h-5 w-5 text-muted-foreground" />} label="¿En qué ciudad?" placeholder="Ej: Madrid" />
          <button className="flex items-center justify-between gap-3 border-l border-border px-4 py-3 text-left">
            <span className="flex items-center gap-3">
              <Users className="h-5 w-5 text-muted-foreground" />
              <span className="text-[15px] text-foreground">2 adultos · 0 niños · 1 habitación</span>
            </span>
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </button>
          <button className="m-1 rounded-md bg-[oklch(0.55_0.22_260)] px-7 text-base font-semibold text-white hover:bg-[oklch(0.5_0.22_260)]">
            Buscar análisis
          </button>
        </div>
        <label className="mt-3 inline-flex items-center gap-2 text-sm text-foreground">
          <input type="checkbox" className="h-4 w-4 rounded border-border" /> Viajo por trabajo
        </label>
      </div>

      {/* ¿Por qué LíderesMaps? */}
      <section className="mx-auto max-w-[1280px] px-6 pt-10">
        <h2 className="text-[22px] font-bold text-[var(--navy-deep)]">¿Por qué LíderesMaps?</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ Icon, title, desc, color }) => (
            <div key={title} className="rounded-xl border border-border bg-card p-5">
              <div className="flex items-center gap-3">
                <span className={`flex h-10 w-10 items-center justify-center rounded-full text-white ${color}`}>
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-[15px] font-bold text-[var(--navy-deep)]">{title}</span>
              </div>
              <p className="mt-4 text-[14px] leading-relaxed text-foreground/80">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ¿Qué ocurre en tu sector? */}
      <SectionHeader title="¿Qué ocurre en tu sector?" cta="Ver todos los sectores" />
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {sectors.map((s) => (
            <Link key={s.name} to="/categoria/$slug" params={{ slug: s.slug }} className="group">
              <div className="overflow-hidden rounded-md">
                <img src={s.img} alt={s.name} loading="lazy" className="aspect-[4/3] w-full object-cover transition group-hover:scale-105" />
              </div>
              <div className="mt-2.5">
                <div className="text-[15px] font-bold text-[var(--navy-deep)] group-hover:underline">{s.name}</div>
                <div className="text-[13px] text-muted-foreground">{s.count} mercados</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ¿Qué ocurre en tu ciudad? */}
      <SectionHeader title="¿Qué ocurre en tu ciudad?" cta="Ver todas las ciudades" />
      <div className="mx-auto max-w-[1280px] px-6 pb-10">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {cities.map((c) => (
            <a key={c.name} href="#" className="group block overflow-hidden rounded-md">
              <div className="relative">
                <img src={c.img} alt={c.name} loading="lazy" className="aspect-[4/3] w-full object-cover transition group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-white">
                  <div className="text-[15px] font-bold">{c.name}</div>
                  <div className="text-[12px] opacity-90">{c.count} mercados</div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Casos reales */}
      <SectionHeader title="Casos reales de negocios locales" cta="Ver todos los casos" />
      <div className="mx-auto max-w-[1280px] px-6 pb-10">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {cases.filter((c) => c.wide).map((c) => (
            <CaseCard key={c.title} {...c} />
          ))}
        </div>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
          {cases.filter((c) => !c.wide).map((c) => (
            <CaseCard key={c.title} {...c} />
          ))}
        </div>
      </div>

      {/* Más análisis */}
      <SectionHeader title="Más análisis que te pueden ayudar" cta="Ver todos los análisis" />
      <div className="mx-auto max-w-[1280px] px-6 pb-12">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {moreAnalysis.map((m) => (
            <div key={m.title} className="flex gap-3 rounded-md border border-border bg-card p-2.5">
              <img src={m.img} alt={m.title} loading="lazy" className="h-[88px] w-[110px] shrink-0 rounded object-cover" />
              <div className="flex flex-col justify-between py-1">
                <div>
                  <div className="text-[14px] font-bold text-[var(--navy-deep)]">{m.title}</div>
                  <div className="mt-1 text-[12px] leading-snug text-foreground/75">{m.desc}</div>
                </div>
                <a href="#" className="inline-flex items-center gap-1 text-[12px] font-semibold text-[oklch(0.55_0.22_260)]">Ver análisis <ArrowRight className="h-3 w-3" /></a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA banner */}
      <section className="mx-auto max-w-[1280px] px-6 pb-16">
        <div className="flex flex-col items-center gap-5 rounded-xl bg-[oklch(0.95_0.04_260)] px-8 py-7 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-5">
            <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-md bg-white sm:flex">
              <MapPin className="h-9 w-9 text-[oklch(0.7_0.18_45)]" />
            </div>
            <div>
              <h3 className="text-[18px] font-bold text-[var(--navy-deep)]">¿Quieres saber cómo posicionar tu negocio en el Top 3 de Google Maps?</h3>
              <p className="mt-1 text-[13px] text-foreground/75">Solicita un análisis personalizado de tu mercado y te enseñamos las oportunidades para conseguir más visibilidad y clientes.</p>
            </div>
          </div>
          <div className="flex shrink-0 flex-col items-end gap-2">
            <a href="#" className="rounded-md bg-[oklch(0.55_0.22_260)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[oklch(0.5_0.22_260)]">Solicitar análisis gratuito</a>
            <a href="#" className="inline-flex items-center gap-1 text-[13px] font-medium text-[oklch(0.55_0.22_260)]">Ver cómo trabajamos <ArrowRight className="h-3 w-3" /></a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="mx-auto grid max-w-[1280px] gap-8 px-6 py-12 text-sm md:grid-cols-5">
          <div>
            <div className="flex items-center gap-2 font-extrabold text-[var(--navy-deep)]">
              <MapPin className="h-5 w-5 text-[oklch(0.72_0.2_145)]" />
              Líderes<span className="font-light italic">Maps</span>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">© 2026 LíderesMaps · SEO local para negocios</p>
          </div>
          {[
            { h: "Sectores", l: ["Fontaneros", "Electricistas", "Dentistas", "Reformas", "Más sectores"] },
            { h: "Ciudades", l: ["Madrid", "Barcelona", "Valencia", "Sevilla", "Más ciudades"] },
            { h: "Recursos", l: ["Casos reales", "Guías SEO local", "Blog", "Herramientas"] },
            { h: "Empresa", l: ["Quiénes somos", "Contacto", "Aviso legal", "Privacidad"] },
          ].map((col) => (
            <div key={col.h}>
              <div className="font-semibold text-[var(--navy-deep)]">{col.h}</div>
              <ul className="mt-3 space-y-2 text-foreground/75">
                {col.l.map((i) => (
                  <li key={i}><a href="#" className="hover:text-[oklch(0.55_0.22_260)]">{i}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}

function Field({ icon, label, placeholder }: { icon: React.ReactNode; label: string; placeholder: string }) {
  return (
    <label className="flex items-center gap-3 border-l border-border px-4 py-3 first:border-l-0">
      {icon}
      <span className="flex flex-col">
        <span className="text-[12px] font-bold text-foreground">{label}</span>
        <input className="bg-transparent text-[14px] text-muted-foreground outline-none placeholder:text-muted-foreground" placeholder={placeholder} />
      </span>
    </label>
  );
}

function SectionHeader({ title, cta }: { title: string; cta: string }) {
  return (
    <div className="mx-auto mt-6 flex max-w-[1280px] items-center justify-between px-6 pb-4">
      <h2 className="text-[22px] font-bold text-[var(--navy-deep)]">{title}</h2>
      <a href="#" className="inline-flex items-center gap-1 text-[13px] font-semibold text-[oklch(0.55_0.22_260)]">{cta} <ArrowRight className="h-3 w-3" /></a>
    </div>
  );
}

function CaseCard({ title, desc, rating, reviews, img }: { title: string; desc: string; rating: string; reviews: number; img: string }) {
  return (
    <a href="#" className="group relative block overflow-hidden rounded-lg bg-[var(--navy-deep)]">
      <img src={img} alt={title} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-55 transition group-hover:opacity-65" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy-deep)]/85 via-[var(--navy-deep)]/55 to-transparent" />
      <div className="relative flex min-h-[170px] flex-col justify-between p-5 text-white">
        <div>
          <h3 className="text-[18px] font-bold leading-tight">{title}</h3>
          <p className="mt-2 max-w-[260px] text-[13px] text-white/85">{desc}</p>
        </div>
        <div className="flex items-center gap-2 text-[12px]">
          <span className="rounded bg-[oklch(0.55_0.22_260)] px-1.5 py-0.5 text-[11px] font-bold">{rating}</span>
          <span className="font-semibold">Muy bien</span>
          <span className="opacity-80">· {reviews} reseñas</span>
        </div>
      </div>
    </a>
  );
}
