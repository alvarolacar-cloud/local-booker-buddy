import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import {
  Heart,
  Share2,
  Star,
  Check,
  ChevronDown,
  ChevronRight,
  Clock,
  RefreshCw,
  ShieldCheck,
  MapPin,
  Phone,
} from "lucide-react";

export const Route = createFileRoute("/oportunidad/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `Informe de oportunidad: ${params.slug} — Rankin` },
      { name: "description", content: "Informe detallado de oportunidad SEO local: demanda, competencia, ticket medio y plan de acción." },
    ],
  }),
  component: OportunidadDetalle,
});

const tabs = ["Project details", "What's included", "Portfolio", "FAQ", "Reviews", "About the seller"];

const thumbs = [
  "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&auto=format&fit=crop",
];

const packs = [
  { name: "Starter", price: "490€", delivery: "7 días", revisions: "1", features: [true, true, false, false, false, false] },
  { name: "Pro", price: "990€", delivery: "14 días", revisions: "3", features: [true, true, true, true, false, false], popular: true },
  { name: "Premium", price: "1.890€", delivery: "30 días", revisions: "Ilimitadas", features: [true, true, true, true, true, true] },
];

const featureRows = [
  "Informe de demanda local (Google)",
  "Análisis de competencia top 10",
  "Auditoría de ficha Google Business",
  "Plan de acción a 90 días",
  "Implementación SEO local",
  "Soporte mensual",
];

const faqs = [
  "¿Qué incluye exactamente el informe?",
  "¿En cuánto tiempo lo tengo?",
  "¿Necesito darte acceso a algo?",
  "¿Qué pasa si quiero contratar la implementación?",
];

