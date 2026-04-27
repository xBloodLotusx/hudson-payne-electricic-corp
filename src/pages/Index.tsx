import {
  AlarmSmoke,
  Building2,
  Camera,
  CheckCircle2,
  Clock3,
  Flame,
  Headphones,
  Home,
  MapPin,
  Network,
  Phone,
  Radio,
  ShieldCheck,
  Volume2,
  Wrench,
} from "lucide-react";


const services = [
  {
    icon: ShieldCheck,
    title: "Security Systems",
    items: ["Home and business systems", "Intrusion alarms", "Access control", "24/7 monitoring options"],
  },
  {
    icon: Camera,
    title: "Surveillance Systems",
    items: ["Indoor & outdoor cameras", "Remote viewing setups", "High-definition recording systems"],
  },
  {
    icon: Flame,
    title: "Fire Alarm Systems",
    items: ["Fire alarm installation", "System upgrades", "Code-compliant residential & commercial solutions"],
  },
  {
    icon: Network,
    title: "Telecommunication Systems",
    items: ["Phone systems", "Structured cabling", "Intercom systems", "Network wiring"],
  },
  {
    icon: Volume2,
    title: "Sound Systems",
    items: ["Commercial audio systems", "PA systems", "Custom sound for schools, churches & businesses"],
  },
  {
    icon: Wrench,
    title: "Additional Services",
    items: ["System maintenance", "Troubleshooting & repairs", "Technology upgrades"],
  },
];

const reasons = [
  "Over 40 years of proven reliability",
  "Family-owned and operated",
  "Fast response times thanks to local service",
  "Highly trained specialists",
  "Personalized solutions for every property",
  "Trusted by homeowners, schools, businesses, and industrial facilities",
];

