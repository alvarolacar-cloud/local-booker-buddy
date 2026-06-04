import { createFileRoute } from "@tanstack/react-router";
import { Search, Zap, Wrench, Stethoscope, Scale, Scissors, Hammer, Car, Heart, MapPin, ChevronRight, ChevronLeft } from "lucide-react";
import heroCity from "@/assets/hero-city.jpg";
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


const heroTabs = ["Oportunidades", "Análisis", "Subastas", "Agencias en venta"];


const sectorChips = [
  { label: "Electricistas", Icon: Zap },
  { label: "Fontaneros", Icon: Wrench },
  { label: "Dentistas", Icon: Stethoscope },
  { label: "Abogados", Icon: Scale },
  { label: "Peluquerías", Icon: Scissors },
  { label: "Reformas", Icon: Hammer },
];

const trending = [
  { tag: "Electricistas", city: "Barcelona", searches: "8.100", kdi: 28, comp: "Hasta 12.300 búsq.", img: cityBarcelona },
  { tag: "Fontaneros", city: "Madrid", searches: "12.300", kdi: 41, comp: "Hasta 18.400 búsq.", img: cityMadrid },
  { tag: "Dentistas", city: "Valencia", searches: "6.600", kdi: 58, comp: "Hasta 9.100 búsq.", img: cityValencia },
  { tag: "Cerrajeros", city: "Sevilla", searches: "4.400", kdi: 22, comp: "Hasta 6.200 búsq.", img: citySevilla },
  { tag: "Abogados", city: "Bilbao", searches: "1.900", kdi: 35, comp: "Hasta 3.100 búsq.", img: cityBilbao },
  { tag: "Reformas", city: "Málaga", searches: "3.600", kdi: 44, comp: "Hasta 5.400 búsq.", img: cityMalaga },
  { tag: "Peluquerías", city: "Zaragoza", searches: "2.400", kdi: 19, comp: "Hasta 4.000 búsq.", img: featuredMadrid },
  { tag: "Talleres", city: "Murcia", searches: "1.600", kdi: 24, comp: "Hasta 2.800 búsq.", img: cityValencia },
];

const cities = [
  { name: "Madrid", count: "1.240 oportunidades", img: cityMadrid },
  { name: "Barcelona", count: "980 oportunidades", img: cityBarcelona },
  { name: "Valencia", count: "612 oportunidades", img: cityValencia },
  { name: "Sevilla", count: "498 oportunidades", img: citySevilla },
  { name: "Bilbao", count: "342 oportunidades", img: cityBilbao },
  { name: "Málaga", count: "401 oportunidades", img: cityMalaga },
];

