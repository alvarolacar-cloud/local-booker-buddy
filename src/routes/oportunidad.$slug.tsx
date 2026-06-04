import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import {
  Heart,
  Share2,
  Check,
  ChevronDown,
  ChevronRight,
  Clock,
  RefreshCw,
  ShieldCheck,
  Phone,
  Search,
  Euro,
  TrendingUp,
  Users,
  MapPin,
  Calendar,
  Star,
  Briefcase,
  Globe,
  Image as ImageIcon,
  MessageSquare,
  FileText,
  Trophy,
} from "lucide-react";

export const Route = createFileRoute("/oportunidad/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `Fontaneros en Madrid — Informe de oportunidad SEO local | Rankin` },
      { name: "description", content: "Demanda, competencia, ticket medio y facturación estimada para fontaneros en Madrid. Informe SEO local con datos reales de Google." },
    ],
  }),
  component: OportunidadDetalle,
});

const tabs = ["Fontanería", "Reformas baño", "Desatascos"];

const keywords = [
  { kw: "fontanero madrid", vol: 4400, cpc: "11,40 €", bar: 100 },
  { kw: "fontanero urgente madrid", vol: 2900, cpc: "7,12 €", bar: 70 },
  { kw: "fontanero 24h madrid", vol: 1900, cpc: "4,92 €", bar: 50 },
  { kw: "fontanero barato madrid", vol: 1300, cpc: "3,37 €", bar: 38 },
  { kw: "reparación calentador madrid", vol: 880, cpc: "2,85 €", bar: 28 },
];

const datos = [
  { icon: Search, label: "Búsquedas / mes", value: "14.800" },
  { icon: Euro, label: "Ticket medio", value: "180 €" },
  { icon: TrendingUp, label: "Facturación estimada", value: "42.624 €" },
  { icon: Users, label: "CPC medio", value: "3,20 €" },
];

const rankingIncluye = [
  { icon: Star, label: "Ficha Google" },
  { icon: MessageSquare, label: "Reseñas" },
  { icon: MapPin, label: "Mapa local" },
  { icon: ImageIcon, label: "Fotos + AEO" },
  { icon: Globe, label: "Web SEO" },
  { icon: FileText, label: "Schema local" },
];

const sidebarPacks = [
  { name: "Starter", price: "490€", popular: false },
  { name: "Pro", price: "990€", popular: true },
  { name: "Premium", price: "1.890€", popular: false },
];

const sidebarFeatures = [
  "Optimización ficha Google Business",
  "Gestión de reseñas (10/mes)",
  "Posicionamiento en Google Maps",
  "Contenido SEO local mensual",
];

const faqs = [
  "¿Cuánto tarda en aparecer en el top 3 de Google?",
  "¿Cuánto cuesta el servicio?",
  "¿Hay penalty en Google Maps por reseñas falsas?",
  "¿Desde dónde trabajáis?",
];

