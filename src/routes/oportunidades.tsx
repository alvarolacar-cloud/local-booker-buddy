import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { Search, BarChart3, Users, Rocket, Star, TrendingUp, ChevronRight, Phone, Wrench, Zap, Hammer, Stethoscope, Scale, Home, Scissors, Car, UtensilsCrossed, Dumbbell, Sparkles, PawPrint, GraduationCap, Camera, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/oportunidades")({
  head: () => ({
    meta: [
      { title: "Oportunidades en Google — Rankin" },
      { name: "description", content: "Huecos reales en Google Maps por sector y ciudad, con datos de búsqueda y competencia." },
      { property: "og:title", content: "Oportunidades en Google — Rankin" },
      { property: "og:description", content: "Encuentra tu sector + ciudad. Datos reales de demanda y competencia local." },
    ],
  }),
  component: OportunidadesPage,
});

const catalogTabs = ["Todas", "Alta demanda", "Baja competencia", "Top ticket medio", "Tendencia", "Nuevas"];
const popularChips = ["Fontaneros Madrid", "Dentistas Barcelona", "Abogados Valencia"];

const openOpportunities = [
  { slug: "fontaneros-en-madrid", city: "MADRID", title: "Fontaneros en Madrid", volume: "14.300 búsq./mes", competition: "Competencia alta", competitionTone: "high", score: 82 },
  { slug: "clinicas-dentales-en-barcelona", city: "BARCELONA", title: "Clínicas dentales en Barcelona", volume: "22.300 búsq./mes", competition: "Competencia alta", competitionTone: "high", score: 78 },
  { slug: "abogados-en-valencia", city: "VALENCIA", title: "Abogados en Valencia", volume: "8.100 búsq./mes", competition: "Competencia media", competitionTone: "mid", score: 74 },
  { slug: "peluquerias-en-sevilla", city: "SEVILLA", title: "Peluquerías en Sevilla", volume: "6.400 búsq./mes", competition: "Competencia media", competitionTone: "mid", score: 86 },
  { slug: "talleres-mecanicos-en-bilbao", city: "BILBAO", title: "Talleres mecánicos en Bilbao", volume: "4.200 búsq./mes", competition: "Competencia baja", competitionTone: "low", score: 88 },
  { slug: "reformas-integrales-en-malaga", city: "MÁLAGA", title: "Reformas integrales en Málaga", volume: "9.700 búsq./mes", competition: "Competencia media", competitionTone: "mid", score: 84 },
];