const moreProjects = [
  { title: "Informe de oportunidad: Dentistas en Barcelona", price: "990€", img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&auto=format&fit=crop" },
  { title: "Informe de oportunidad: Abogados en Valencia", price: "890€", img: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=600&auto=format&fit=crop" },
  { title: "Informe de oportunidad: Talleres en Bilbao", price: "790€", img: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&auto=format&fit=crop" },
  { title: "Informe de oportunidad: Reformas en Málaga", price: "1.190€", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&auto=format&fit=crop" },
];

function OportunidadDetalle() {
  const slug = Route.useParams().slug;
  const title = "Recibirás un informe completo de oportunidad SEO local con datos reales de Google";

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <div className="mx-auto max-w-[1280px] px-6 py-6">
        {/* Breadcrumb */}
        <nav className="mb-4 flex items-center gap-1.5 text-xs text-foreground/60">
          <Link to="/oportunidades" className="hover:text-foreground">Oportunidades</Link>
          <ChevronRight className="h-3 w-3" />
          <span>SEO local</span>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">{slug}</span>
        </nav>

        {/* Title + share */}
        <div className="mb-6 flex items-start justify-between gap-6">
          <h1 className="max-w-3xl text-[26px] font-bold leading-snug">{title}</h1>
          <div className="flex shrink-0 items-center gap-3 text-sm">
            <button className="flex items-center gap-1.5 text-foreground/70 hover:text-foreground"><Heart className="h-4 w-4" /> Guardar</button>
            <button className="flex items-center gap-1.5 text-foreground/70 hover:text-foreground"><Share2 className="h-4 w-4" /> Compartir</button>
          </div>
        </div>

        {/* Seller line */}
        <div className="mb-6 flex flex-wrap items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-full bg-foreground/80 text-center text-xs font-semibold leading-7 text-background">R</div>
            <span className="font-medium">Rankin · Agencia SEO Local</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            <span className="font-semibold">5,0</span>
            <span className="text-foreground/60">(284 reseñas)</span>
          </div>
          <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700">Top Local</span>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <div>
            {/* Gallery */}
            <div className="overflow-hidden rounded-xl border border-border">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop"
                alt=""
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
            <div className="mt-3 grid grid-cols-4 gap-3">
              {thumbs.map((t, i) => (
                <img key={i} src={t} alt="" className="aspect-[4/3] w-full cursor-pointer rounded-md border border-border object-cover hover:opacity-80" />
              ))}
            </div>

            {/* Help banner */}
            <div className="mt-6 flex items-center gap-4 rounded-lg bg-sky-50 p-4 text-sm">
              <div className="text-2xl">💬</div>
              <div className="flex-1">
                <div className="font-semibold">¿Tienes dudas sobre este informe?</div>
                <div className="text-foreground/70">Habla con un especialista antes de contratar, sin compromiso.</div>
              </div>
              <button className="rounded-full border border-foreground/30 px-4 py-1.5 font-semibold">Hablar con un experto</button>
            </div>

            {/* Tabs */}
            <div className="mt-10 flex flex-wrap gap-6 border-b border-border text-sm">
              {tabs.map((t, i) => (
                <button key={t} className={`pb-3 ${i === 0 ? "border-b-2 border-foreground font-semibold" : "text-foreground/60 hover:text-foreground"}`}>{t}</button>
              ))}
            </div>

            {/* Project details */}
            <section className="mt-8">
              <h2 className="mb-4 text-xl font-bold">Detalles del proyecto</h2>
              <p className="mb-5 text-sm text-foreground/80">
                Recibirás un informe accionable con el potencial real de tu sector en tu ciudad: cuánta gente busca tus servicios cada mes, qué competidores dominan Google Maps, qué huecos puedes ocupar y un plan claro de qué hacer en los próximos 90 días para posicionarte.
              </p>
              <h3 className="mb-2 text-sm font-bold">Lo que vas a aprender</h3>
              <ul className="mb-6 space-y-1.5 text-sm text-foreground/80">
                <li>· Volumen real de búsquedas mensuales por keyword.</li>
                <li>· Top 10 competidores en Google Maps y sus puntos débiles.</li>
                <li>· Score de oportunidad 0-100 con justificación.</li>
                <li>· Plan de acción priorizado para los próximos 90 días.</li>
              </ul>

              <div className="grid grid-cols-3 gap-6 rounded-lg border border-border p-5 text-xs">
                <div>
                  <div className="mb-1 font-semibold">Tipo de informe</div>
                  <div className="text-foreground/70">SEO local · Ficha Google · Maps</div>
                </div>
                <div>
                  <div className="mb-1 font-semibold">Sector</div>
                  <div className="text-foreground/70">Servicios profesionales · Comercio local · Salud · Hostelería · Reformas</div>
                </div>
                <div>
                  <div className="mb-1 font-semibold">Formato de entrega</div>
                  <div className="text-foreground/70">PDF + Dashboard online + Sesión de 30 min</div>
                </div>
              </div>
            </section>

            {/* What's included */}
            <section className="mt-12">
              <h2 className="mb-4 text-xl font-bold">Qué incluye</h2>
              <div className="overflow-hidden rounded-lg border border-border">
                <table className="w-full text-sm">
                  <thead className="bg-muted/40 text-xs">
                    <tr>
                      <th className="p-3 text-left font-semibold">Plan</th>
                      {packs.map((p) => (
                        <th key={p.name} className="p-3 text-left">
                          <div className="font-bold">{p.name}</div>
                          <div className="text-base font-bold text-foreground">{p.price}</div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground/80">Tiempo de entrega</td>
                      {packs.map((p) => <td key={p.name} className="p-3">{p.delivery}</td>)}
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground/80">Revisiones</td>
                      {packs.map((p) => <td key={p.name} className="p-3">{p.revisions}</td>)}
                    </tr>
                    {featureRows.map((f, i) => (
                      <tr key={f} className="border-t border-border">
                        <td className="p-3 font-medium text-foreground/80">{f}</td>
                        {packs.map((p) => (
                          <td key={p.name} className="p-3">
                            {p.features[i] ? <Check className="h-4 w-4 text-emerald-600" /> : <span className="text-foreground/30">—</span>}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Portfolio */}
            <section className="mt-12">
              <h2 className="mb-4 text-xl font-bold">Casos similares</h2>
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop" className="aspect-[4/3] w-full rounded-lg object-cover" alt="" />
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop" className="aspect-[4/3] w-full rounded-lg object-cover" alt="" />
              </div>
            </section>

            {/* FAQ */}
            <section className="mt-12">
              <h2 className="mb-4 text-xl font-bold">Preguntas frecuentes</h2>
              <div className="divide-y divide-border border-y border-border">
                {faqs.map((q) => (
                  <button key={q} className="flex w-full items-center justify-between py-4 text-left text-sm font-medium hover:text-primary">
                    {q}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                ))}
              </div>
            </section>

            {/* Reviews */}
            <section className="mt-12">
              <div className="mb-5 flex items-center gap-2">
                <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                <span className="text-lg font-bold">5,0</span>
                <span className="text-sm text-foreground/60">284 reseñas</span>
              </div>
              <div className="mb-6 grid max-w-md gap-1 text-xs">
                {[5, 4, 3, 2, 1].map((s, i) => (
                  <div key={s} className="flex items-center gap-2">
                    <span className="w-3">{s}</span>
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-border">
                      <div className="h-full bg-amber-400" style={{ width: `${[92, 6, 1, 1, 0][i]}%` }} />
                    </div>
                    <span className="w-8 text-right text-foreground/60">{[92, 6, 1, 1, 0][i]}%</span>
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                {[
                  { name: "Pedro M.", city: "Madrid", text: "El informe nos abrió los ojos. Detectaron 4 huecos en Maps que ya no veíamos y nos pasaron un plan claro. Implementamos 3 y subimos al top 5 en 8 semanas." },
                  { name: "Lucía R.", city: "Barcelona", text: "Esperaba un PDF genérico y me llevé un análisis competitivo brutal. La sesión final vale el doble de lo que cuesta el informe." },
                  { name: "Javier S.", city: "Valencia", text: "Datos reales, sin humo. Recomendado para cualquier negocio local que quiera dejar de tirar dinero en Ads." },
                ].map((r) => (
                  <div key={r.name} className="flex gap-3">
                    <div className="h-8 w-8 shrink-0 rounded-full bg-primary/20 text-center text-xs font-semibold leading-8 text-primary">{r.name[0]}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-xs">
                        <span className="font-semibold">{r.name}</span>
                        <span className="text-foreground/60">{r.city}</span>
                        <span className="ml-2 flex items-center gap-0.5 text-amber-400">{"★★★★★"}</span>
                      </div>
                      <p className="mt-1 text-sm text-foreground/80">{r.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* About seller */}
            <section className="mt-12 rounded-xl border border-border p-6">
              <h2 className="mb-4 text-xl font-bold">Sobre Rankin</h2>
              <div className="flex items-start gap-4">
                <div className="h-14 w-14 shrink-0 rounded-full bg-foreground text-center text-lg font-bold leading-[3.5rem] text-background">R</div>
                <div className="flex-1 text-sm">
                  <div className="font-semibold">Agencia de SEO Local para negocios de barrio</div>
                  <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-foreground/70">
                    <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> Madrid, ES</span>
                    <span>· 6 años de experiencia</span>
                    <span>· 380+ proyectos entregados</span>
                  </div>
                  <p className="mt-3 text-foreground/80">Llevamos posicionando negocios locales en Google desde 2020. Trabajamos solo SEO local: ficha Google, Maps, reseñas, contenido por barrio y autoridad. Sin Ads, sin trucos.</p>
                </div>
              </div>
            </section>

            {/* Steps */}
            <section className="mt-12">
              <h2 className="mb-5 text-xl font-bold">Cómo trabajamos tu informe</h2>
              <ol className="space-y-5 text-sm">
                {[
                  ["Cuéntanos tu negocio y ciudad", "Rellenas un brief de 5 minutos. Necesitamos sector, ciudad y servicios principales."],
                  ["Analizamos demanda y competencia", "Cruzamos datos reales de Google + auditamos top 10 competidores en Maps."],
                  ["Te entregamos el informe y plan de acción", "PDF + dashboard online + sesión de 30 min para resolver dudas y priorizar."],
                ].map(([t, d], i) => (
                  <li key={t} className="flex gap-4">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-emerald-500 text-xs font-bold text-emerald-600">{i + 1}</div>
                    <div>
                      <div className="font-semibold">{t}</div>
                      <div className="mt-0.5 text-foreground/70">{d}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {/* More projects */}
            <section className="mt-14">
              <h2 className="mb-4 text-xl font-bold">Más informes de Rankin</h2>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {moreProjects.map((p) => (
                  <a key={p.title} href="#" className="group block overflow-hidden rounded-lg border border-border hover:shadow-md">
                    <img src={p.img} alt="" className="aspect-[4/3] w-full object-cover transition group-hover:scale-105" />
                    <div className="p-3">
                      <div className="line-clamp-2 text-xs font-medium">{p.title}</div>
                      <div className="mt-2 text-sm font-bold">Desde {p.price}</div>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar — pack */}
          <aside className="lg:sticky lg:top-6 lg:self-start">
            <div className="rounded-xl border border-border bg-card shadow-sm">
              {/* Pack tabs */}
              <div className="grid grid-cols-3 border-b border-border text-center text-xs font-semibold">
                {packs.map((p, i) => (
                  <button key={p.name} className={`relative py-3 ${i === 1 ? "bg-muted/30 text-foreground" : "text-foreground/60"}`}>
                    {p.name}
                    {p.popular && <span className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-full bg-primary px-2 py-0.5 text-[9px] text-primary-foreground">POPULAR</span>}
                  </button>
                ))}
              </div>
              <div className="p-5">
                <div className="mb-3 flex items-baseline justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-wide text-foreground/60">Plan Pro</div>
                    <div className="text-2xl font-bold">990€</div>
                  </div>
                  <div className="text-right text-xs text-foreground/60">precio cerrado<br />IVA no incluido</div>
                </div>

                <ul className="mb-4 space-y-2 text-sm">
                  <li className="flex items-center justify-between border-b border-border pb-2">
                    <span className="flex items-center gap-2 text-foreground/70"><Clock className="h-3.5 w-3.5" /> Tiempo de entrega</span>
                    <span className="font-medium">14 días</span>
                  </li>
                  <li className="flex items-center justify-between border-b border-border pb-2">
                    <span className="flex items-center gap-2 text-foreground/70"><RefreshCw className="h-3.5 w-3.5" /> Revisiones</span>
                    <span className="font-medium">3</span>
                  </li>
                  {[
                    "Informe de demanda local",
                    "Análisis de competencia top 10",
                    "Auditoría ficha Google Business",
                    "Plan de acción 90 días",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-emerald-600" /> {f}
                    </li>
                  ))}
                </ul>

                <div className="mb-3 flex items-center gap-2 rounded-md bg-amber-50 p-2 text-xs text-amber-800">
                  <ShieldCheck className="h-4 w-4" /> Garantía 14 días: si no encontramos oportunidad, te devolvemos el dinero.
                </div>

                <button className="w-full rounded-md bg-emerald-600 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700">Contratar 990€</button>
                <button className="mt-2 w-full rounded-md border border-border py-2.5 text-sm font-semibold">Guardar para luego</button>

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
        <div className="mx-auto max-w-[1280px] px-6 text-xs text-white/50">
          Rankin · Agencia de SEO local para negocios de barrio en España. © 2026 Rankin
        </div>
      </footer>
    </div>
  );
}