const moreReports = [
  { title: "Dentistas en Barcelona", slug: "dentistas-en-barcelona", img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&auto=format&fit=crop" },
  { title: "Abogados en Valencia", slug: "abogados-en-valencia", img: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=600&auto=format&fit=crop" },
  { title: "Talleres en Bilbao", slug: "talleres-en-bilbao", img: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&auto=format&fit=crop" },
  { title: "Reformas en Málaga", slug: "reformas-en-malaga", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&auto=format&fit=crop" },
];

// Mock chart data — gentle wave
const chart = [40, 45, 52, 60, 58, 55, 62, 70, 68, 72, 80, 78];

function OportunidadDetalle() {
  const slug = Route.useParams().slug;

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <div className="mx-auto max-w-[1280px] px-6 py-6">
        {/* Breadcrumb */}
        <nav className="mb-4 flex items-center gap-1.5 text-xs text-foreground/60">
          <Link to="/oportunidades" className="hover:text-foreground">Oportunidades</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">Fontaneros en Madrid</span>
        </nav>

        {/* Title block with badges + score */}
        <div className="mb-4 flex items-start justify-between gap-6">
          <div>
            <div className="mb-3 flex flex-wrap items-center gap-2 text-xs">
              <span className="rounded-md bg-emerald-100 px-2 py-0.5 font-semibold text-emerald-700">● Sector en oportunidad</span>
              <span className="rounded-md bg-amber-100 px-2 py-0.5 font-semibold text-amber-700">Competencia media</span>
              <span className="rounded-md bg-sky-100 px-2 py-0.5 font-semibold text-sky-700">Actualizado hoy</span>
            </div>
            <h1 className="text-[32px] font-bold leading-tight">Fontaneros en Madrid</h1>
            <div className="mt-1 flex items-center gap-2 text-sm text-foreground/70">
              <MapPin className="h-4 w-4" /> Madrid, España · Sector: Fontanería
            </div>
          </div>
          <div className="flex shrink-0 flex-col items-end gap-2">
            <div className="flex items-center gap-3 text-sm">
              <button className="flex items-center gap-1.5 text-foreground/70 hover:text-foreground"><Heart className="h-4 w-4" /> Guardar</button>
              <button className="flex items-center gap-1.5 text-foreground/70 hover:text-foreground"><Share2 className="h-4 w-4" /> Compartir</button>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-2">
              <div className="text-right">
                <div className="text-[10px] uppercase tracking-wide text-foreground/60">Oportunidad muy buena</div>
                <div className="text-[9px] text-foreground/50">Score sobre 100</div>
              </div>
              <div className="rounded-md bg-foreground px-3 py-1.5 text-lg font-bold text-background">82</div>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <div>
            {/* Gallery: Map + 2 photos */}
            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-2 overflow-hidden rounded-xl border border-border">
                <img
                  src="https://maps.googleapis.com/maps/api/staticmap?center=Madrid&zoom=11&size=800x500&maptype=roadmap"
                  alt="Mapa de Madrid"
                  className="aspect-[16/10] w-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&auto=format&fit=crop"; }}
                />
              </div>
              <div className="flex flex-col gap-3">
                <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&auto=format&fit=crop" alt="" className="aspect-[4/3] w-full rounded-xl border border-border object-cover" />
                <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&auto=format&fit=crop" alt="" className="aspect-[4/3] w-full rounded-xl border border-border object-cover" />
              </div>
            </div>

            {/* Top stats line */}
            <div className="mt-4 flex flex-wrap items-end justify-between gap-4 border-b border-border pb-5">
              <div className="flex gap-8">
                <div>
                  <div className="text-[10px] uppercase tracking-wide text-foreground/60">Coste medio del servicio</div>
                  <div className="text-xl font-bold">180 €</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wide text-foreground/60">Demanda mensual</div>
                  <div className="text-xl font-bold">42.624 €</div>
                </div>
              </div>
              <button className="flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm font-semibold text-background hover:opacity-90">
                Calcular mi caso <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            {/* Comparar keywords */}
            <section className="mt-10">
              <h2 className="text-xl font-bold">Comparar keywords y oportunidades</h2>
              <p className="mb-4 mt-1 text-sm text-foreground/70">Top keywords del sector ordenadas por volumen. Estas son las que generan negocio.</p>

              <div className="mb-4 flex gap-6 border-b border-border text-sm">
                {tabs.map((t, i) => (
                  <button key={t} className={`pb-2.5 ${i === 0 ? "border-b-2 border-foreground font-semibold" : "text-foreground/60 hover:text-foreground"}`}>{t}</button>
                ))}
              </div>

              <div className="space-y-3">
                {keywords.map((k, i) => (
                  <div key={k.kw} className="flex items-center gap-4 rounded-lg border border-border p-3">
                    <div className="w-6 text-xs font-semibold text-foreground/50">#{i + 1}</div>
                    <div className="flex-1">
                      <div className="mb-1.5 text-sm font-medium">«{k.kw}»</div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-border">
                        <div className="h-full bg-emerald-500" style={{ width: `${k.bar}%` }} />
                      </div>
                    </div>
                    <div className="w-20 text-right text-sm">
                      <div className="font-semibold">{k.vol.toLocaleString("es-ES")}</div>
                      <div className="text-[10px] text-foreground/60">búsquedas</div>
                    </div>
                    <div className="w-24 text-right text-sm">
                      <div className="font-semibold">{k.cpc}</div>
                      <div className="text-[10px] text-foreground/60">CPC medio Ads</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Datos de interés */}
            <section className="mt-12">
              <h2 className="mb-4 text-xl font-bold">Datos de interés</h2>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {datos.map((d) => (
                  <div key={d.label} className="rounded-lg border border-border p-4">
                    <d.icon className="mb-2 h-4 w-4 text-foreground/60" />
                    <div className="text-lg font-bold">{d.value}</div>
                    <div className="text-xs text-foreground/60">{d.label}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Qué incluye el ranking */}
            <section className="mt-12">
              <h2 className="text-xl font-bold">Qué incluye el ranking en Google</h2>
              <p className="mb-4 mt-1 text-sm text-foreground/70">Los elementos clave que tu negocio necesita para aparecer en la primera página.</p>
              <div className="grid grid-cols-3 gap-3 md:grid-cols-6">
                {rankingIncluye.map((r) => (
                  <div key={r.label} className="flex flex-col items-center gap-2 rounded-lg bg-muted/40 p-4 text-center">
                    <r.icon className="h-5 w-5 text-foreground/70" />
                    <span className="text-xs font-medium">{r.label}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Visión del mercado */}
            <section className="mt-12">
              <h2 className="mb-4 text-xl font-bold">Visión del mercado de fontaneros</h2>
              <div className="rounded-xl border border-border bg-muted/20 p-6 text-sm leading-relaxed text-foreground/85">
                <p>
                  El mercado de <strong>fontaneros en Madrid</strong> mueve más de <strong>14.800 búsquedas mensuales</strong> en Google, lo que se traduce en una demanda real bastante repartida pero con picos urgentes (averías, fugas, calentadores). El ticket medio del sector está en torno a <strong>180 €</strong> con un volumen anual estimado por encima de los <strong>500.000 €</strong> solo en captación digital.
                </p>
                <p className="mt-3">
                  La competencia en Madrid es alta pero no inalcanzable: los <strong>3 primeros resultados</strong> de Google Maps se llevan más del 65% de las llamadas, mientras que del puesto 4 al 10 queda un hueco claro para empresas que trabajen bien su ficha y reseñas. La barrera de entrada es <strong>media</strong>.
                </p>
                <p className="mt-3">
                  La estacionalidad ayuda: los meses de <strong>octubre a marzo</strong> concentran el pico por averías de calefacción y calentadores, mientras que <strong>julio-agosto</strong> sube por aire acondicionado y reformas. Aprovechar bien estas ventanas puede multiplicar tu facturación.
                </p>
              </div>
            </section>

            {/* Evolución de la demanda */}
            <section className="mt-12">
              <div className="flex items-end justify-between">
                <div>
                  <h2 className="text-xl font-bold">Evolución de la demanda (12 meses)</h2>
                  <p className="mt-1 text-sm text-foreground/70">Búsquedas mensuales de keywords del sector en Madrid.</p>
                </div>
                <button className="text-xs font-semibold text-primary">+ Ver detalle mensual</button>
              </div>
              <div className="mt-5 rounded-xl border border-border p-6">
                <div className="flex h-44 items-end gap-2">
                  {chart.map((v, i) => (
                    <div key={i} className="flex flex-1 flex-col items-center gap-1">
                      <div className="w-full rounded-t bg-gradient-to-t from-emerald-500/80 to-emerald-300" style={{ height: `${v}%` }} />
                    </div>
                  ))}
                </div>
                <div className="mt-2 flex gap-2 text-[10px] text-foreground/60">
                  {["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"].map((m) => (
                    <div key={m} className="flex-1 text-center">{m}</div>
                  ))}
                </div>
              </div>
            </section>

            {/* Cuánto puedes facturar tú */}
            <section className="mt-12">
              <div className="overflow-hidden rounded-xl border border-border">
                <div className="border-b border-border bg-amber-50/60 p-5">
                  <div className="flex items-center gap-2 text-amber-700">
                    <Trophy className="h-4 w-4" />
                    <h2 className="text-lg font-bold">¿Cuánto puedes facturar tú?</h2>
                  </div>
                  <p className="mt-1 text-sm text-foreground/70">Simulador rápido: ajusta tu cuota de mercado y ticket medio para ver tu potencial.</p>
                </div>
                <div className="grid gap-6 p-6 md:grid-cols-[1fr_280px]">
                  <div className="space-y-5">
                    <div>
                      <div className="mb-1.5 flex items-center justify-between text-sm">
                        <span className="text-foreground/70">Tu cuota de mercado estimada</span>
                        <span className="font-bold">10%</span>
                      </div>
                      <input type="range" defaultValue="10" className="w-full accent-emerald-600" />
                      <div className="mt-1 flex justify-between text-[10px] text-foreground/50"><span>1%</span><span>50%</span></div>
                    </div>
                    <div>
                      <div className="mb-1.5 flex items-center justify-between text-sm">
                        <span className="text-foreground/70">Volumen captado</span>
                        <span className="font-bold">1.480 búsquedas</span>
                      </div>
                    </div>
                    <div>
                      <div className="mb-1.5 flex items-center justify-between text-sm">
                        <span className="text-foreground/70">Clientes nuevos</span>
                        <span className="font-bold">118 / mes</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between rounded-lg bg-[#0b1f3a] p-5 text-white">
                    <div>
                      <div className="text-[10px] uppercase tracking-wide text-white/60">Facturación estimada</div>
                      <div className="mt-1 text-3xl font-bold">21.240 €</div>
                      <div className="mt-0.5 text-xs text-white/60">al mes · solo SEO local</div>
                      <div className="mt-3 flex items-center gap-1 text-xs text-emerald-300">
                        <ShieldCheck className="h-3 w-3" /> +250.000 € al año
                      </div>
                    </div>
                    <button className="mt-4 rounded-md bg-amber-400 px-4 py-2 text-sm font-semibold text-[#0b1f3a] hover:bg-amber-300">
                      Quiero explotar este → 
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Casos en el sector */}
            <section className="mt-12">
              <h2 className="text-xl font-bold">Casos en el sector</h2>
              <p className="mb-4 mt-1 text-sm text-foreground/70">Negocios de fontanería en los que ya hemos posicionado.</p>
              <div className="grid gap-4 md:grid-cols-3">
                <Link to="/oportunidad/$slug" params={{ slug: "fontaneria-rios" }} className="group overflow-hidden rounded-lg border border-border hover:shadow-md">
                  <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=600&auto=format&fit=crop" alt="" className="aspect-[16/10] w-full object-cover" />
                  <div className="p-4">
                    <div className="text-sm font-bold">Fontanería Ríos</div>
                    <div className="mt-1 text-xs font-semibold text-emerald-600">↗ +180% llamadas en 6 meses</div>
                  </div>
                </Link>
              </div>
            </section>

            {/* Zona geográfica */}
            <section className="mt-12">
              <h2 className="text-xl font-bold">Zona geográfica</h2>
              <p className="mb-3 mt-1 text-sm text-foreground/70">Barrios de Madrid con mayor demanda de fontaneros.</p>
              <div className="flex flex-wrap gap-2">
                {["Centro", "Salamanca", "Chamberí", "Tetuán", "Carabanchel", "Vallecas", "Retiro", "Moncloa"].map((b) => (
                  <span key={b} className="rounded-full border border-border bg-muted/40 px-3 py-1 text-xs">📍 {b}</span>
                ))}
              </div>
            </section>

            {/* Mejor momento para posicionarte */}
            <section className="mt-12">
              <h2 className="mb-4 text-xl font-bold">Mejor momento para posicionarte</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-border p-5">
                  <div className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-foreground/60">
                    <Calendar className="h-3.5 w-3.5" /> Pico de demanda
                  </div>
                  <div className="text-lg font-bold">Octubre — Marzo</div>
                  <p className="mt-1 text-xs text-foreground/70">Calefacción y calentadores: el pico anual del sector.</p>
                </div>
                <div className="rounded-lg border border-border p-5">
                  <div className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-foreground/60">
                    <Calendar className="h-3.5 w-3.5" /> Valle de demanda
                  </div>
                  <div className="text-lg font-bold">Julio — Agosto</div>
                  <p className="mt-1 text-xs text-foreground/70">Buen momento para empezar a posicionar antes del pico.</p>
                </div>
              </div>
            </section>

            {/* Información útil */}
            <section className="mt-12">
              <h2 className="mb-4 text-xl font-bold">Información útil</h2>
              <div className="overflow-hidden rounded-lg border border-border text-sm">
                {[
                  [Briefcase, "Tipo de servicio principal", "Reparaciones · Instalaciones · Urgencias"],
                  [Euro, "Margen medio del sector", "30% — 45%"],
                  [Users, "Intensidad de competencia", "Media · 6 competidores fuertes"],
                  [Search, "Top keyword principal", "fontanero madrid · 4.400 búsquedas/mes"],
                  [MapPin, "Distritos recomendados", "Salamanca, Chamberí, Centro"],
                  [FileText, "Documentación legal", "Boletín de instalador autorizado"],
                ].map(([Icon, label, val], i) => (
                  <div key={i} className="flex items-center gap-3 border-b border-border p-3 last:border-0">
                    {/* eslint-disable-next-line */}
                    <Icon className="h-4 w-4 text-foreground/60" />
                    <div className="w-64 text-foreground/70">{label as string}</div>
                    <div className="flex-1 font-medium">{val as string}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section className="mt-12">
              <h2 className="mb-4 text-xl font-bold">Fontaneros en Madrid: preguntas frecuentes</h2>
              <div className="divide-y divide-border border-y border-border">
                {faqs.map((q) => (
                  <button key={q} className="flex w-full items-center justify-between py-4 text-left text-sm font-medium hover:text-primary">
                    {q}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                ))}
              </div>
            </section>

            {/* CTA dark */}
            <section className="mt-14 overflow-hidden rounded-2xl bg-[#0b1f3a] p-8 text-center text-white md:p-12">
              <span className="inline-block rounded-full bg-amber-400 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-[#0b1f3a]">Informe personalizado gratis</span>
              <h2 className="mt-3 text-2xl font-bold md:text-3xl">Te ayudamos a captar clientes de<br />fontaneros en Madrid</h2>
              <p className="mx-auto mt-2 max-w-xl text-sm text-white/70">Recibe un informe a medida de tu negocio para saber cómo posicionarte en Google Maps y la primera página orgánica del buscador.</p>

              <div className="mx-auto mt-6 grid max-w-3xl gap-3 md:grid-cols-4">
                {[
                  ["SEO local", "Posicionamos tu negocio en Google Maps y en la primera página orgánica."],
                  ["Web que convierte", "Landing optimizada para convertir clics en llamadas o reservas."],
                  ["Ficha Google Maps", "Optimizamos tu ficha completa: fotos, reseñas y datos clave."],
                  ["Resultados medibles", "Informe mensual con llamadas, reservas y mejora de posiciones."],
                ].map(([t, d]) => (
                  <div key={t} className="rounded-lg bg-white/5 p-4 text-left">
                    <div className="text-xs font-bold">{t}</div>
                    <div className="mt-1 text-[11px] leading-snug text-white/60">{d}</div>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <button className="rounded-md bg-amber-400 px-5 py-2.5 text-sm font-bold text-[#0b1f3a] hover:bg-amber-300">Pedir mi informe personalizado →</button>
                <button className="rounded-md border border-white/30 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10">Ver más casos similares</button>
              </div>
            </section>

            {/* More reports */}
            <section className="mt-14">
              <h2 className="mb-4 text-xl font-bold">Más informes de oportunidad</h2>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {moreReports.map((p) => (
                  <Link key={p.slug} to="/oportunidad/$slug" params={{ slug: p.slug }} className="group block overflow-hidden rounded-lg border border-border hover:shadow-md">
                    <img src={p.img} alt="" className="aspect-[4/3] w-full object-cover transition group-hover:scale-105" />
                    <div className="p-3">
                      <div className="text-xs font-semibold">{p.title}</div>
                      <div className="mt-1 text-[10px] text-foreground/60">Ver informe →</div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar — SEO local services */}
          <aside className="lg:sticky lg:top-6 lg:self-start">
            <div className="rounded-xl border border-border bg-card shadow-sm">
              {/* Pack tabs */}
              <div className="grid grid-cols-3 border-b border-border text-center text-xs font-semibold">
                {sidebarPacks.map((p, i) => (
                  <button key={p.name} className={`relative py-3 ${i === 1 ? "bg-muted/30 text-foreground" : "text-foreground/60"}`}>
                    {p.name}
                    {p.popular && <span className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-full bg-primary px-2 py-0.5 text-[9px] text-primary-foreground">POPULAR</span>}
                  </button>
                ))}
              </div>
              <div className="p-5">
                <div className="mb-3">
                  <div className="text-xs uppercase tracking-wide text-foreground/60">SEO local Pro</div>
                  <div className="flex items-baseline justify-between">
                    <div className="text-2xl font-bold">990€<span className="text-sm font-normal text-foreground/60">/mes</span></div>
                    <div className="text-right text-xs text-foreground/60">sin permanencia<br />IVA no incluido</div>
                  </div>
                </div>

                <p className="mb-3 text-xs text-foreground/70">Servicio mensual para posicionar tu negocio en Google Maps y en la primera página orgánica de tu sector + ciudad.</p>

                <ul className="mb-4 space-y-2 text-sm">
                  <li className="flex items-center justify-between border-b border-border pb-2">
                    <span className="flex items-center gap-2 text-foreground/70"><Clock className="h-3.5 w-3.5" /> Primeros resultados</span>
                    <span className="font-medium">60-90 días</span>
                  </li>
                  <li className="flex items-center justify-between border-b border-border pb-2">
                    <span className="flex items-center gap-2 text-foreground/70"><RefreshCw className="h-3.5 w-3.5" /> Informe mensual</span>
                    <span className="font-medium">Incluido</span>
                  </li>
                  {sidebarFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" /> {f}
                    </li>
                  ))}
                </ul>

                <div className="mb-3 flex items-center gap-2 rounded-md bg-amber-50 p-2 text-xs text-amber-800">
                  <ShieldCheck className="h-4 w-4 shrink-0" /> Garantía 90 días: si no subes posiciones, te devolvemos el dinero.
                </div>

                <button className="w-full rounded-md bg-emerald-600 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700">Contratar SEO local</button>
                <button className="mt-2 w-full rounded-md border border-border py-2.5 text-sm font-semibold">Hablar con un experto</button>

                <a href="#" className="mt-4 flex items-start gap-2 text-xs text-foreground/70">
                  <Phone className="mt-0.5 h-3.5 w-3.5" />
                  <span>¿Algo a medida? <span className="font-semibold text-primary">Pide una propuesta personalizada</span></span>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <footer className="mt-20 bg-[#0b1f3a] py-12 text-white">
        <div className="mx-auto grid max-w-[1280px] gap-8 px-6 md:grid-cols-3">
          <div>
            <h4 className="mb-3 text-sm font-bold">Oportunidades</h4>
            <ul className="space-y-1.5 text-xs text-white/70">
              <li><Link to="/oportunidad/$slug" params={{ slug: "fontaneros-en-madrid" }} className="hover:text-white">Fontaneros en Madrid</Link></li>
              <li><Link to="/oportunidad/$slug" params={{ slug: "dentistas-en-barcelona" }} className="hover:text-white">Dentistas en Barcelona</Link></li>
              <li><Link to="/oportunidad/$slug" params={{ slug: "abogados-en-valencia" }} className="hover:text-white">Abogados en Valencia</Link></li>
              <li><Link to="/oportunidad/$slug" params={{ slug: "reformas-en-malaga" }} className="hover:text-white">Reformas en Málaga</Link></li>
              <li><Link to="/oportunidades" className="hover:text-white">Ver todas →</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-bold">Agencia</h4>
            <ul className="space-y-1.5 text-xs text-white/70">
              <li><Link to="/" className="hover:text-white">Cómo funciona</Link></li>
              <li><Link to="/" className="hover:text-white">Casos de éxito</Link></li>
              <li><Link to="/" className="hover:text-white">Guías SEO local</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-bold">Contacto</h4>
            <ul className="space-y-1.5 text-xs text-white/70">
              <li>hola@rankin.es</li>
              <li>+34 900 000 000</li>
              <li>Madrid · Barcelona · Valencia</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-[1280px] border-t border-white/10 px-6 pt-6 text-xs text-white/50">
          Rankin · Agencia de SEO local para negocios de barrio en España. © 2026 Rankin · {slug}
        </div>
      </footer>
    </div>
  );
}
