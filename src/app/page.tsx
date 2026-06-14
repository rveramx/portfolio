import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { ServiceCard } from "@/components/service-card";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { services } from "@/content/services";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Section id="hero" className="max-w-4xl py-36 sm:py-44">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 -top-24 -z-10 h-128
      bg-[radial-gradient(55%_50%_at_50%_15%,var(--glow-1),transparent_70%),radial-gradient(35%_40%_at_78%_30%,var(--glow-2),transparent_70%)]"
          />
          <p className="text-md text-foreground/60 py-2">
            {profile.name} · {profile.role} · {profile.location}
          </p>
          <h1 className="font-heading text-5xl font-bold">{profile.tagline}</h1>
        </Section>
        <Section id="services" title="Mis servicios">
          <div className="grid gap-6 sm:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </Section>
        <Section id="work" title="Mi trabajo">
          <div className="grid gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </Section>
        <Section id="about" title="Acerca de">
          <p className="text-foreground/70">{profile.intro}</p>
          <h3 className="font-semibold pt-5 text-lg">Tecnologías:</h3>
          <ul className="mt-6 flex flex-wrap gap-2">
            {profile.stack.map((t) => (
              <li
                key={t}
                className="rounded-full border border-foreground/10 px-3 py-1 text-sm text-foreground/60"
              >
                {t}
              </li>
            ))}
          </ul>
        </Section>
        <Section id="contact" title="Contacto">
          <a
            href={`mailto:${profile.email}`}
            className="text-xl font-medium text-accent underline-offset-4 hover:underline"
          >
            {profile.email}
          </a>
        </Section>
      </main>
      <Footer />
    </>
  );
}