const counties = ["Lynchburg, VA", "Bedford County", "Campbell County", "Amherst County", "Appomattox County", "Central Virginia communities"];

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative min-h-[92vh] overflow-hidden bg-gradient-to-r from-trust-deep via-trust-blue to-trust-blue/20 text-hero-foreground signal-sweep">
        <div className="absolute inset-0 bg-hero-shade pointer-events-none" />
        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
          <a href="#top" className="group flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-signal focus:ring-offset-2 focus:ring-offset-trust-deep">
            <span className="flex h-11 w-11 items-center justify-center rounded-md border border-hero-foreground/25 bg-hero-foreground/10 backdrop-blur-sm transition-transform group-hover:-translate-y-0.5">
              <AlarmSmoke className="h-5 w-5 text-signal" aria-hidden="true" />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-bold uppercase tracking-[0.18em]">Hudson‑Payne</span>
              <span className="block text-xs text-hero-muted">Electronics Corp</span>
            </span>
          </a>
          <a href="tel:4348475583" className="hidden items-center gap-2 rounded-md border border-hero-foreground/25 bg-hero-foreground/10 px-4 py-2 text-sm font-semibold backdrop-blur-sm transition hover:bg-hero-foreground/20 focus:outline-none focus:ring-2 focus:ring-signal md:flex">
            <Phone className="h-4 w-4" aria-hidden="true" /> 434‑847‑5583
          </a>
        </nav>

        <div id="top" className="relative z-10 mx-auto grid min-h-[calc(92vh-92px)] max-w-7xl items-center px-6 pb-16 pt-8 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-hero-foreground/20 bg-hero-foreground/10 px-4 py-2 text-sm font-semibold text-hero-muted backdrop-blur-sm">
              <Clock3 className="h-4 w-4 text-signal" aria-hidden="true" /> Over 40 years of trusted local service
            </div>
            <h1 className="max-w-4xl text-4xl font-bold leading-[1.04] sm:text-5xl lg:text-7xl">
              Protecting Central Virginia With Trusted Security & Communication Solutions Since 1980.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-hero-muted sm:text-xl">
              Family‑owned. High‑quality installations. Fast, reliable service from local technicians who stand behind every system.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-secondary px-6 py-3 font-bold text-secondary-foreground shadow-lift transition hover:-translate-y-0.5 hover:shadow-service focus:outline-none focus:ring-2 focus:ring-signal focus:ring-offset-2 focus:ring-offset-trust-deep">
                Request Service
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-hero-foreground/30 bg-hero-foreground/10 px-6 py-3 font-bold text-hero-foreground backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-hero-foreground/20 focus:outline-none focus:ring-2 focus:ring-signal focus:ring-offset-2 focus:ring-offset-trust-deep">
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="circuit-field border-b border-border bg-paper py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-4 lg:px-8">
          {["Family‑owned", "Local technicians", "Fast support", "State‑of‑the‑art systems"].map((item) => (
            <div key={item} className="rounded-md border border-border bg-card/85 p-5 shadow-service backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-lift">
              <CheckCircle2 className="mb-4 h-6 w-6 text-secondary" aria-hidden="true" />
              <p className="font-bold text-card-foreground">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-secondary">About Hudson‑Payne</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-5xl">Local accountability, backed by decades of hands-on experience.</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-muted-foreground">
            <p>
              Hudson‑Payne Electronics Corp is a local, family‑owned security and communications company serving Lynchburg and surrounding counties for more than four decades.
            </p>
            <p>
              Known for high‑quality installations, state‑of‑the‑art technology, and personalized service, the team supports commercial buildings, residential homes, apartments, schools, and industrial facilities.
            </p>
            <p className="font-semibold text-foreground">
              Their promise is simple: personalized, timely service backed by proven experience and local technicians who are close when customers need them.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-secondary">Services</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-5xl">Integrated systems for safer, better-connected properties.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="group rounded-md border border-border bg-card p-6 shadow-service transition hover:-translate-y-1 hover:shadow-lift">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-md bg-primary text-primary-foreground transition group-hover:bg-secondary">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                  <ul className="mt-5 space-y-3 text-muted-foreground">
                    {service.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-signal" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-trust-band py-20 text-primary-foreground lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-signal">Why choose us</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-5xl">A dependable partner before, during, and long after installation.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason} className="rounded-md border border-primary-foreground/15 bg-primary-foreground/10 p-5 backdrop-blur-sm">
                <CheckCircle2 className="mb-4 h-5 w-5 text-signal" aria-hidden="true" />
                <p className="font-semibold">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-secondary">Service area</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-5xl">Serving Lynchburg and surrounding Central Virginia communities.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {counties.map((county) => (
              <div key={county} className="flex items-center gap-3 rounded-md border border-border bg-card p-4 shadow-service">
                <MapPin className="h-5 w-5 text-secondary" aria-hidden="true" />
                <span className="font-semibold">{county}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-warm-panel py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="space-y-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-secondary">Contact</p>
              <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-5xl">Request service or start a quote.</h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                Tell the local Hudson‑Payne team what type of system or support you need, and they’ll follow up with timely, personalized help.
              </p>
            </div>
            <div className="space-y-4">
              <a href="tel:4348475583" className="flex items-center gap-4 rounded-md border border-border bg-card p-5 font-bold shadow-service transition hover:-translate-y-1 hover:shadow-lift focus:outline-none focus:ring-2 focus:ring-ring">
                <Phone className="h-5 w-5 text-secondary" aria-hidden="true" /> 434‑847‑5583
              </a>
              <div className="flex items-center gap-4 rounded-md border border-border bg-card p-5 font-bold shadow-service">
                <Building2 className="h-5 w-5 text-secondary" aria-hidden="true" /> Hudson‑Payne Electronics Corp
              </div>
              <div className="flex items-center gap-4 rounded-md border border-border bg-card p-5 font-bold shadow-service">
                <Home className="h-5 w-5 text-secondary" aria-hidden="true" /> Lynchburg & surrounding counties
              </div>
            </div>
          </div>

          {/* Contact form fields removed as requested */}
        </div>
      </section>

      <footer className="bg-trust-deep px-6 py-8 text-primary-foreground lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm md:flex-row md:items-center md:justify-between">
          <p className="font-bold">Hudson‑Payne Electronics Corp</p>
          <p>434‑847‑5583 · Lynchburg & surrounding counties</p>
          <p>© {new Date().getFullYear()} Hudson‑Payne Electronics Corp</p>
        </div>
      </footer>
    </main>
  );
};

export default Index;