const successCases = [
  { slug: "fontaneros-en-madrid", tag: "Fontanería", name: "Fontanería Ríos", city: "Madrid", rating: 9.4, reviews: 117, before: "Posición 14 en Google", after: "Top 3 en Google Maps", kpi: "+180% llamadas en 6 meses", img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&auto=format&fit=crop" },
  { slug: "clinicas-dentales-en-barcelona", tag: "Clínicas dentales", name: "Clínica Dental Sonríe", city: "Barcelona", rating: 9.2, reviews: 198, before: "0 reseñas en Google", after: "198 reseñas 4.9★", kpi: "+62 primeras visitas/mes", img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&auto=format&fit=crop" },
  { slug: "peluquerias-en-sevilla", tag: "Peluquerías", name: "Barbería El Capitán", city: "Valencia", rating: 8.9, reviews: 87, before: "Invisible en Maps", after: "1º en su barrio", kpi: "Agenda llena 3 semanas vista", img: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600&auto=format&fit=crop" },
  { slug: "talleres-mecanicos-en-bilbao", tag: "Talleres mecánicos", name: "Taller Distrito Norte", city: "Sevilla", rating: 9.6, reviews: 421, before: "Sin web", after: "Top 5 'taller cerca'", kpi: "+210% presupuestos pedidos", img: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&auto=format&fit=crop" },
];

const activeSectors = [
  { slug: "fontaneros-en-madrid", title: "Fontanería", desc: "Apareces el primero cuando alguien busca 'fontanero urgente' en tu ciudad.", volume: "14.800 búsq./mes", cities: "6 ciudades" },
  { slug: "electricidad", title: "Electricidad", desc: "Capta avisos urgentes y reformas eléctricas desde Google Maps.", volume: "9.900 búsq./mes", cities: "5 ciudades" },
  { slug: "reformas-integrales-en-malaga", title: "Reformas", desc: "Llena tu pipeline de presupuestos cualificados por barrio sin depender de portales.", volume: "12.100 búsq./mes", cities: "6 ciudades" },
  { slug: "clinicas-dentales-en-barcelona", title: "Odontología", desc: "Llena la agenda de primeras visitas locales sin depender de Doctoralia.", volume: "22.300 búsq./mes", cities: "6 ciudades" },
  { slug: "abogados-en-valencia", title: "Abogacía", desc: "Capta clientes de tu provincia con SEO local y contenido jurídico.", volume: "8.100 búsq./mes", cities: "5 ciudades" },
  { slug: "inmobiliaria", title: "Inmobiliaria", desc: "Posiciona tu inmobiliaria por cada barrio y tipo de inmueble.", volume: "18.500 búsq./mes", cities: "4 ciudades" },
  { slug: "peluquerias-en-sevilla", title: "Peluquería", desc: "Más reservas desde Google Maps y reseñas reales de clientes de la zona.", volume: "11.200 búsq./mes", cities: "6 ciudades" },
  { slug: "talleres-mecanicos-en-bilbao", title: "Mecánica", desc: "Que tu taller aparezca antes que las cadenas cuando buscan 'taller cerca'.", volume: "9.700 búsq./mes", cities: "6 ciudades" },
  { slug: "restaurantes-en-madrid", title: "Restauración", desc: "Más reservas directas desde Google y menos comisiones a TheFork.", volume: "31.400 búsq./mes", cities: "6 ciudades" },
  { slug: "fitness", title: "Fitness", desc: "Capta socios de tu zona en lugar de competir con bonopases por Ads.", volume: "7.200 búsq./mes", cities: "6 ciudades" },
  { slug: "estetica", title: "Estética", desc: "Llena tu cabina con clientes de tu barrio cuando a Google y reseñas.", volume: "8.800 búsq./mes", cities: "5 ciudades" },
  { slug: "veterinaria", title: "Veterinaria", desc: "Clientes fieles de tu zona buscando 'veterinario 24h' o 'peluquería canina'.", volume: "5.400 búsq./mes", cities: "4 ciudades" },
  { slug: "formacion", title: "Formación", desc: "Más matrículas locales sin depender de portales de cursos.", volume: "6.100 búsq./mes", cities: "4 ciudades" },
  { slug: "fotografia", title: "Fotografía", desc: "Posiciónate para 'fotógrafo de boda [ciudad]' y déjate de pagar a Ads.", volume: "3.100 búsq./mes", cities: "5 ciudades" },
];

const trendingSectors = [
  { slug: "restaurantes-en-madrid", name: "Restaurantes en Madrid", trend: "+19% vs mes anterior" },
  { slug: "clinicas-dentales-en-barcelona", name: "Clínicas dentales en Barcelona", trend: "+18% vs mes anterior" },
  { slug: "fontaneros-en-madrid", name: "Fontaneros en Madrid", trend: "+13% vs mes anterior" },
];

const lowCompetition = [
  { slug: "talleres-mecanicos-en-bilbao", name: "Talleres mecánicos en Bilbao", left: "Baja competencia", right: "Alta demanda", score: "88/100" },
  { slug: "peluquerias-en-sevilla", name: "Peluquerías en Sevilla", left: "Baja competencia", right: "Alta demanda", score: "86/100" },
  { slug: "reformas-integrales-en-malaga", name: "Reformas integrales en Málaga", left: "Baja competencia", right: "Alta demanda", score: "84/100" },
];

const topTicket = [
  { slug: "abogados-en-valencia", name: "Abogados en Valencia", ticket: "Ticket 1.080€", roi: "ROI 36.290€/mes" },
  { slug: "clinicas-dentales-en-barcelona", name: "Clínicas dentales en Barcelona", ticket: "Ticket 860€", roi: "ROI 89.520€/mes" },
  { slug: "reformas-integrales-en-malaga", name: "Reformas integrales en Málaga", ticket: "Ticket 3.500€", roi: "ROI 30.240€/mes" },
];

function ScoreBar({ value }: { value: number }) {
  return (
    <div className="mt-2 flex items-center gap-3">
      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-border">
        <div className="h-full rounded-full bg-primary" style={{ width: `${value}%` }} />
      </div>
      <span className="text-xs font-semibold text-foreground">{value}/100</span>
    </div>
  );
}

function compChip(tone: string) {
  if (tone === "high") return "bg-red-100 text-red-700";
  if (tone === "mid") return "bg-amber-100 text-amber-700";
  return "bg-emerald-100 text-emerald-700";
}

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
          <div className="relative z-10 max-w-2xl">
            <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/80">Oportunidades en Google™</div>
            <h1 className="text-5xl font-bold leading-tight">
              Encuentra tu<br />Sector + Ciudad.
            </h1>
            <p className="mt-5 max-w-md text-sm text-white/80">
              Huecos reales en Google Maps por sector y ciudad, con datos de búsqueda y competencia.
            </p>
            <div className="mt-6 flex items-center gap-2 rounded-full bg-white p-1.5 pl-5 shadow-lg">
              <Search className="h-4 w-4 text-foreground/60" />
              <input
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-foreground/50 focus:outline-none"
                placeholder='prueba "fontaneros en madrid" o "dentistas barcelona"'
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
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=900&auto=format&fit=crop"
              alt=""
              className="h-full w-full object-cover opacity-90"
              style={{ maskImage: "linear-gradient(to left, black 60%, transparent)" }}
            />
          </div>
        </section>

        {/* Qué es una oportunidad */}
        <section className="mt-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-2 text-2xl font-bold">Qué es una oportunidad de SEO local</h2>
            <p className="mb-6 text-sm text-foreground/70">El concepto sobre el que gira toda nuestra forma de trabajar.</p>
            <div className="space-y-6">
              {[
                { icon: BarChart3, title: "Demanda real", desc: "Cuánta gente busca tu servicio cada mes en esa ciudad. Sin estimaciones, datos de Google." },
                { icon: Users, title: "Competencia", desc: "Cuántos negocios pelean por esas búsquedas y cómo de fuertes son hoy en Maps." },
                { icon: Rocket, title: "Score de oportunidad", desc: "De 0 a 100. Te dice de un vistazo si merece la pena entrar ahora o esperar." },
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
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop" alt="" className="h-64 w-full rounded-xl object-cover" />
            <div className="absolute -bottom-6 right-4 w-72 rounded-xl border border-border bg-card p-5 shadow-xl">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-foreground/70">Demanda mensual</span><span className="font-semibold">14.300 búsq.</span></div>
                <div className="flex justify-between"><span className="text-foreground/70">Competencia</span><span>Alta</span></div>
                <div className="flex justify-between"><span className="text-foreground/70">Ticket medio</span><span>180€</span></div>
                <div className="flex justify-between"><span className="text-foreground/70">ROI estimado</span><span>36.290€/mes</span></div>
                <div className="flex justify-between border-t border-border pt-2"><span className="text-foreground/70">Score</span><span className="font-bold text-primary">82/100</span></div>
              </div>
              <Link to="/oportunidad/$slug" params={{ slug: "fontaneros-en-madrid" }} className="mt-4 block w-full rounded-full bg-foreground py-2 text-center text-sm font-semibold text-background">Ver informe completo</Link>
            </div>
          </div>
        </section>

        {/* Oportunidades abiertas */}
        <section className="mt-20">
          <h2 className="mb-1 text-2xl font-bold">Oportunidades abiertas ahora mismo</h2>
          <p className="mb-5 text-sm text-foreground/70">Sectores y ciudades con hueco real en Google. Entra al informe y mira los números por dentro.</p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {openOpportunities.map((o) => (
              <Link key={o.title} to="/oportunidad/$slug" params={{ slug: o.slug }} className="group block overflow-hidden rounded-xl border border-border bg-card transition hover:shadow-lg">
                <div className="aspect-[16/7] overflow-hidden">
                  <img src={`https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&auto=format&fit=crop&sig=${o.city}`} alt="" className="h-full w-full object-cover transition group-hover:scale-105" />
                </div>
                <div className="space-y-3 p-4">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-foreground/60">{o.city}</div>
                  <div className="text-base font-semibold">{o.title}</div>
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="rounded-md bg-muted px-2 py-1 font-medium text-foreground/80">{o.volume}</span>
                    <span className={`rounded-md px-2 py-1 font-medium ${compChip(o.competitionTone)}`}>{o.competition}</span>
                  </div>
                  <ScoreBar value={o.score} />
                  <span className="inline-flex items-center gap-1 border-t border-border pt-3 text-sm font-semibold text-primary">
                    Ver informe completo <ChevronRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Casos de éxito */}
        <section className="mt-20">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold">Oportunidades que ya hemos convertido en clientes</h2>
              <p className="mt-1 text-sm text-foreground/70">Negocios reales que detectamos, posicionamos y siguen con nosotros.</p>
            </div>
            <a href="#" className="flex items-center gap-1 rounded-full border border-border px-4 py-2 text-sm font-semibold">Ver todos los casos <ChevronRight className="h-4 w-4" /></a>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {successCases.map((c) => (
              <Link key={c.name} to="/oportunidad/$slug" params={{ slug: c.slug }} className="group block overflow-hidden rounded-xl border border-border bg-card hover:shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <span className="absolute left-3 top-3 z-10 rounded-md bg-primary px-2 py-1 text-[10px] font-semibold text-primary-foreground">{c.tag}</span>
                  <img src={c.img} alt={c.name} className="h-full w-full object-cover transition group-hover:scale-105" />
                </div>
                <div className="space-y-2 p-4 text-xs">
                  <div className="text-sm font-semibold text-foreground">{c.name}</div>
                  <div className="text-foreground/60">{c.city}</div>
                  <div className="flex items-center gap-2 pt-1">
                    <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-[10px] font-bold text-emerald-700">{c.rating}</span>
                    <span className="text-foreground/70">Excelente · {c.reviews} reseñas</span>
                  </div>
                  <div className="space-y-1 border-t border-border pt-2 text-foreground/70">
                    <div>Antes: {c.before}</div>
                    <div>Ahora: <span className="font-semibold text-foreground">{c.after}</span></div>
                    <div className="font-semibold text-primary">{c.kpi}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Sectores con oportunidades activas */}
        <section className="mt-20">
          <h2 className="mb-1 text-2xl font-bold">Sectores con oportunidades activas</h2>
          <p className="mb-5 text-sm text-foreground/70">Estos son los sectores donde hemos detectado hueco real en Google. Trabajamos con cualquier negocio local bajo demanda.</p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            {activeSectors.map((s) => (
              <Link key={s.title} to="/oportunidad/$slug" params={{ slug: s.slug }} className="group block rounded-xl border border-border bg-card p-4 transition hover:shadow-lg">
                <div className="mb-2 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold">{s.title}</span>
                </div>
                <p className="line-clamp-3 text-xs text-foreground/70">{s.desc}</p>
                <div className="mt-3 flex items-center justify-between border-t border-border pt-2 text-[11px]">
                  <span className="font-semibold text-foreground">{s.volume}</span>
                  <span className="text-foreground/60">{s.cities}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 rounded-2xl bg-[#0b1f3a] p-10 text-center text-white">
          <h3 className="text-2xl font-bold">¿Tu sector o ciudad no están en la lista?</h3>
          <p className="mx-auto mt-2 max-w-xl text-sm text-white/70">
            Te montamos un informe de oportunidad a medida en 48h. Gratis y sin compromiso: solo necesitamos saber a qué te dedicas y dónde.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <button className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">Pedir informe a medida →</button>
            <a href="tel:911234567" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold">
              <Phone className="h-4 w-4" /> 911 23 45 67
            </a>
          </div>
        </section>

        {/* Tipos de oportunidades */}
        <section className="mt-20">
          <h2 className="mb-1 text-2xl font-bold">Tipos de oportunidades que encontramos</h2>
          <p className="mb-5 text-sm text-foreground/70">No todas las oportunidades son iguales. Te las clasificamos para que sepas dónde entrar primero.</p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-5">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold"><TrendingUp className="h-4 w-4 text-primary" /> Sectores en tendencia</div>
              <p className="mb-4 text-xs text-foreground/70">Más búsquedas este mes. El usuario quiere ver qué está creciendo ahora.</p>
              <ul className="space-y-3 text-sm">
                {trendingSectors.map((t) => (
                  <li key={t.name}>
                    <Link to="/oportunidad/$slug" params={{ slug: t.slug }} className="flex items-center justify-between border-b border-border pb-2 last:border-0 hover:text-primary">
                      <div>
                        <div className="font-medium">{t.name}</div>
                        <div className="text-[11px] text-emerald-600">{t.trend}</div>
                      </div>
                      <TrendingUp className="h-4 w-4 text-emerald-600" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold"><Star className="h-4 w-4 text-primary" /> Oportunidades con poca competencia</div>
              <p className="mb-4 text-xs text-foreground/70">Buen volumen de búsqueda pero pocos profesionales posicionados. Ideal para entrar fácil.</p>
              <ul className="space-y-3 text-sm">
                {lowCompetition.map((t) => (
                  <li key={t.name}>
                    <Link to="/oportunidad/$slug" params={{ slug: t.slug }} className="block border-b border-border pb-2 last:border-0 hover:text-primary">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">{t.name}</div>
                        <span className="text-xs font-semibold">{t.score}</span>
                      </div>
                      <div className="mt-1 flex gap-2 text-[11px] text-foreground/60">
                        <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-emerald-700">{t.left}</span>
                        <span className="rounded bg-amber-100 px-1.5 py-0.5 text-amber-700">{t.right}</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold"><Rocket className="h-4 w-4 text-primary" /> Top oportunidades por ticket medio</div>
              <p className="mb-4 text-xs text-foreground/70">Los cruces más rentables ordenados por ticket. Entra donde cada cliente vale más.</p>
              <ul className="space-y-3 text-sm">
                {topTicket.map((t) => (
                  <li key={t.name}>
                    <Link to="/oportunidad/$slug" params={{ slug: t.slug }} className="block border-b border-border pb-2 last:border-0 hover:text-primary">
                      <div className="font-medium">{t.name}</div>
                      <div className="mt-1 flex gap-2 text-[11px]">
                        <span className="rounded bg-muted px-1.5 py-0.5 font-medium">{t.ticket}</span>
                        <span className="rounded bg-primary/10 px-1.5 py-0.5 font-semibold text-primary">{t.roi}</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>

      <footer className="mt-20 bg-[#0b1f3a] py-12 text-white">
        <div className="mx-auto max-w-[1280px] px-6 text-sm">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            <div>
              <div className="mb-3 font-semibold">Oportunidades</div>
              <ul className="space-y-2 text-white/70">
                <li><Link to="/oportunidad/$slug" params={{ slug: "fontaneros-en-madrid" }} className="hover:text-white">Fontaneros en Madrid</Link></li>
                <li><Link to="/oportunidad/$slug" params={{ slug: "clinicas-dentales-en-barcelona" }} className="hover:text-white">Dentistas en Barcelona</Link></li>
                <li><Link to="/oportunidad/$slug" params={{ slug: "abogados-en-valencia" }} className="hover:text-white">Abogados en Valencia</Link></li>
                <li><Link to="/oportunidad/$slug" params={{ slug: "reformas-integrales-en-malaga" }} className="hover:text-white">Reformas en Málaga</Link></li>
                <li><Link to="/oportunidad/$slug" params={{ slug: "talleres-mecanicos-en-bilbao" }} className="hover:text-white">Talleres en Bilbao</Link></li>
                <li><Link to="/oportunidades" className="hover:text-white">Ver todas</Link></li>
              </ul>
            </div>
            <div>
              <div className="mb-3 font-semibold">Agencia</div>
              <ul className="space-y-2 text-white/70">
                <li>Cómo funciona</li>
                <li>Casos de éxito</li>
                <li>Guías SEO local</li>
              </ul>
            </div>
            <div>
              <div className="mb-3 font-semibold">Contacto</div>
              <ul className="space-y-2 text-white/70">
                <li>911 23 45 67</li>
                <li>hola@rankin.es</li>
                <li>Madrid · Barcelona · Valencia</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/50">
            Rankin · Agencia de SEO local para negocios de barrio en España. © 2026 Rankin
          </div>
        </div>
      </footer>
    </div>
  );
}