const articles = [
  { tag: "Guía 2026", title: "Los 10 nichos locales más rentables este año", excerpt: "Análisis sector por sector con volumen, competencia y CPC estimado.", img: featuredMadrid },
  { tag: "SEO local", title: "Cómo posicionar tu ficha de Google Business en 30 días", excerpt: "Checklist práctico de señales locales que mueven la aguja en SERP.", img: cityBarcelona },
  { tag: "Casos reales", title: "De 0 a 8.100 visitas: un electricista en Barcelona", excerpt: "Estrategia de contenido + reseñas + citations paso a paso.", img: cityMadrid },
  { tag: "Benchmark", title: "Dentistas vs fisioterapeutas en SEO local", excerpt: "Volumen, intención de búsqueda y barreras de entrada.", img: cityValencia },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 text-white">
          <a href="/" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded bg-primary text-sm font-black text-primary-foreground">L</span>
            <span className="text-lg font-bold tracking-tight">
              Local<span className="text-primary">SEO</span>Booker
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
            <a href="#" className="hover:text-primary">Oportunidades</a>
            <a href="#" className="hover:text-primary">Análisis</a>
            <a href="#" className="hover:text-primary">Subastas</a>
            <a href="#" className="hover:text-primary">Agencias en venta</a>
            <a href="#" className="hover:text-primary">Recursos</a>
          </nav>
          <div className="flex items-center gap-5 text-sm font-medium">
            <a href="#" className="hidden hover:text-primary md:inline">Iniciar sesión</a>
            <a href="#" className="rounded-md bg-primary px-3 py-2 text-primary-foreground hover:bg-primary/90">Publicar anuncio</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img src={heroCity} alt="Ciudad española al atardecer" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-foreground/40" />
        <div className="mx-auto max-w-[1280px] px-6 pb-20 pt-36 text-center text-white">
          <h1 className="mx-auto mb-6 max-w-3xl text-4xl font-bold leading-tight drop-shadow-lg md:text-5xl">
            Oportunidades en Google para tu Empresa
          </h1>

          <div className="mx-auto max-w-3xl rounded-md bg-white/95 p-0 text-foreground shadow-2xl backdrop-blur">
            {/* Tabs */}
            <div className="flex items-center justify-center gap-8 border-b border-border px-3 pt-4 text-sm font-medium">
              {heroTabs.map((t, i) => (
                <button key={t} className={`relative pb-3 ${i === 0 ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
                  {t}
                  {i === 0 && <span className="absolute inset-x-0 -bottom-px h-0.5 bg-primary" />}
                </button>
              ))}
            </div>
            {/* Sector chips */}
            <div className="flex items-center justify-center gap-2 px-3 pt-3 text-xs">
              {sectorChips.map(({ label, Icon }) => (
                <button key={label} className="flex flex-col items-center gap-1 rounded-md px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground">
                  <Icon className="h-5 w-5" />
                  <span>{label}</span>
                </button>
              ))}
            </div>
            {/* Search */}
            <div className="flex items-center gap-2 p-3">
              <div className="flex flex-1 items-center gap-2 rounded-md border border-border px-3 py-2.5">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <input
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                  placeholder="Introduce sector + ciudad (ej. electricistas Barcelona)"
                />
              </div>
              <button className="flex h-11 w-11 items-center justify-center rounded-md bg-primary text-primary-foreground hover:bg-primary/90">
                <Search className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-center gap-2 text-xs text-white/80">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-foreground">▶</span>
            Descargar app
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-6 px-6 py-10 md:grid-cols-4">
          <p className="text-sm leading-relaxed text-muted-foreground md:col-span-1">
            Llevamos más de <b>5 años</b> analizando el SEO local en España, la marca de confianza para autónomos y agencias.
          </p>
          {[
            { v: "12.000+", l: "Oportunidades activas" },
            { v: "3,2M", l: "Búsquedas/mes analizadas" },
            { v: "240+", l: "Ciudades cubiertas" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-2xl font-bold">{s.v}</div>
              <div className="text-xs text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-[1280px] px-6 pb-10">
          <p className="text-center text-sm text-muted-foreground">Agencias y empresas que ya usan Local SEO Booker</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-lg font-semibold text-muted-foreground/70">
            <span>Inboundcycle</span>
            <span className="italic">SEMrush</span>
            <span>Webpositer</span>
            <span className="text-primary">Aukera</span>
            <span>Human Level</span>
            <span>Internet República</span>
          </div>
        </div>
      </section>

      {/* Trending */}
      <section className="mx-auto max-w-[1280px] px-6 py-10">
        <div className="mb-3 flex items-end justify-between">
          <h2 className="text-xl font-semibold">Tendencias en Local SEO Booker</h2>
          <a href="#" className="text-sm font-medium text-primary hover:underline">Ver todas</a>
        </div>

        <div className="mb-5 flex gap-6 border-b border-border text-sm">
          {["Más buscados", "Baja competencia", "CPC alto", "Nuevos"].map((t, i) => (
            <button key={t} className={`-mb-px border-b-2 pb-2 ${i === 0 ? "border-primary font-medium text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`}>{t}</button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trending.map((o) => (
            <a key={o.tag + o.city} href="#" className="group block overflow-hidden rounded-md border border-border bg-card transition hover:shadow-lg">
              <div className="relative h-36">
                <img src={o.img} alt={`${o.tag} en ${o.city}`} loading="lazy" className="h-full w-full object-cover" />
                <span className="absolute left-2 top-2 rounded bg-card/95 px-2 py-0.5 text-[11px] font-medium">{o.tag}</span>
                <button className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-card/90 text-muted-foreground hover:text-primary">
                  <Heart className="h-3.5 w-3.5" />
                </button>
              </div>
              <div className="p-3">
                <div className="text-sm font-semibold">Desde {o.searches}/mes búsq.</div>
                <div className="mt-0.5 text-xs text-muted-foreground">{o.tag} · {o.city}</div>
                <div className="mt-1 text-xs text-muted-foreground">{o.comp}</div>
                <div className="mt-1 text-[11px] text-muted-foreground">KDI: <b className="text-foreground">{o.kdi}</b></div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Featured opportunity */}
      <section className="bg-muted">
        <div className="mx-auto grid max-w-[1280px] gap-8 px-6 py-14 md:grid-cols-2 md:items-center">
          <div className="relative overflow-hidden rounded-md">
            <img src={featuredMadrid} alt="Cerrajeros Madrid centro" loading="lazy" className="aspect-[4/3] w-full object-cover" />
            <div className="absolute left-4 top-4 rounded-md bg-card p-3 shadow-md">
              <div className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Próximamente</div>
              <div className="mt-1 text-sm font-semibold">Cerrajeros 24h</div>
              <div className="text-xs text-muted-foreground">Madrid centro</div>
              <div className="mt-2 text-sm font-bold">14.800/mes búsq.</div>
              <div className="text-xs text-muted-foreground">KDI 31 · Comp. media</div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Descubre tu próxima inversión en SEO local</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Cada semana publicamos las oportunidades con mejor ratio volumen/competencia.
              Únete y recibe alertas cuando aparezca un nicho a tu medida.
            </p>
            <a href="#" className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
              Saber más sobre oportunidades destacadas <ChevronRight className="h-4 w-4" />
            </a>
            <div className="mt-6 inline-block rounded-md border border-border bg-card p-4">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Próximo informe · 12 de junio</div>
              <a href="#" className="mt-2 inline-block text-sm font-medium text-primary hover:underline">Reservar plaza →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Popular cities */}
      <section className="mx-auto max-w-[1280px] px-6 py-14">
        <h2 className="text-xl font-semibold">Explora ciudades populares</h2>
        <div className="mt-2 flex gap-6 border-b border-border text-sm">
          <button className="-mb-px border-b-2 border-primary pb-2 font-medium text-primary">Ciudades ES</button>
          <button className="-mb-px border-b-2 border-transparent pb-2 text-muted-foreground hover:text-foreground">Ciudades LATAM</button>
        </div>
        <div className="relative mt-6">
          <button className="absolute -left-3 top-1/2 z-10 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card shadow md:flex">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {cities.map((c) => (
              <a key={c.name} href="#" className="group">
                <div className="overflow-hidden rounded-md">
                  <img src={c.img} alt={c.name} loading="lazy" className="aspect-[4/5] w-full object-cover transition group-hover:scale-105" />
                </div>
                <div className="mt-2 text-sm font-semibold">{c.name}</div>
                <div className="text-xs text-muted-foreground">{c.count}</div>
              </a>
            ))}
          </div>
          <button className="absolute -right-3 top-1/2 z-10 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card shadow md:flex">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Join banner */}
        <div className="mt-10 grid items-center gap-4 rounded-md border border-border bg-muted px-6 py-5 md:grid-cols-[1fr_auto_auto]">
          <div>
            <div className="font-semibold">Únete a Local SEO Booker</div>
            <p className="text-sm text-muted-foreground">Guarda búsquedas, recibe alertas de nuevos nichos y exporta informes en CSV.</p>
          </div>
          <div className="hidden h-16 w-40 rounded bg-gradient-to-r from-primary/20 to-primary/40 md:block" />
          <a href="#" className="justify-self-start rounded-md border border-foreground/20 bg-card px-4 py-2 text-sm font-medium hover:bg-background md:justify-self-end">
            Registrarse gratis
          </a>
        </div>
      </section>

      {/* Tools */}
      <section className="bg-muted">
        <div className="mx-auto grid max-w-[1280px] gap-4 px-6 py-12 md:grid-cols-2">
          {[
            { title: "Calcula tu potencial SEO", desc: "Estima tráfico y leads para tu sector + ciudad.", cta: "Calculadora SEO", img: cityMadrid },
            { title: "Encuentra una agencia", desc: "Conecta con agencias verificadas en tu zona.", cta: "Buscar agencia", img: cityBarcelona },
          ].map((t) => (
            <div key={t.title} className="relative overflow-hidden rounded-md bg-foreground text-white">
              <img src={t.img} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="relative flex h-56 flex-col justify-end p-6">
                <h3 className="text-lg font-semibold">{t.title}</h3>
                <p className="mt-1 text-sm text-white/80">{t.desc}</p>
                <button className="mt-3 w-fit rounded-md bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur hover:bg-white/25">{t.cta}</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Articles */}
      <section className="mx-auto max-w-[1280px] px-6 py-14">
        <div className="mb-5 flex items-end justify-between">
          <h2 className="text-xl font-semibold">SEO local explicado</h2>
          <a href="#" className="text-sm font-medium text-primary hover:underline">Más artículos</a>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {articles.map((a) => (
            <a key={a.title} href="#" className="group">
              <div className="relative overflow-hidden rounded-md">
                <img src={a.img} alt={a.title} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                <span className="absolute left-3 top-3 rounded bg-primary px-2 py-0.5 text-[11px] font-medium text-primary-foreground">{a.tag}</span>
              </div>
              <h3 className="mt-3 font-semibold leading-snug group-hover:text-primary">{a.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{a.excerpt}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Podcast strip */}
      <section className="mx-auto max-w-[1280px] px-6 pb-14">
        <div className="grid items-stretch overflow-hidden rounded-md border border-border md:grid-cols-2">
          <div className="bg-card p-8">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">El podcast</div>
            <h3 className="mt-1 text-xl font-semibold">En la SERP: conversaciones de SEO local</h3>
            <p className="mt-2 text-sm text-muted-foreground">Cada quincena hablamos con un profesional que ha levantado un negocio local gracias al SEO.</p>
            <button className="mt-4 rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-muted">Escuchar episodios</button>
          </div>
          <div className="relative flex items-center justify-center bg-primary p-12 text-primary-foreground">
            <svg className="absolute inset-0 h-full w-full opacity-20" viewBox="0 0 200 100" preserveAspectRatio="none">
              <path d="M0,80 L20,60 L40,70 L60,40 L80,55 L100,30 L120,50 L140,25 L160,45 L180,20 L200,35 L200,100 L0,100 Z" fill="white" />
            </svg>
            <div className="relative text-right leading-none">
              <div className="text-xs font-light uppercase tracking-widest opacity-80">en la</div>
              <div className="text-5xl font-black tracking-tight">SERP</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="relative isolate overflow-hidden bg-foreground text-white">
        <img src={featuredMadrid} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25" />
        <div className="mx-auto grid max-w-[1280px] gap-6 px-6 py-14 md:grid-cols-3">
          <div className="md:col-span-3">
            <h3 className="text-2xl font-semibold">Capta más clientes locales que tu competencia</h3>
          </div>
          {[
            { t: "Audiencia cualificada", d: "+95% de visitas con intención local clara." },
            { t: "Capta prospectos", d: "Leads cualificados gracias a SEO local hipersegmentado." },
            { t: "Más oportunidades", d: "Aparece antes en Google Maps y en el pack local." },
          ].map((c) => (
            <div key={c.t}>
              <div className="font-semibold">{c.t}</div>
              <p className="mt-1 text-sm text-white/70">{c.d}</p>
            </div>
          ))}
          <div className="md:col-span-3">
            <button className="rounded-md bg-white/15 px-5 py-2.5 text-sm font-medium backdrop-blur hover:bg-white/25">Explorar planes</button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto grid max-w-[1280px] gap-10 px-6 py-14 md:grid-cols-[1fr_2fr]">
        <div>
          <h3 className="text-xl font-semibold">Fundamentos del SEO local: preguntas clave para autónomos y agencias</h3>
        </div>
        <div className="divide-y divide-border rounded-md border border-border bg-card">
          {[
            "¿Puedo usar Local SEO Booker fuera de España?",
            "¿Ofrecéis recursos formativos para principiantes?",
            "¿Qué sector tiene menos competencia ahora mismo?",
            "¿Cómo se calcula el KDI de cada oportunidad?",
          ].map((q) => (
            <div key={q} className="flex items-center justify-between px-5 py-4 text-sm font-medium">
              {q}
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </div>
          ))}
        </div>
      </section>

      {/* Footer top tabs */}
      <div className="border-t border-border bg-muted">
        <div className="mx-auto max-w-[1280px] px-6 pt-8">
          <div className="flex gap-6 border-b border-border text-sm">
            {["Oportunidades", "Sectores", "Ciudades", "Agencias", "Recursos"].map((t, i) => (
              <button key={t} className={`-mb-px border-b-2 pb-2 ${i === 0 ? "border-primary font-medium text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`}>{t}</button>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 py-6 text-xs text-muted-foreground md:grid-cols-4">
            {[
              "Electricistas en Madrid", "Fontaneros en Barcelona", "Dentistas en Valencia", "Abogados en Sevilla",
              "Cerrajeros en Bilbao", "Reformas en Málaga", "Peluquerías en Zaragoza", "Talleres en Murcia",
              "Fisioterapeutas en Granada", "Asesores en Vigo", "Veterinarios en Alicante", "Pintores en Córdoba",
            ].map((l) => (
              <a key={l} href="#" className="hover:text-primary">{l}</a>
            ))}
            <a href="#" className="font-medium text-primary">Ver más →</a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-muted">
        <div className="mx-auto grid max-w-[1280px] gap-8 px-6 py-12 text-sm md:grid-cols-5">
          <div>
            <div className="flex items-center gap-2 font-bold">
              <span className="inline-block h-5 w-5 rounded-sm bg-primary" />
              LocalSEO<span className="text-primary">Booker</span>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">Conecta con nosotros</p>
            <p className="mt-4 text-xs text-muted-foreground">© 2026 Local SEO Booker</p>
          </div>
          {[
            { h: "Buscar", l: ["Oportunidades", "Sectores", "Ciudades", "Tendencias", "Buscar agencia"] },
            { h: "Producto", l: ["Alertas", "Exportar CSV", "API", "Planes"] },
            { h: "Recursos", l: ["Blog", "Podcast", "Guías", "Casos de éxito", "Glosario"] },
            { h: "Empresa", l: ["Sobre nosotros", "Carreras", "Contacto", "Aviso legal", "Privacidad"] },
          ].map((col) => (
            <div key={col.h}>
              <div className="font-semibold">{col.h}</div>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                {col.l.map((i) => (
                  <li key={i}><a href="#" className="hover:text-foreground">{i}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}
